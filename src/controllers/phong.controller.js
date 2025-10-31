import phongService from "../services/phong.service.js";

const phongController = {
  getAll: async (req, res, next) => {
    try {
      const data = await phongService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const data = await phongService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const data = await phongService.create(req.body);
      res.status(201).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const data = await phongService.update(req.params.id, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      await phongService.remove(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  },
};

export default phongController;
