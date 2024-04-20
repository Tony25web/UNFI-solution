import express from "express";
import {
  addMagicMover,
  LoadItemsToMagicMover,
  startMission,
  endMission,
  countNumberOfMissionsAccomplished,
} from "../controllers/MagicMover";
export const router = express.Router();
router.route("/").post(addMagicMover);
router.route("/load/:id").post(LoadItemsToMagicMover);
router.route("/start/:id").patch(startMission);
router.route("/end/:id").patch(endMission);
router.route("/missions/list").get(countNumberOfMissionsAccomplished);
