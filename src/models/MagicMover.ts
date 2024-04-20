import mongoose,{Schema,Model,model} from "mongoose";
export enum QuestState{
 Resting="resting",  
 Loading="loading",  
 OnMission="on_Mission" ,  
 Done="done"   
}
export interface UserStatics{
  displayMessageAfterUpdateToDone():void
  displayMessageAfterLoaded():void
  displayMessageAfterCommencingMission():void
}
export interface IMagicMover {
    weight_limit: number;
    energy: number;
    quest_state:QuestState,
    items:string[],
    missionCompleted:number,
    totalWeight:number

  }
  type magicMoverModel = Model<IMagicMover>;
const magicMoverSchema=new Schema<IMagicMover,magicMoverModel>({
 weight_limit:{
    type:Number,
    required:true
},
energy:{
    type:Number,
    required:true,
},
quest_state:{
  type:String,
enum:[QuestState.Resting,QuestState.Loading,QuestState.OnMission,QuestState.Done],
default:QuestState.Resting,
required:true,  
},
totalWeight:{type:Number,default:0},
items:[{
  type:Schema.Types.ObjectId,
  ref:"magicItem"
}],
missionCompleted:{type:Number,default:0},
})

magicMoverSchema.statics.displayMessageAfterLoaded=function (){

  console.log("magicMover status has been changed to loading state")
}
magicMoverSchema.statics.displayMessageAfterCommencingMission=function (){

  console.log("magicMover status has been changed to on Mission state")
}
magicMoverSchema.statics.displayMessageAfterUpdateToDone=function():void{console.log("magicMover status has been changed to Done state")}

export const magicMover=model<IMagicMover,magicMoverModel>("magicMover",magicMoverSchema)as mongoose.Model<any> & UserStatics