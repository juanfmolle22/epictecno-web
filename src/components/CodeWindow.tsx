"use client";

import { useEffect, useState } from "react";

const lines = [
  { text: "const negocio = await EpicTecno.crear({", color: "text-[#E4E7EC]" },
  { text: "  diseño: 'moderno',", color: "text-[#9D7BFF]" },
  { text: "  backoffice: true,", color: "text-[#9D7BFF]" },
  { text: "  apis: ['pagos', 'whatsapp', 'crm'],", color: "text-[#4ADE9C]" },
  { text: "  performance: 'excelente',", color: "text-[#9D7BFF]" },
  { text: "});", color: "text-[#E4E7EC]" },
];

export function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const timeout = setTimeout(() => setVisibleLines((v) => v + 1), 350);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-[#12161F] shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        <span className="ml-2 font-mono text-xs text-[#E4E7EC]/40">
          proyecto.ts
        </span>
      </div>
      <div className="space-y-1 p-5 font-mono text-sm">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={line.color}>
            {line.text}
          </div>
        ))}
        {visibleLines < lines.length && (
          <span className="inline-block h-4 w-2 animate-pulse bg-[#5B8CFF]" />
        )}
      </div>
    </div>
  );
}