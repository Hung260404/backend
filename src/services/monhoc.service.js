import prisma from "../common/prisma/init.prisma.js";

const monhocService = {
  getAll: async () => prisma.mONHOC.findMany(),
  getById: async (MaMH) => prisma.mONHOC.findUnique({ where: { MaMH } }),
  create: async (data) => prisma.mONHOC.create({ data }),
  update: async (MaMH, data) => prisma.mONHOC.update({ where: { MaMH }, data }),
  remove: async (MaMH) => prisma.mONHOC.delete({ where: { MaMH } }),
};

export default monhocService;
