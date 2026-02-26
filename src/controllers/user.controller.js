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

export const changePassword = async (req, res) => {
    // const { id } = req.user.id;
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
        return res.status(400).json({ message: `${!currentPassword ? "Password saat ini" : "Password baru"} wajib diisi` });
    }
    const admin = await prisma.user.findUnique({
        where: { id: Number(req.user.id) },
    });

    if (!admin) {
        return res.status(404).json({ message: "Admin tidak ditemukan" });
    }

    const isPasswordValid = await bcrypt.compare(currentPassword, admin.password);
    if (!isPasswordValid) {
        return res.status(400).json({ message: "Password saat ini salah" });
    }

    const hashedNewPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
        where: { id: Number(req.user.id) },
        data: { password: hashedNewPassword },
    });

    res.json({ message: "Password berhasil diubah" });
};


/**
 * SUSPEND / ACTIVATE ADMIN
 * ADMIN ONLY
 */
export const suspendAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { password } = req.body;

        // 1️⃣ Ambil admin dari token
        const admin = await prisma.user.findUnique({
            where: { id: Number(req.user.id) }
        });

        if (!admin) {
            return res.status(404).json({
                message: "Admin tidak ditemukan"
            });
        }

        // 2️⃣ Pastikan role admin
        if (admin.role !== "ADMIN") {
            return res.status(403).json({
                message: "Hanya admin yang bisa melakukan aksi ini"
            });
        }

        // 3️⃣ Verifikasi password admin
        const isPasswordValid = await bcrypt.compare(
            password,
            admin.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({
                message: "Password salah"
            });
        }

        // 4️⃣ Cari user target
        const targetUser = await prisma.user.findUnique({
            where: { id: Number(id) }
        });

        if (!targetUser) {
            return res.status(404).json({
                message: "User tidak ditemukan"
            });
        }

        // 5️⃣ Jangan suspend diri sendiri
        if (targetUser.id === admin.id) {
            return res.status(400).json({
                message: "Tidak bisa suspend akun sendiri"
            });
        }

        // 6️⃣ Toggle status
        const newStatus =
            targetUser.status === "ACTIVE"
                ? "SUSPENDED"
                : "ACTIVE";

        await prisma.user.update({
            where: { id: Number(id) },
            data: { status: newStatus }
        });

        return res.json({
            message: `User berhasil ${newStatus === "SUSPENDED"
                ? "disuspend"
                : "diaktifkan"
                }`
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Terjadi kesalahan server"
        });
    }
};

/**
 * DELETE ADMIN
 * ADMIN ONLY
 */
export const deleteAdmin = async (req, res) => {
    const { id } = req.body;

    if (!id || !Array.isArray(id) || id.length === 0) {
        return res.status(400).json({ message: "Daftar ID tidak valid" });
    }

    const numericIds = id.map(Number);

    const deleted = await prisma.user.deleteMany({
        where: { id: { in: numericIds } },
    });

    if (deleted.count === 0) {
        return res.status(404).json({ message: "Tidak ada user yang dihapus" });
    }

    return res.status(200).json({
        message: `User dengan ID ${numericIds.join(", ")} berhasil dihapus`,
        deletedCount: deleted.count,
    });
};
