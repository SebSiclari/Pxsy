import mongoose, { mongo } from "mongoose";
import {Photos} from '../types/Photos'

const Schema = mongoose.Schema

const PhotoSchema = new Schema<Photos>({
  id:{type:String, required:true},
  description:{type:String, required:true},
  url:{ type:String, required:true},
  link:{type:String, required:true},
  topics:{type:[String], required:true},
  user:{type:String, required:true}
})

const model = mongoose.model<Photos>('Photos', PhotoSchema);

export default model;
