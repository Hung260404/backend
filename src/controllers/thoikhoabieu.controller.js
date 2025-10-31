import tkbService from "../services/thoikhoabieu.service.js";

const tkbController = {
  getAll: async (req, res, next) => {
    try {
      const data = await tkbService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const data = await tkbService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const data = await tkbService.create(req.body);
      res.status(201).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const data = await tkbService.update(req.params.id, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  remove: async (req, res, next) => {
    try {
      await tkbService.remove(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  },

  getByClass: async (req, res, next) => {
    try {
      const data = await tkbService.getByClass(req.params.classId);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  getByStudent: async (req, res, next) => {
    try {
      const data = await tkbService.getByStudent(req.params.maSV);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
};

export default tkbController;
