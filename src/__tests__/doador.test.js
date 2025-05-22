import { createDoador } from '../service/redesolidaria.service.js';
import { PrismaClient } from "../generated/prisma/index.js";

// Mock PrismaClient
jest.mock('../generated/prisma/index.js', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => ({
      doadores: {
        create: jest.fn(),
        findFirst: jest.fn()
      }
    }))
  };
});

describe('Donor Registration Tests', () => {
  let prisma;

  beforeEach(() => {
    prisma = new PrismaClient();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should create a new donor successfully', async () => {
    const mockDoador = {
      nome: 'Test User',
      email: 'test@example.com',
      telefone: '11999999999',
      idade: 30
    };

    prisma.doadores.findFirst.mockResolvedValue(null);
    prisma.doadores.create.mockResolvedValue({ id_doadores: 1, ...mockDoador });

    const result = await createDoador(mockDoador);

    expect(result.success).toBe(true);
    expect(result.status).toBe(201);
    expect(result.data).toHaveProperty('id_doadores');
    expect(result.message).toBe('Doador cadastrado com sucesso!');
  });

  test('should validate duplicate email', async () => {
    const mockDoador = {
      nome: 'Test User',
      email: 'existing@example.com',
      telefone: '11999999999',
      idade: 30
    };

    prisma.doadores.findFirst.mockResolvedValue({ id_doadores: 1, ...mockDoador });

    const result = await createDoador(mockDoador);

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe('Email já cadastrado. Por favor, use outro email.');
  });

  test('should validate phone number format', async () => {
    const mockDoador = {
      nome: 'Test User',
      email: 'test@example.com',
      telefone: '123', // Invalid phone number
      idade: 30
    };

    const result = await createDoador(mockDoador);

    expect(result.success).toBe(false);
    expect(result.status).toBe(400);
    expect(result.message).toBe('Formato de telefone inválido. Use apenas números (10-11 dígitos).');
  });
});
