"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicMover = exports.QuestState = void 0;
const mongoose_1 = require("mongoose");
var QuestState;
(function (QuestState) {
    QuestState["Resting"] = "resting";
    QuestState["Loading"] = "loading";
    QuestState["OnMission"] = "on_Mission";
    QuestState["Done"] = "done";
})(QuestState || (exports.QuestState = QuestState = {}));
const magicMoverSchema = new mongoose_1.Schema({
    weight_limit: {
        type: Number,
        required: true
    },
    energy: {
        type: Number,
        required: true,
    },
    quest_state: {
        type: String,
        enum: [QuestState.Resting, QuestState.Loading, QuestState.OnMission, QuestState.Done],
        default: QuestState.Resting,
        required: true,
    },
    totalWeight: { type: Number, default: 0 },
    items: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "magicItem"
        }],
    missionCompleted: { type: Number, default: 0 },
});
magicMoverSchema.statics.displayMessageAfterLoaded = function () {
    console.log("magicMover status has been changed to loading state");
};
magicMoverSchema.statics.displayMessageAfterCommencingMission = function () {
    console.log("magicMover status has been changed to on Mission state");
};
magicMoverSchema.statics.displayMessageAfterUpdateToDone = function () { console.log("magicMover status has been changed to Done state"); };
exports.magicMover = (0, mongoose_1.model)("magicMover", magicMoverSchema);
