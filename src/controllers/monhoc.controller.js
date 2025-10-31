import monhocService from "../services/monhoc.service.js";

const monhocController = {
  getAll: async (req, res, next) => {
    try {
      const data = await monhocService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  getById: async (req, res, next) => {
    try {
      const data = await monhocService.getById(req.params.id);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const data = await monhocService.create(req.body);
      res.status(201).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const data = await monhocService.update(req.params.id, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },
  remove: async (req, res, next) => {
    try {
      await monhocService.remove(req.params.id);
      res.json({ success: true });
    } catch (err) {
      next(err);
    }
  },
};

export default monhocController;
