"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const MagicMover_1 = require("../controllers/MagicMover");
exports.router = express_1.default.Router();
exports.router.route("/").post(MagicMover_1.addMagicMover);
exports.router.route("/load/:id").post(MagicMover_1.LoadItemsToMagicMover);
exports.router.route("/start/:id").patch(MagicMover_1.startMission);
exports.router.route("/end/:id").patch(MagicMover_1.endMission);
exports.router.route("/missions/list").get(MagicMover_1.countNumberOfMissionsAccomplished);
