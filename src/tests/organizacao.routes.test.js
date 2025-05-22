import request from 'supertest';
import app from '../server.js';

describe('Rotas de Organizações', () => {
  let orgId;
  let orgCnpj;

  it('Deve listar todas as organizações (GET /organizacoes)', async () => {
    const res = await request(app).get('/organizacoes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('Deve criar uma nova organização (POST /organizacoes)', async () => {
    const novaOrganizacao = {
      nome: "Organização Teste",
      cnpj: `${Math.floor(Math.random() * 1e14)}`.padStart(14, "0"),
      email: `org${Math.floor(Math.random() * 10000)}@teste.com`,
      endereco: "Rua Teste, 123",
      telefone: "11999999999"
    };

    orgCnpj = novaOrganizacao.cnpj;

    const res = await request(app).post('/organizacoes').send(novaOrganizacao);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("id_organizacao");

    orgId = res.body.id_organizacao;
  });

  it('Não deve criar organização com CNPJ duplicado (POST /organizacoes)', async () => {
    const orgDuplicada = {
      nome: "Organização Duplicada",
      cnpj: orgCnpj,
      email: `duplicada${Math.floor(Math.random() * 10000)}@teste.com`,
      endereco: "Rua Duplicada, 456",
      telefone: "11988888888"
    };

    const res = await request(app).post('/organizacoes').send(orgDuplicada);
    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toMatch(/CNPJ ou e-mail já cadastrado/i);
  });

  it('Deve atualizar uma organização existente (PUT /organizacoes/:id)', async () => {
    const dadosAtualizados = {
      nome: "Organização Teste Atualizada",
      telefone: "11977777777"
    };

    const res = await request(app).put(`/organizacoes/${orgId}`).send(dadosAtualizados);
    expect(res.statusCode).toBe(200);
    expect(res.body.nome).toBe(dadosAtualizados.nome);
    expect(res.body.telefone).toBe(dadosAtualizados.telefone);
  });

  it('Deve deletar uma organização existente (DELETE /organizacoes/:id)', async () => {
    const res = await request(app).delete(`/organizacoes/${orgId}`);
    expect(res.statusCode).toBe(204);
  });

  it('Deve retornar 404 ao tentar atualizar organização inexistente', async () => {
    const res = await request(app).put(`/organizacoes/999999`).send({ nome: "Teste" });
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });

  it('Deve retornar 404 ao tentar deletar organização inexistente', async () => {
    const res = await request(app).delete(`/organizacoes/999999`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('error');
  });
});
