import mongoose, { Document } from 'mongoose';

export interface IOrderItem {
  product_id: string;
  quantity: number;
  price_at_time: number;
}

export interface IOrder extends Document {
  customer_id: string;
  total_amount: number;
  status: string;
  items: IOrderItem[];
  createdAt: Date;
}

const OrderItemSchema = new mongoose.Schema<IOrderItem>({
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true },
  price_at_time: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema<IOrder>({
  customer_id: { type: String, required: true }, // The user email or ID
  total_amount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'processing', 'completed', 'cancelled'], default: 'pending' },
  items: [OrderItemSchema],
  createdAt: { type: Date, default: Date.now },
});

export default (mongoose.models.Order as mongoose.Model<IOrder>) || mongoose.model<IOrder>('Order', OrderSchema);
