import prisma from "../common/prisma/init.prisma.js";

const phongService = {
  getAll: async () => prisma.pHONG.findMany(),
  getById: async (MaPhong) => prisma.pHONG.findUnique({ where: { MaPhong } }),
  create: async (data) => prisma.pHONG.create({ data }),
  update: async (MaPhong, data) =>
    prisma.pHONG.update({ where: { MaPhong }, data }),
  remove: async (MaPhong) => prisma.pHONG.delete({ where: { MaPhong } }),
};

export default phongService;
