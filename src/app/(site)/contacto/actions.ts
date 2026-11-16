"use server";

import { Resend } from "resend";
import { prisma } from "@/lib/prisma";
import { SERVICIOS } from "@/content/site";

export type EstadoContacto = {
  estado: "inicial" | "enviado" | "error";
  mensaje?: string;
  errores?: Partial<Record<"nombre" | "email" | "mensaje", string>>;
  valores?: { nombre: string; email: string; tipo: string; mensaje: string };
};

const escapar = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export async function enviarMensaje(
  _prev: EstadoContacto,
  formData: FormData,
): Promise<EstadoContacto> {
  const valores = {
    nombre: String(formData.get("nombre") ?? "").trim().slice(0, 120),
    email: String(formData.get("email") ?? "").trim().slice(0, 200),
    tipo: String(formData.get("tipo") ?? "").trim(),
    mensaje: String(formData.get("mensaje") ?? "").trim().slice(0, 5000),
  };

  // Campo trampa: los bots lo rellenan, las personas no lo ven.
  if (String(formData.get("empresa_web") ?? "") !== "") {
    return { estado: "enviado" };
  }

  const errores: EstadoContacto["errores"] = {};
  if (valores.nombre.length < 2) errores.nombre = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email))
    errores.email = "Escribe un email válido, por ejemplo nombre@empresa.com.";
  if (valores.mensaje.length < 10)
    errores.mensaje = "Cuéntanos un poco más sobre el proyecto (mínimo 10 caracteres).";
  if (Object.keys(errores).length > 0) {
    return { estado: "error", errores, valores };
  }

  const servicio = SERVICIOS.find((s) => s.id === valores.tipo);
  const texto = servicio
    ? `[${servicio.titulo}] ${valores.mensaje}`
    : valores.mensaje;

  try {
    await prisma.mensaje.create({
      data: { nombre: valores.nombre, email: valores.email, mensaje: texto },
    });
  } catch (e) {
    console.error("No se pudo guardar el mensaje de contacto", e);
    return {
      estado: "error",
      mensaje:
        "No hemos podido guardar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.",
      valores,
    };
  }

  // Aviso por email. Si falla, el mensaje ya está guardado.
  const { RESEND_API_KEY, CONTACT_EMAIL } = process.env;
  if (RESEND_API_KEY && CONTACT_EMAIL) {
    try {
      await new Resend(RESEND_API_KEY).emails.send({
        from: "EpicTecno <noreply@epictecno.com>",
        to: CONTACT_EMAIL,
        replyTo: valores.email,
        subject: `Nuevo contacto de ${valores.nombre}`,
        html: `<p><strong>${escapar(valores.nombre)}</strong> (${escapar(valores.email)})</p>
<p>Servicio: ${escapar(servicio?.titulo ?? "Sin indicar")}</p>
<p>${escapar(valores.mensaje).replace(/\n/g, "<br>")}</p>`,
      });
    } catch (e) {
      console.error("No se pudo enviar el aviso de contacto", e);
    }
  }

  return { estado: "enviado" };
}
