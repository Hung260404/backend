import prisma from "../common/prisma/init.prisma.js";

const giangvienService = {
  findAll: async (req) => {
    const ten = req.query.ten;
    const where = {};

    if (ten) where.HoTen = { contains: ten };

    const result = await prisma.gIANGVIEN.findMany({ where });
    return result;
  },

  findOne: async (req) => {
    const maGV = req.params.id;
    const one = await prisma.gIANGVIEN.findUnique({
      where: { MaGV: maGV },
    });
    return one;
  },
};

export default giangvienService;
