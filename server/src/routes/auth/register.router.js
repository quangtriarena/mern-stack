import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("register page");
});

export default router;
