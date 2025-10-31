import sinhvienService from "../services/sinhvien.service.js";

const sinhvienController = {
  getAll: async (req, res, next) => {
    try {
      const data = await sinhvienService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const data = await sinhvienService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const data = await sinhvienService.create(req.body);
      res.status(201).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const data = await sinhvienService.update(req.params.id, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  remove: async (req, res, next) => {
    try {
      await sinhvienService.remove(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  },

  getByClass: async (req, res, next) => {
    try {
      const { classId } = req.params;
      const data = await sinhvienService.findByClass(classId);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};

export default sinhvienController;
