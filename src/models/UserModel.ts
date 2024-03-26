import mongoose from 'mongoose';
import { User } from './User'; // Adjust the path as needed

const userSchema = new mongoose.Schema<User>({
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  profileInfo: { type: String, required: true },
  favorites: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Cafe' }],
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;