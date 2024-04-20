import { magicMover, IMagicMover, QuestState, } from "../models/MagicMover";
import { Request, Response } from "express";
export const addMagicMover = async (req: Request, res: Response) => {
  const { weight_limit, energy } = req.body as IMagicMover;
  const createMagicMover = new magicMover({ weight_limit, energy });
  await createMagicMover.save();
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
};
export const LoadItemsToMagicMover = async (req: Request, res: Response) => {
  const findMagicMover = await magicMover.findOne({
    _id: req.params.id,
  });
  if(findMagicMover.weight_limit <=( findMagicMover.totalWeight + req.body.weight)){
    return res
    .status(400)
    .json({
      status: "fail",
      message:
        "couldn't add a Magic item because item exceeds magic Mover weight limit",
    });
  }
  if (!findMagicMover) {
    return res
      .status(400)
      .json({
        status: "fail",
        message:
          "couldn't add a Magic item because either the magic Mover doesn't exist",
      });
  }
  findMagicMover.items.push(req.body.itemId);
  findMagicMover.quest_state = QuestState.Loading;
  findMagicMover.totalWeight=  findMagicMover.totalWeight+ +req.body.weight;

  await findMagicMover.save();
  magicMover.displayMessageAfterLoaded()
  res
    .status(200)
    .json({
      status: "success",
      message: "Successfully added item",
      findMagicMover,
    });
};
export const startMission = async (req: Request, res: Response)=>{
const magicMoverUpdated = await magicMover.findOneAndUpdate({_id: req.params.id,quest_state:QuestState.Loading},{quest_state:QuestState.OnMission},{new:true})
if(!magicMoverUpdated){
    return res.status(404).json({status:"fail",message:"couldn't update the magic move because it doesn't exist"})
}
magicMover.displayMessageAfterCommencingMission()
res.status(200).json({status:"success",message:" updated the magic move successfully",magicMoverUpdated})
}
export const endMission = async (req: Request, res: Response)=>{
const magicMoverUpdated = await magicMover.findOneAndUpdate({_id: req.params.id},{$set:{items:[]},$inc:{missionCompleted:1},quest_state:QuestState.Done},{new:true})
if(!magicMoverUpdated){
    return res.status(404).json({status:"fail",message:"couldn't update the magic move because it doesn't exist"})
}
magicMover.displayMessageAfterUpdateToDone()
res.status(200).json({status:"success",message:" updated the magic move successfully",magicMoverUpdated})
}
export const countNumberOfMissionsAccomplished = async (req: Request, res: Response)=>{
const magicMoverList = await magicMover.find({}).sort("-missionCompleted")
if(!magicMoverList){
    return res.status(404).json({status:"fail",message:"couldn't found the magic move because it doesn't exist"})
}
res.status(200).json({status:"success",message:" updated the magic move successfully",magicMoverList})
}
