import prisma from "../../prisma/client.js";

export const getDashboardData = async (req, res) => {
    try {
        const [
            exhibitions,
            vessels,
            careers,
            users
        ] = await Promise.all([
            prisma.exhibition.findMany({}),
            prisma.vessel.findMany({}),
            prisma.career.findMany({}),
            prisma.user.findMany({}),
        ]);

        const vesselsCount = vessels.length;
        const exhibitionsCount = exhibitions.length;
        const careersCount = careers.length;
        const usersCount = users.length;

        res.json({
            vesselsCount,
            exhibitionsCount,
            careersCount,
            usersCount
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data dashboard",
        });
    }
};