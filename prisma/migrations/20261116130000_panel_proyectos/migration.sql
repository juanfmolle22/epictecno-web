-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "intentosFallidos" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "bloqueadoHasta" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Proyecto" ADD COLUMN     "slug" TEXT,
ADD COLUMN     "categoria" TEXT NOT NULL DEFAULT 'web',
ADD COLUMN     "sector" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "resumen" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "imagenCompletaUrl" TEXT,
ADD COLUMN     "publicado" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "orden" INTEGER NOT NULL DEFAULT 0;

-- Los proyectos que ya existieran reciben su id como slug provisional
UPDATE "Proyecto" SET "slug" = "id" WHERE "slug" IS NULL;

ALTER TABLE "Proyecto" ALTER COLUMN "slug" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Proyecto_slug_key" ON "Proyecto"("slug");
