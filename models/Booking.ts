import mongoose from 'mongoose';

export interface IBooking extends mongoose.Document {
  name: string;
  email: string;
  company: string;
  phone: string;
  website?: string;
  service: string;
  expert: string;
  date: string;
  time: string;
  message: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

const BookingSchema = new mongoose.Schema<IBooking>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    company: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    website: {
      type: String,
      trim: true,
    },
    service: {
      type: String,
      required: true,
    },
    expert: {
      type: String,
      required: true,
    },
    date: {
      type: String, 
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'cancelled'],
      default: 'pending',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Booking as mongoose.Model<IBooking> || mongoose.model<IBooking>('Booking', BookingSchema);
