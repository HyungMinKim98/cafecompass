import mongoose from "mongoose";

export interface Review {
  userId: mongoose.Schema.Types.ObjectId;
  cafeId: mongoose.Schema.Types.ObjectId;
  text: string;
  rating: number;
  date: Date;
}