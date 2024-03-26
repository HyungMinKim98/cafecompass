import mongoose from 'mongoose';

export interface Cafe {
  name: string;
  location: string;
  businessHours: {
    open: string;
    close: string;
  };
  menuHighlights: string[];
  photos: string[];
}

const cafeSchema = new mongoose.Schema<Cafe>({
  name: { type: String, required: true },
  location: { type: String, required: true },
  businessHours: {
    open: { type: String, required: true },
    close: { type: String, required: true },
  },
  menuHighlights: [{ type: String }],
  photos: [{ type: String }],
});

export const CafeModel = mongoose.model<Cafe>('Cafe', cafeSchema);