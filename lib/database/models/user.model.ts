import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
    clerkID: string;
    email: string;
    firstName: string;
    lastName: string;
    username: string;
    photo?: string;
}

const UserSchema = new Schema({
    clerkID: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    photo: { type: String },
});

const User = models?.User || model('User', UserSchema);

export default User;
