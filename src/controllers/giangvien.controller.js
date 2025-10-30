import giangvienService from "../services/giangvien.service.js";

const giangvienController = {
  findAll: async (req, res) => {
    const result = await giangvienService.findAll(req);
    res.json(result);
  },

  findOne: async (req, res) => {
    const result = await giangvienService.findOne(req);
    res.json(result);
  },
};

export default giangvienController;
