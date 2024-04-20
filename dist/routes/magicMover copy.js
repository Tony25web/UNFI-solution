"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const MagicMover_1 = require("../controllers/MagicMover");
const router = express_1.default.Router();
router.route("/").post(MagicMover_1.addMagicMover);
router.route("/load").post(MagicMover_1.LoadItemsToMagicMover);
router.route("/start").patch(MagicMover_1.startMission);
router.route("/end").patch(MagicMover_1.endMission);
router.route("/missions/list").get(MagicMover_1.countNumberOfMissionsAccomplished);
