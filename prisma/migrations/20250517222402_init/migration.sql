-- CreateEnum
CREATE TYPE "alerta_tipo_alerta" AS ENUM ('urgente', 'não urgente');

-- CreateEnum
CREATE TYPE "feedback_critica" AS ENUM ('positiva', 'negativa');

-- CreateEnum
CREATE TYPE "categoria_doacao_tipo_doacao" AS ENUM ('roupas', 'alimento', 'remedio', 'higiene');

-- CreateTable
CREATE TABLE "alerta" (
    "id_alerta" SERIAL NOT NULL,
    "tipo_alerta" "alerta_tipo_alerta",
    "descricao" VARCHAR(200),
    "id_organizacao" INTEGER,
    "id_doadores" INTEGER,

    CONSTRAINT "alerta_pkey" PRIMARY KEY ("id_alerta")
);

-- CreateTable
CREATE TABLE "categoria_doacao" (
    "id_doacao" SERIAL NOT NULL,
    "quantidade" INTEGER,
    "tipo_doacao" "categoria_doacao_tipo_doacao",
    "validade" DATE,
    "id_doadores" INTEGER,
    "id_organizacao" INTEGER,

    CONSTRAINT "categoria_doacao_pkey" PRIMARY KEY ("id_doacao")
);

-- CreateTable
CREATE TABLE "doadores" (
    "nome" VARCHAR(200),
    "idade" INTEGER,
    "email" VARCHAR(200),
    "id_doadores" SERIAL NOT NULL,

    CONSTRAINT "doadores_pkey" PRIMARY KEY ("id_doadores")
);

-- CreateTable
CREATE TABLE "feedback" (
    "id_feedback" SERIAL NOT NULL,
    "critica" "feedback_critica",
    "feedback_descricao" VARCHAR(400),
    "id_organizacao" INTEGER,
    "id_doadores" INTEGER,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id_feedback")
);

-- CreateTable
CREATE TABLE "impacto_social" (
    "id_impacto" SERIAL NOT NULL,
    "id_organizacao" INTEGER,
    "id_localizacao" INTEGER,
    "id_doacao" INTEGER,

    CONSTRAINT "impacto_social_pkey" PRIMARY KEY ("id_impacto")
);

-- CreateTable
CREATE TABLE "localizacao" (
    "id_localizacao" SERIAL NOT NULL,
    "nome" VARCHAR(200),
    "latitude" DECIMAL(10,8),
    "longitude" DECIMAL(11,8),
    "id_organizacao" INTEGER,

    CONSTRAINT "localizacao_pkey" PRIMARY KEY ("id_localizacao")
);

-- CreateTable
CREATE TABLE "organizacao" (
    "id_organizacao" SERIAL NOT NULL,
    "nome" VARCHAR(200),
    "cnpj" VARCHAR(14) NOT NULL,
    "endereco" VARCHAR(200),
    "telefone" VARCHAR(11),
    "email" VARCHAR(200),
    "id_voluntarios" INTEGER,
    "id_doadores" INTEGER,

    CONSTRAINT "organizacao_pkey" PRIMARY KEY ("id_organizacao")
);

-- CreateTable
CREATE TABLE "voluntarios" (
    "id_voluntarios" SERIAL NOT NULL,
    "nome" VARCHAR(200),
    "idade" INTEGER,
    "email" VARCHAR(200),

    CONSTRAINT "voluntarios_pkey" PRIMARY KEY ("id_voluntarios")
);

-- CreateIndex
CREATE INDEX "ida_doadores" ON "alerta"("id_doadores");

-- CreateIndex
CREATE INDEX "ida_organizacao" ON "alerta"("id_organizacao");

-- CreateIndex
CREATE INDEX "idc_doadores" ON "categoria_doacao"("id_doadores");

-- CreateIndex
CREATE INDEX "idc_organizacao" ON "categoria_doacao"("id_organizacao");

-- CreateIndex
CREATE INDEX "idf_doadores" ON "feedback"("id_doadores");

-- CreateIndex
CREATE INDEX "idf_organizacao" ON "feedback"("id_organizacao");

-- CreateIndex
CREATE INDEX "idi_doacao" ON "impacto_social"("id_doacao");

-- CreateIndex
CREATE INDEX "id_localizacao" ON "impacto_social"("id_localizacao");

-- CreateIndex
CREATE INDEX "idi_organizacao" ON "impacto_social"("id_organizacao");

-- CreateIndex
CREATE INDEX "idl_organizacao" ON "localizacao"("id_organizacao");

-- CreateIndex
CREATE UNIQUE INDEX "cnpj" ON "organizacao"("cnpj");

-- CreateIndex
CREATE INDEX "ido_doadores" ON "organizacao"("id_doadores");

-- CreateIndex
CREATE INDEX "ido_voluntarios" ON "organizacao"("id_voluntarios");

-- AddForeignKey
ALTER TABLE "alerta" ADD CONSTRAINT "alerta_ibfk_1" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "alerta" ADD CONSTRAINT "alerta_ibfk_2" FOREIGN KEY ("id_doadores") REFERENCES "doadores"("id_doadores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categoria_doacao" ADD CONSTRAINT "categoria_doacao_ibfk_1" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categoria_doacao" ADD CONSTRAINT "categoria_doacao_ibfk_2" FOREIGN KEY ("id_doadores") REFERENCES "doadores"("id_doadores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_ibfk_1" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "feedback" ADD CONSTRAINT "feedback_ibfk_2" FOREIGN KEY ("id_doadores") REFERENCES "doadores"("id_doadores") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "impacto_social" ADD CONSTRAINT "impacto_social_ibfk_1" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "impacto_social" ADD CONSTRAINT "impacto_social_ibfk_2" FOREIGN KEY ("id_localizacao") REFERENCES "localizacao"("id_localizacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "impacto_social" ADD CONSTRAINT "impacto_social_ibfk_3" FOREIGN KEY ("id_doacao") REFERENCES "categoria_doacao"("id_doacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "localizacao" ADD CONSTRAINT "localizacao_ibfk_1" FOREIGN KEY ("id_organizacao") REFERENCES "organizacao"("id_organizacao") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "organizacao" ADD CONSTRAINT "organizacao_ibfk_1" FOREIGN KEY ("id_voluntarios") REFERENCES "voluntarios"("id_voluntarios") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "organizacao" ADD CONSTRAINT "organizacao_ibfk_2" FOREIGN KEY ("id_doadores") REFERENCES "doadores"("id_doadores") ON DELETE NO ACTION ON UPDATE NO ACTION;
