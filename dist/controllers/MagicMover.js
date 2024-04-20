"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countNumberOfMissionsAccomplished = exports.endMission = exports.startMission = exports.LoadItemsToMagicMover = exports.addMagicMover = void 0;
const MagicMover_1 = require("../models/MagicMover");
const addMagicMover = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { weight_limit, energy } = req.body;
    const createMagicMover = new MagicMover_1.magicMover({ weight_limit, energy });
    yield createMagicMover.save();
    if (!createMagicMover) {
        res.status(500).json({
            status: "failed",
            message: `couldn't create a Magic Mover try again`,
        });
    }
    res.status(201).json({
        status: "success",
        message: `Successfully created`,
        createMagicMover,
    });
});
exports.addMagicMover = addMagicMover;
const LoadItemsToMagicMover = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const findMagicMover = yield MagicMover_1.magicMover.findOne({
        _id: req.params.id,
    });
    if (findMagicMover.weight_limit <= (findMagicMover.totalWeight + req.body.weight)) {
        return res
            .status(400)
            .json({
            status: "fail",
            message: "couldn't add a Magic item because item exceeds magic Mover weight limit",
        });
    }
    if (!findMagicMover) {
        return res
            .status(400)
            .json({
            status: "fail",
            message: "couldn't add a Magic item because either the magic Mover doesn't exist",
        });
    }
    findMagicMover.items.push(req.body.itemId);
    findMagicMover.quest_state = MagicMover_1.QuestState.Loading;
    findMagicMover.totalWeight = findMagicMover.totalWeight + +req.body.weight;
    yield findMagicMover.save();
    MagicMover_1.magicMover.displayMessageAfterLoaded();
    res
        .status(200)
        .json({
        status: "success",
        message: "Successfully added item",
        findMagicMover,
    });
});
exports.LoadItemsToMagicMover = LoadItemsToMagicMover;
const startMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const magicMoverUpdated = yield MagicMover_1.magicMover.findOneAndUpdate({ _id: req.params.id, quest_state: MagicMover_1.QuestState.Loading }, { quest_state: MagicMover_1.QuestState.OnMission }, { new: true });
    if (!magicMoverUpdated) {
        return res.status(404).json({ status: "fail", message: "couldn't update the magic move because it doesn't exist" });
    }
    MagicMover_1.magicMover.displayMessageAfterCommencingMission();
    res.status(200).json({ status: "success", message: " updated the magic move successfully", magicMoverUpdated });
});
exports.startMission = startMission;
const endMission = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const magicMoverUpdated = yield MagicMover_1.magicMover.findOneAndUpdate({ _id: req.params.id }, { $set: { items: [] }, $inc: { missionCompleted: 1 }, quest_state: MagicMover_1.QuestState.Done }, { new: true });
    if (!magicMoverUpdated) {
        return res.status(404).json({ status: "fail", message: "couldn't update the magic move because it doesn't exist" });
    }
    MagicMover_1.magicMover.displayMessageAfterUpdateToDone();
    res.status(200).json({ status: "success", message: " updated the magic move successfully", magicMoverUpdated });
});
exports.endMission = endMission;
const countNumberOfMissionsAccomplished = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const magicMoverList = yield MagicMover_1.magicMover.find({}).sort("-missionCompleted");
    if (!magicMoverList) {
        return res.status(404).json({ status: "fail", message: "couldn't found the magic move because it doesn't exist" });
    }
    res.status(200).json({ status: "success", message: " updated the magic move successfully", magicMoverList });
});
exports.countNumberOfMissionsAccomplished = countNumberOfMissionsAccomplished;
