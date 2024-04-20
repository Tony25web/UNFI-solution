import { magicItem,IMagicItem } from "../models/MagicItem";
import { Request,Response } from "express";
export const addMagicItem =async(req:Request,res:Response)=>{
const {name,weight}=req.body as IMagicItem;
const createMagicItem=new magicItem({name,weight});
await createMagicItem.save()
if(!createMagicItem){
res.status(500).json({status:"failed",message:`couldn't create a Magic Mover try again`})
}
res.status(201).json({status:"success",message:`Successfully created`,createMagicItem})
};