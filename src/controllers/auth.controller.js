import usuarioService from "../service/usuario.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
    async register(req, res) {
        try {
            console.log("no método register do auth.controller");
            const { username, password, role = null} = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: "Username e password são obrigatórios." });
            }

            const existingUser = await usuarioService.getUserByUsername(username);
            if (existingUser) {
                return res.status(409).json({ message: "Usuário já existe." });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await usuarioService.criarUsuario({ username, password: hashedPassword, role });

            res.status(201).json({ id: newUser.id_usuario, username: newUser.username, role: newUser.role });
        } catch (error) {
            console.error("Erro no registro do usuário:", error);
            res.status(500).json({ message: "Erro no registro do usuário." });
        }
    }

    registerAdmin(req, res) {
        this.register(req, res);
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            if (!username || !password) {
                return res.status(400).json({ message: "Username e password são obrigatórios." });
            }

            const user = await usuarioService.getUserByUsername(username);
            if (!user) {
                return res.status(401).json({ message: "Credenciais inválidas." });
            }

            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(401).json({ message: "Credenciais inválidas." });
            }

            console.log("user no login");
            console.log(user);

            const token = jwt.sign(
                { userId: user.id_usuario, username: user.username },
                process.env.JWT_SECRET,
                { expiresIn: "1h" }
            );


            res.status(200).json({ token });
        } catch (error) {
            res.status(500).json({ message: "Erro no login do usuário." });
        }
    }

    async getUsers(req, res) {
        try {
            const users = await usuarioService.getUsers();

            if (users.length <= 0) {
                return res.status(404).json({ message: "Nenhum usuário encontrado." });
            }

            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar usuários." });
        }
    }


    async me(req, res) {
        try {
            console.log("no método me do auth.controller");
            const { userId } = req.user;
            console.log("userId");
            console.log(userId);
            const user = await usuarioService.getUserById(userId);
            console.log(user);
            if (!user) return res.status(404).json({ message: "Usuário não encontrado" });

            res.json({
                id: user.userId,
                username: user.username,
                role: user.role
            });
        } catch (error) {
            res.status(500).json({
                message: "Erro ao buscar dados do usuário",
                error: error.message
            });
        }
    }
}

const authController = new AuthController();

export default authController;
