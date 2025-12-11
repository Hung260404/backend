// src/controllers/user.controller.js
import * as userService from "../services/user.service.js";

export const getMe = async (req, res, next) => {
  try {
    const user = await userService.getMe(req.user.userId);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const result = await userService.updateProfile(req.user.userId, req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

export const uploadKYC = async (req, res, next) => {
  try {
    const result = await userService.uploadKYC(req.user.userId);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
