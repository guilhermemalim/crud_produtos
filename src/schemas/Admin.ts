import mongoose, { Document, Schema } from 'mongoose';

export interface IAdminAttributes {
  name: string;
}

export interface IAdminDocument extends Document, IAdminAttributes {}

const AdminSchema = new Schema({
  name: {
    type: String,
  },
});

export default mongoose.model<IAdminDocument>('Admin', AdminSchema);
