import mongoose from 'mongoose';
import { Review } from './Review'; // Adjust the path as needed

const reviewSchema = new mongoose.Schema<Review>({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
  cafeId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Cafe' },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
  date: { type: Date, required: true },
});

const ReviewModel = mongoose.model<Review>('Review', reviewSchema);

export default ReviewModel;