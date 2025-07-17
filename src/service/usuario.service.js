import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class UsuarioService {
  // Buscar todos os usuários
  async getUsers() {
    return await prisma.usuario.findMany({
      select: {
        id_usuario: true,
        username: true,
        role: true,
        password: true,

      },
    });
  }

  // Buscar um usuário pelo id
  async getUserById(id) {
    return await prisma.usuario.findUnique({
      where: { id_usuario: Number(id) },
    });
  }

  // Buscar um usuário pelo username
  async getUserByUsername(username) {
    return await prisma.usuario.findUnique({
      where: { username },
    });
  }

  // Criar um novo usuário
  criarUsuario = async (data) => {
    const { username, password, role } = data;

    const novoUsuario = await prisma.usuario.create({
      data: {
        username,
        password, // senha já deve vir hashada
        role,
      },
    });

    return novoUsuario;
  };

  // Atualizar um usuário pelo id
  atualizarUsuario = async (id, data) => {
    const { username, password } = data;

    const usuarioAtualizado = await prisma.usuario.update({
      where: { id_usuario: Number(id) },
      data: {
        username,
        password // deve vir hashada
      },
    });

    return usuarioAtualizado;
  };

  // Deletar um usuário pelo id
  deletarUsuario = async (id) => {
    const usuarioDeletado = await prisma.usuario.delete({
      where: { id_usuario: Number(id) },
    });

    return usuarioDeletado;
  };
}

export default new UsuarioService();
