"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dbConnect = (connectionString) => {
    return mongoose_1.default
        .connect(connectionString, {
        family: 4,
    })
        .then(() => console.log("Connected to server"))
        .catch((err) => {
        console.log(err);
        process.exit(1);
    });
};
exports.dbConnect = dbConnect;
