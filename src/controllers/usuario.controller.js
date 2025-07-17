import { logEvents } from "../middlewares/logger.middlewares.js";
import usuarioService from "../service/usuario.service.js";

class UsuarioController {
  async getUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.getUsuarios();
      res.status(200).json(usuarios);
    } catch (error) {
      logEvents(`Error: ${error.message}`, "error.log");
      res.status(500).json({ message: "Erro ao listar usuários" });
    }
  }

  async getUsuarioById(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.getUsuarioById(id);
      res.status(200).json(usuario);
    } catch (error) {
      logEvents(`Error: ${error.message}`, "error.log");
      res.status(500).json({ message: "Erro ao buscar usuário" });
    }
  }

  async criarUsuario(req, res) {
    try {
      const { username, password } = req.body;
      const novoUsuario = await usuarioService.criarUsuario({ username, password });
      res.status(201).json(novoUsuario);
    } catch (error) {
      logEvents(`Error: ${error.message}`, "error.log");
      res.status(500).json({ message: "Erro ao criar usuário" });
    }
  }

  async atualizarUsuario(req, res) {
    try {
      const { id } = req.params;
      const { username, password } = req.body;
      const usuarioAtualizado = await usuarioService.atualizarUsuario(id, { username, password });
      res.status(200).json(usuarioAtualizado);
    } catch (error) {
      logEvents(`Error: ${error.message}`, "error.log");
      res.status(500).json({ message: "Erro ao atualizar usuário" });
    }
  }

  async deletarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuarioDeletado = await usuarioService.deletarUsuario(id);
      res.status(200).json(usuarioDeletado);
    } catch (error) {
      logEvents(`Error: ${error.message}`, "error.log");
      res.status(500).json({ message: "Erro ao deletar usuário" });
    }
  }
}

export default new UsuarioController();
