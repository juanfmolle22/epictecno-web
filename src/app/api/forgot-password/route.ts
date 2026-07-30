import { NextResponse } from "next/server";
import { randomBytes } from "crypto";
import { prisma } from "@/lib/prisma";
import { resend } from "@/lib/resend";

export async function POST(request: Request) {
  const { email } = await request.json();

  const usuario = await prisma.usuario.findUnique({ where: { email } });

  // Por seguridad, respondemos "ok" siempre, exista o no el email
  // (así nadie puede usar este endpoint para adivinar qué emails están registrados)
  if (!usuario) {
    return NextResponse.json({ ok: true });
  }

  const token = randomBytes(32).toString("hex");
  const expiry = new Date(Date.now() + 1000 * 60 * 30); // expira en 30 min

  await prisma.usuario.update({
    where: { email },
    data: { resetToken: token, resetTokenExpiry: expiry },
  });

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${token}`;

  await resend.emails.send({
  from: "EpicTecno <noreply@epictecno.com>",
    to: email,
    subject: "Restablece tu contraseña",
    html: `
      <p>Hola ${usuario.nombre},</p>
      <p>Recibimos una solicitud para restablecer tu contraseña. Este link expira en 30 minutos:</p>
      <p><a href="${resetUrl}">${resetUrl}</a></p>
      <p>Si no fuiste tú, ignora este email.</p>
    `,
  });

  return NextResponse.json({ ok: true });
}