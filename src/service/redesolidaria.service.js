import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createDoador = async (doadorData) => {
  try {
    // Validate email uniqueness
    if (doadorData.email) {
      const existingDoador = await prisma.doadores.findFirst({
        where: {
          email: doadorData.email,
        },
      });
      
      if (existingDoador) {
        return { 
          success: false, 
          message: "Email já cadastrado. Por favor, use outro email.", 
          status: 400 
        };
      }
    }
    
    // Validate phone number format (only digits, 10-11 characters)
    if (doadorData.telefone) {
      const phoneRegex = /^\d{10,11}$/;
      if (!phoneRegex.test(doadorData.telefone)) {
        return { 
          success: false, 
          message: "Formato de telefone inválido. Use apenas números (10-11 dígitos).", 
          status: 400 
        };
      }
    }
    
    // Create the donor
    const novoDoador = await prisma.doadores.create({
      data: doadorData,
    });
    
    return { 
      success: true, 
      data: novoDoador, 
      message: "Doador cadastrado com sucesso!", 
      status: 201 
    };
  } catch (error) {
    console.error("Erro ao criar doador:", error);
    return { 
      success: false, 
      message: "Erro ao cadastrar doador", 
      error: error.message, 
      status: 500 
    };
  }
};

export const getDoadorById = async (id) => {
  try {
    const doador = await prisma.doadores.findUnique({
      where: {
        id_doadores: Number(id),
      }
    });
    
    if (!doador) {
      return { 
        success: false, 
        message: "Doador não encontrado", 
        status: 404 
      };
    }
    
    return { 
      success: true, 
      data: doador, 
      status: 200 
    };
  } catch (error) {
    console.error("Erro ao buscar doador:", error);
    return { 
      success: false, 
      message: "Erro ao buscar doador", 
      error: error.message, 
      status: 500 
    };
  }
};

export const getAllDoadores = async () => {
  try {
    const doadores = await prisma.doadores.findMany();
    return { 
      success: true, 
      data: doadores, 
      status: 200 
    };
  } catch (error) {
    console.error("Erro ao listar doadores:", error);
    return { 
      success: false, 
      message: "Erro ao listar doadores", 
      error: error.message, 
      status: 500 
    };
  }
};
