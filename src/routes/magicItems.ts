import express from "express";
import { addMagicItem } from "../controllers/MagicItem";
export const router = express.Router();
router.route("/").post(addMagicItem);