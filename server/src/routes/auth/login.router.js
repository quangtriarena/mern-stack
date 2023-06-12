import express from "express";
import UserControllers from "../../controllers/User.controller.js";
const router = express.Router();

router.get("/", UserControllers.getAll);

export default router;
