import prisma from "../common/prisma/init.prisma.js";

const lopService = {
  getAll: async () => {
    return await prisma.lOP.findMany({
      include: { SINHVIEN: true, THOIKHOABIEU: true },
    });
  },

  getById: async (MaLop) => {
    return await prisma.lOP.findUnique({
      where: { MaLop },
      include: { SINHVIEN: true, THOIKHOABIEU: true },
    });
  },

  create: async (data) => {
    return await prisma.lOP.create({ data });
  },

  update: async (MaLop, data) => {
    return await prisma.lOP.update({ where: { MaLop }, data });
  },

  remove: async (MaLop) => {
    return await prisma.lOP.delete({ where: { MaLop } });
  },
};

export default lopService;
