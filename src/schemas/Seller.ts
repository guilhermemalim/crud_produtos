import mongoose, { Document, Schema } from 'mongoose';

export interface ISellerAttributes {
  name: string;
}

export interface ISellerDocument extends Document, ISellerAttributes {}

const SellerSchema = new Schema({
  name: {
    type: String,
  },
});

export default mongoose.model<ISellerDocument>('Seller', SellerSchema);
