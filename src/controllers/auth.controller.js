import prisma from "../../prisma/client.js";
import { createToken } from "../middleware/auth.js";
import bcrypt from "bcrypt";


export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: `Kolom ${!email ? "Email" : "Password"} harus diisi` });
    }

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (!user) {
        return res.status(400).json({ message: "Email tidak terdaftar" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Password salah" });
    }

    const { password: _, ...userWithoutPassword } = user;

    if (user.status !== "ACTIVE") {
        return res.status(403).json({ message: "Akun anda tidak aktif. Silakan hubungi administrator." });
    }

    const token = createToken(userWithoutPassword);

    return res.status(200).json({ message: "Login berhasil", token, user: userWithoutPassword });
};
