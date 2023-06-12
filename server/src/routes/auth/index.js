import express from "express";
import LoginRoute from "./login.router.js";
import RegisterRoute from "./register.router.js";

const router = express.Router();

router.use("/login", LoginRoute);
router.use("/register", RegisterRoute);

export default router;
