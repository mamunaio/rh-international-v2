import mongoose from 'mongoose';

let MONGODB_URI = process.env.MONGODB_URI!;
if (MONGODB_URI && MONGODB_URI.startsWith('mongodb+srv://stevenkjhonson_db_user:dAOiZaKxTMuXf0a0@rhinternational.vjwm3tg.mongodb.net')) {
  MONGODB_URI = "mongodb://stevenkjhonson_db_user:dAOiZaKxTMuXf0a0@ac-tatbgus-shard-00-00.vjwm3tg.mongodb.net:27017,ac-tatbgus-shard-00-01.vjwm3tg.mongodb.net:27017,ac-tatbgus-shard-00-02.vjwm3tg.mongodb.net:27017/?ssl=true&authSource=admin&retryWrites=true&w=majority&appName=Rhinternational";
}

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      family: 4,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
