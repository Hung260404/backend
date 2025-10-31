import lopService from "../services/lop.service.js";

const lopController = {
  getAll: async (req, res, next) => {
    try {
      const data = await lopService.getAll();
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  getById: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await lopService.getById(id);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  create: async (req, res, next) => {
    try {
      const data = await lopService.create(req.body);
      res.status(201).json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await lopService.update(id, req.body);
      res.json({ success: true, data });
    } catch (err) {
      next(err);
    }
  },

  remove: async (req, res, next) => {
    try {
      const { id } = req.params;
      await lopService.remove(id);
      res.json({ success: true, message: "Đã xóa" });
    } catch (err) {
      next(err);
    }
  },
};

export default lopController;
