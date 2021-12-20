import mongoose, { Document, Schema } from 'mongoose';

export interface IAppAttributes {
  name: string;
  cnpj: string;
  app_color: string;
}

export interface IAppDocument extends Document, IAppAttributes {}

const AppSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  app_color: {
    type: String,
  },
});

export default mongoose.model<IAppDocument>('App', AppSchema);
