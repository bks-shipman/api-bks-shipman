import prisma from "../../prisma/client.js";
import bcrypt from "bcrypt";

/**
 * GET LIST ADMIN
 * SUPERADMIN & ADMIN (READ ONLY)
 */
export const getAdmins = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                status: true,
                createdAt: true,
            },
            orderBy: { createdAt: "desc" },
        });

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 * CREATE ADMIN
 * ADMIN ONLY
 */
export const createAdmin = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Nama, email, dan password wajib diisi" });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
        return res.status(409).json({ message: "Email sudah terdaftar" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
            role: "ADMIN",
            status: "ACTIVE",
        },
    });

    res.status(201).json({
        message: "Admin berhasil dibuat",
        admin: {
            id: admin.id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
        },
    });
};

/**
 * UPDATE ADMIN
 * ADMIN ONLY
 */
export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Nama, email, dan password wajib diisi" });
    }

    const admin = await prisma.user.findUnique({
        where: { id: Number(id) },
    });

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing && existing.id !== Number(id)) {
        return res.status(409).json({ message: "Email sudah terdaftar" });
    }


    if (!admin) {
        return res.status(404).json({ message: "Admin tidak ditemukan" });
    }

    const data = {
        name,
        email,
    };

    if (password) {
        data.password = await bcrypt.hash(password, 10);
    }

    const updated = await prisma.user.update({
        where: { id: Number(id) },
        data,
    });

    res.status(201).json({
        message: "Admin berhasil diperbarui",
        admin: {
            id: updated.id,
            name: updated.name,
            email: updated.email,
            role: updated.role,
        },
    });
};

/**
 * SUSPEND / ACTIVATE ADMIN
 * ADMIN ONLY
 */
export const suspendAdmin = async (req, res) => {
    const { id } = req.params;

    const admin = await prisma.user.findUnique({
        where: { id: Number(id) },
    });

    if (!admin) {
        return res.status(404).json({ message: "Admin tidak ditemukan" });
    }

    const newStatus = admin.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";

    await prisma.user.update({
        where: { id: Number(id) },
        data: { status: newStatus },
    });

    res.json({
        message: `Admin berhasil ${newStatus === "SUSPENDED" ? "disuspend" : "diaktifkan"}`,
    });
};

/**
 * DELETE ADMIN
 * ADMIN ONLY
 */
export const deleteAdmin = async (req, res) => {
    const { id } = req.params;

    const admin = await prisma.user.findUnique({
        where: { id: Number(id) },
    });

    if (!admin) {
        return res.status(404).json({ message: "Admin tidak ditemukan" });
    }

    await prisma.user.delete({
        where: { id: Number(id) },
    });

    res.json({ message: "Admin berhasil dihapus" });
};
