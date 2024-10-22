import { Schema, model, Document } from 'mongoose';

// Define interface for the User document
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default model<IUser>('User', UserSchema);
