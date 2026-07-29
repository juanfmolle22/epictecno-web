import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "tu-email@ejemplo.com"; // 👈 cambia esto por tu email real
  const nombre = "Juan"; // 👈 tu nombre

  const passwordHasheada = await hash(passwordPlano, 10);

  const usuario = await prisma.usuario.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: passwordHasheada,
      nombre,
    },
  });

  console.log("Usuario admin creado:", usuario.email);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });