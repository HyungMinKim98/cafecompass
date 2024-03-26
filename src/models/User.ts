import mongoose from "mongoose";

export interface User {
  email: string;
  passwordHash: string;
  profileInfo: string;
  favorites: mongoose.Schema.Types.ObjectId[]; // Array of Cafe IDs
}