"use client";

import { motion, MotionConfig } from "motion/react";
import { ESQUEMAS, type Tono } from "@/content/esquemas";
import type { TipoId } from "@/content/site";
import { cn } from "@/lib/utils";

const TONOS: Record<Tono, string> = {
  tinta: "bg-tinta text-white",
  cobalto: "bg-cobalto text-white",
  llama: "bg-llama text-tinta",
  bruma: "bg-bruma text-tinta",
  blanco: "bg-white text-tinta ring-1 ring-inset ring-bruma",
};

type Props = {
  tipo: TipoId;
  /** Muestra el texto de cada bloque. Desactívalo en miniaturas. */
  etiquetas?: boolean;
  /** Los bloques entran escalonados la primera vez que se pintan. */
  entrada?: boolean;
  className?: string;
};

/** Boceto de pantalla del tipo de proyecto, dentro de un marco de navegador. */
export function Esquema({
  tipo,
  etiquetas = true,
  entrada = false,
  className,
}: Props) {
  const bloques = ESQUEMAS[tipo];

  return (
    <MotionConfig reducedMotion="user">
      <div
        role="img"
        aria-label={`Boceto de pantalla: ${bloques
          .map((b) => b.texto)
          .filter(Boolean)
          .join(", ")}`}
        className={cn(
          "overflow-hidden rounded-2xl border border-tinta/15 bg-papel",
          className,
        )}
      >
        <div className="flex items-center gap-1.5 border-b border-tinta/10 bg-white px-3.5 py-2.5">
          <span className="size-2.5 rounded-full bg-bruma" />
          <span className="size-2.5 rounded-full bg-bruma" />
          <span className="size-2.5 rounded-full bg-bruma" />
          <span className="ml-2 h-4 flex-1 rounded-full bg-papel" />
        </div>
        <div
          className="grid aspect-[16/11] grid-cols-12 gap-1.5 p-2.5 sm:gap-2 sm:p-3"
          style={{ gridTemplateRows: "repeat(10, minmax(0, 1fr))" }}
        >
          {bloques.map((b, i) => (
            <motion.div
              key={i}
              layout
              initial={entrada ? { opacity: 0, scale: 0.6 } : false}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                layout: { type: "spring", stiffness: 240, damping: 28 },
                opacity: { delay: entrada ? 0.15 + i * 0.07 : 0 },
                scale: {
                  delay: entrada ? 0.15 + i * 0.07 : 0,
                  type: "spring",
                  stiffness: 260,
                  damping: 22,
                },
              }}
              style={{
                gridColumn: `${b.pos[0]} / span ${b.pos[2]}`,
                gridRow: `${b.pos[1]} / span ${b.pos[3]}`,
                borderRadius: 8,
              }}
              className={cn(
                "flex min-h-0 min-w-0 items-end overflow-hidden p-1.5 transition-colors duration-300 sm:p-2",
                TONOS[b.tono],
              )}
            >
              {etiquetas && b.texto && (
                <motion.span
                  layout="position"
                  className="hidden truncate text-[0.7rem] font-semibold leading-none sm:block md:text-xs"
                >
                  {b.texto}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </MotionConfig>
  );
}
