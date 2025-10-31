import prisma from "../common/prisma/init.prisma.js";

const sinhvienService = {
  getAll: async () => prisma.sINHVIEN.findMany({ include: { LOP: true } }),
  getById: async (MaSV) =>
    prisma.sINHVIEN.findUnique({ where: { MaSV }, include: { LOP: true } }),
  create: async (data) => prisma.sINHVIEN.create({ data }),
  update: async (MaSV, data) =>
    prisma.sINHVIEN.update({ where: { MaSV }, data }),
  remove: async (MaSV) => prisma.sINHVIEN.delete({ where: { MaSV } }),
  findByClass: async (MaLop) =>
    prisma.sINHVIEN.findMany({ where: { MaLop }, include: { LOP: true } }),
};

export default sinhvienService;
