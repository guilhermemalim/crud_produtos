import mongoose, { Document, Schema } from 'mongoose';

export interface IProductAttributes {
  name: string;
  slug: string;
  quantity: number;
}

export interface IProductDocument extends Document, IProductAttributes {}

const ProductSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

export default mongoose.model<IProductDocument>('Product', ProductSchema);
