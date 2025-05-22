-- DropForeignKey
ALTER TABLE "localizacao" DROP CONSTRAINT "localizacao_ibfk_1";

-- AddForeignKey
ALTER TABLE "localizacao" ADD CONSTRAINT "localizacao_id_organizacao_fkey" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE CASCADE ON UPDATE CASCADE;
