import prisma from "../common/prisma/init.prisma.js";

const giangvienService = {
  getAll: async () => prisma.gIANGVIEN.findMany(),
  getById: async (MaGV) => prisma.gIANGVIEN.findUnique({ where: { MaGV } }),
  create: async (data) => prisma.gIANGVIEN.create({ data }),
  update: async (MaGV, data) =>
    prisma.gIANGVIEN.update({ where: { MaGV }, data }),
  remove: async (MaGV) => prisma.gIANGVIEN.delete({ where: { MaGV } }),
};

export default giangvienService;
