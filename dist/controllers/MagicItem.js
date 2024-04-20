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
exports.addMagicItem = void 0;
const MagicItem_1 = require("../models/MagicItem");
const addMagicItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, weight } = req.body;
    const createMagicItem = new MagicItem_1.magicItem({ name, weight });
    yield createMagicItem.save();
    if (!createMagicItem) {
        res.status(500).json({ status: "failed", message: `couldn't create a Magic Mover try again` });
    }
    res.status(201).json({ status: "success", message: `Successfully created`, createMagicItem });
});
exports.addMagicItem = addMagicItem;
