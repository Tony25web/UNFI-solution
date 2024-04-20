"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicItem = void 0;
const mongoose_1 = require("mongoose");
const magicItemSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    weight: {
        type: Number,
        required: true,
    },
});
exports.magicItem = (0, mongoose_1.model)("magicItem", magicItemSchema);
