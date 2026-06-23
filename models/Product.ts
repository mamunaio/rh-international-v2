import mongoose, { Document } from 'mongoose';

export interface IProduct extends Document {
  title: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  createdAt: Date;
}

const ProductSchema = new mongoose.Schema<IProduct>({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default (mongoose.models.Product as mongoose.Model<IProduct>) || mongoose.model<IProduct>('Product', ProductSchema);
