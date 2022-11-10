import express from "express";
import { facebook } from "../controllers/userController.js";

const router = express.Router();

router.post("/facebook", facebook);

export default router;
