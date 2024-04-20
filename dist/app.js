"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dbConnect_1 = require("./config/dbConnect");
const magicMover_1 = require("./routes/magicMover");
const magicItems_1 = require("./routes/magicItems");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/magicMover', magicMover_1.router);
app.use('/magicItem', magicItems_1.router);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => { console.log(`listening to port ${PORT}`); });
(0, dbConnect_1.dbConnect)(process.env.MONGO_URI);
