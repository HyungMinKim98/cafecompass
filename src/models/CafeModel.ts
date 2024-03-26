import mongoose, { Document, Schema } from 'mongoose';

// Interface to describe a cafe for TypeScript.
export interface ICafe extends Document {
  name: string;
  location: string;
  businessHours: {
    open: string;
    close: string;
  };
  menuHighlights: string[];
  photos: string[];
}

// Mongoose schema for cafes
const CafeSchema: Schema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  businessHours: {
    open: { type: String, required: true },
    close: { type: String, required: true },
  },
  menuHighlights: [{ type: String }],
  photos: [{ type: String }],
});

// Create a model from the schema
const CafeModel = mongoose.model<ICafe>('Cafe', CafeSchema);

export default CafeModel;