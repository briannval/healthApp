import mongoose, { Schema } from "mongoose";

export interface Log {
  _id: string;
  date: string;
  feeling: string;
  sleep: string;
  description: string;
  exercise: string;
  userId: string;
}

mongoose.Promise = global.Promise;

const schema = new Schema<Log>(
  {
    _id: { type: String, required: true },
    date: { type: String, required: true },
    feeling: { type: String, required: true },
    sleep: { type: String, required: true },
    description: { type: String, required: true },
    exercise: { type: String, required: true },
    userId: { type: String, required: true },
  },
  { _id: false }
);

export const Log = mongoose.models.Log || mongoose.model<Log>("Log", schema);
