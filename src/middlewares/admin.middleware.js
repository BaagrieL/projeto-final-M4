function authenticateAdmin(req, res, next) {
    req.user.role === "Admin" ? next() : res.status(403).json({ error: "Acesso negado." });
}

export { authenticateAdmin };