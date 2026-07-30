import { NextResponse } from "next/server";
import { hash } from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { token, password } = await request.json();

  const usuario = await prisma.usuario.findUnique({
    where: { resetToken: token },
  });

  if (!usuario || !usuario.resetTokenExpiry) {
    return NextResponse.json(
      { error: "Token inválido" },
      { status: 400 }
    );
  }

  if (usuario.resetTokenExpiry < new Date()) {
    return NextResponse.json(
      { error: "El link expiró, solicita uno nuevo" },
      { status: 400 }
    );
  }

  const passwordHasheada = await hash(password, 10);

  await prisma.usuario.update({
    where: { id: usuario.id },
    data: {
      password: passwordHasheada,
      resetToken: null,
      resetTokenExpiry: null,
    },
  });

  return NextResponse.json({ ok: true });
}