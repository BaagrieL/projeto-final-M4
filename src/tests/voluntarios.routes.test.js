import request from 'supertest';
import app from '../server.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

let server;
let voluntarioId;
let organizacao;

beforeAll(() => {
  // Usa uma porta aleatória para evitar EADDRINUSE
  server = app.listen(0);
});

afterAll(async () => {
  // Deleta os dados em ordem correta para evitar erro de FK
  await prisma.voluntarios.deleteMany();
  await prisma.organizacao.deleteMany();
  await prisma.$disconnect();
  server.close();
});

describe('Rotas de Voluntários', () => {
  beforeAll(async () => {
    const res = await request(app).post('/organizacoes').send({
      nome: "Organização para Voluntário",
      cnpj: `${Math.floor(Math.random() * 1e14)}`.padStart(14, "0"),
      email: `orgvoluntario${Math.floor(Math.random() * 10000)}@teste.com`,
      telefone: "11999999999",
      endereco: "Rua Voluntária, 123"
    });
    organizacao = res.body;
  });

  it('Deve listar voluntários com organização associada (GET /voluntarios)', async () => {
    // Cria um voluntário antes de listar
    const novoVoluntario = {
      nome: "Voluntário Teste",
      telefone: "11966666666",
      email: `voluntario${Math.floor(Math.random() * 10000)}@teste.com`,
      id_organizacao: organizacao.id_organizacao
    };

    const createRes = await request(app).post('/voluntarios').send(novoVoluntario);
    voluntarioId = createRes.body.id_voluntarios;

    const res = await request(app).get('/voluntarios');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const voluntario = res.body.find(v => v.id_voluntarios === voluntarioId);
    expect(voluntario).toBeDefined();
    expect(voluntario.organizacao).toHaveProperty('nome', organizacao.nome);
  });

  it('Deve atualizar voluntário (PUT /voluntarios/:id)', async () => {
    const dadosAtualizados = {
      telefone: "11955555555"
    };

    const res = await request(app).put(`/voluntarios/${voluntarioId}`).send(dadosAtualizados);
    expect(res.statusCode).toBe(200);
    expect(res.body.telefone).toBe(dadosAtualizados.telefone);
  });

  it('Deve deletar voluntário (DELETE /voluntarios/:id)', async () => {
    const res = await request(app).delete(`/voluntarios/${voluntarioId}`);
    expect(res.statusCode).toBe(204);
  });

  it('Deve retornar 404 ao tentar excluir voluntário inexistente', async () => {
    const res = await request(app).delete(`/voluntarios/999999`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});
