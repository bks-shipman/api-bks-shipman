import prisma from "../../prisma/client.js";

export const getLandingPageData = async (req, res) => {
    try {
        const [
            company,
            vision,
            missions,
            coreValues,
            services,
            vesselTypes,
            exhibitions,
            aboutUs,
        ] = await Promise.all([
            prisma.company.findFirst(),
            prisma.vision.findFirst(),
            prisma.mission.findMany({
                orderBy: { id: "asc" },
            }),
            prisma.coreValue.findMany({
                orderBy: { id: "asc" },
            }),
            prisma.service.findMany({
                orderBy: { id: "asc" },
            }),
            prisma.vesselType.findMany({
                include: {
                    vessels: true,
                },
                orderBy: { name: "asc" },
            }),
            prisma.exhibition.findMany({
                orderBy: { date: "desc" },
            }),
            prisma.aboutUs.findFirst(),
        ]);

        res.json({
            company,
            vision,
            missions,
            coreValues,
            services,
            vessels: vesselTypes,
            exhibitions,
            aboutUs,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Gagal memuat data landing page",
        });
    }
};
