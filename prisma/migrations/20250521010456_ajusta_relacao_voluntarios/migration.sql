/*
  Warnings:

  - You are about to drop the column `id_voluntarios` on the `organizacao` table. All the data in the column will be lost.
  - Added the required column `id_organizacao` to the `voluntarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "organizacao" DROP CONSTRAINT "organizacao_ibfk_1";

-- DropForeignKey
ALTER TABLE "organizacao" DROP CONSTRAINT "organizacao_ibfk_2";

-- DropIndex
DROP INDEX "ido_voluntarios";

-- AlterTable
ALTER TABLE "organizacao" DROP COLUMN "id_voluntarios";

-- AlterTable
ALTER TABLE "voluntarios" ADD COLUMN     "id_organizacao" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "organizacao" ADD CONSTRAINT "organizacao_id_doadores_fkey" FOREIGN KEY ("id_doadores") REFERENCES "doadores"("id_doadores") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "voluntarios" ADD CONSTRAINT "voluntarios_id_organizacao_fkey" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE RESTRICT ON UPDATE CASCADE;
