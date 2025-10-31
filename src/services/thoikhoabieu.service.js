import prisma from "../common/prisma/init.prisma.js";

const tkbService = {
  getAll: async () => {
    return await prisma.tHOIKHOABIEU.findMany({
      include: { LOP: true, MONHOC: true, GIANGVIEN: true, PHONG: true },
    });
  },

  getById: async (MaTKB) =>
    prisma.tHOIKHOABIEU.findUnique({
      where: { MaTKB: Number(MaTKB) },
      include: { LOP: true, MONHOC: true, GIANGVIEN: true, PHONG: true },
    }),

  create: async (data) => prisma.tHOIKHOABIEU.create({ data }),

  update: async (MaTKB, data) =>
    prisma.tHOIKHOABIEU.update({
      where: { MaTKB: Number(MaTKB) },
      data,
    }),

  remove: async (MaTKB) =>
    prisma.tHOIKHOABIEU.delete({ where: { MaTKB: Number(MaTKB) } }),

  // TKB theo lớp
  getByClass: async (MaLop) =>
    prisma.tHOIKHOABIEU.findMany({
      where: { MaLop },
      include: { MONHOC: true, GIANGVIEN: true, PHONG: true },
    }),

  // TKB theo sinh viên (qua MaLop)
  getByStudent: async (MaSV) => {
    const sv = await prisma.sINHVIEN.findUnique({ where: { MaSV } });
    if (!sv) return [];
    return prisma.tHOIKHOABIEU.findMany({
      where: { MaLop: sv.MaLop },
      include: { MONHOC: true, GIANGVIEN: true, PHONG: true },
    });
  },
};

export default tkbService;
