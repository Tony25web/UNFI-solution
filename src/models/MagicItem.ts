import { Schema, Model,model } from "mongoose";
export interface IMagicItem {
  name: string;
  weight: number;
}
type magicItemModel = Model<IMagicItem>;
const magicItemSchema = new Schema<IMagicItem, magicItemModel>({
  name: {
    type: String,
    required: true,
  },

  weight: {
    type: Number,
    required: true,
  },
});
export const magicItem=model<IMagicItem, magicItemModel>("magicItem", magicItemSchema)