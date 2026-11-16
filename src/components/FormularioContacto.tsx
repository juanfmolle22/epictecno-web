"use client";

import { useActionState } from "react";
import { enviarMensaje, type EstadoContacto } from "@/app/(site)/contacto/actions";
import { SERVICIOS } from "@/content/site";

const inicial: EstadoContacto = { estado: "inicial" };

const campo =
  "mt-2 w-full rounded-xl border border-input bg-white px-4 py-3 text-tinta placeholder:text-tinta-suave/70 focus:border-cobalto aria-[invalid=true]:border-destructive";

export function FormularioContacto() {
  const [estado, accion, enviando] = useActionState(enviarMensaje, inicial);

  if (estado.estado === "enviado") {
    return (
      <div role="status" className="rounded-3xl bg-white p-8 ring-1 ring-bruma md:p-10">
        <h2 className="text-3xl font-semibold">Mensaje enviado.</h2>
        <p className="mt-3 text-tinta-suave">
          Lo hemos recibido. Te responderemos al email que nos has dejado.
        </p>
      </div>
    );
  }

  const v = estado.valores;
  const e = estado.errores ?? {};

  return (
    <form action={accion} noValidate className="relative overflow-hidden rounded-3xl bg-white p-6 ring-1 ring-bruma md:p-10">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="nombre" className="font-semibold">
            Nombre
          </label>
          <input
            id="nombre"
            name="nombre"
            autoComplete="name"
            required
            defaultValue={v?.nombre}
            aria-invalid={!!e.nombre}
            aria-describedby={e.nombre ? "error-nombre" : undefined}
            className={campo}
          />
          {e.nombre && (
            <p id="error-nombre" className="mt-2 text-sm text-destructive">
              {e.nombre}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            defaultValue={v?.email}
            aria-invalid={!!e.email}
            aria-describedby={e.email ? "error-email" : undefined}
            className={campo}
          />
          {e.email && (
            <p id="error-email" className="mt-2 text-sm text-destructive">
              {e.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="tipo" className="font-semibold">
          Qué necesitas
        </label>
        <select id="tipo" name="tipo" defaultValue={v?.tipo ?? ""} className={campo}>
          <option value="">Todavía no lo tengo claro</option>
          {SERVICIOS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.titulo}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-6">
        <label htmlFor="mensaje" className="font-semibold">
          Cuéntanos el proyecto
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={6}
          required
          defaultValue={v?.mensaje}
          placeholder="Qué vende o hace tu negocio, qué necesitas y para cuándo."
          aria-invalid={!!e.mensaje}
          aria-describedby={e.mensaje ? "error-mensaje" : undefined}
          className={campo}
        />
        {e.mensaje && (
          <p id="error-mensaje" className="mt-2 text-sm text-destructive">
            {e.mensaje}
          </p>
        )}
      </div>

      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="empresa_web">No rellenes este campo</label>
        <input id="empresa_web" name="empresa_web" tabIndex={-1} autoComplete="off" />
      </div>

      {estado.mensaje && (
        <p role="alert" className="mt-6 rounded-xl bg-destructive/10 px-4 py-3 text-destructive">
          {estado.mensaje}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="boton mt-8 bg-cobalto text-white hover:bg-cobalto-oscuro disabled:opacity-60"
      >
        {enviando ? "Enviando mensaje" : "Enviar mensaje"}
      </button>
    </form>
  );
}
