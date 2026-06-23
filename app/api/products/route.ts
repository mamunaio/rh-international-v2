import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/db';
import Product from '@/models/Product';

export async function GET(req: Request) {
  try {
    await connectToDatabase();
    
    const products = await Product.find({}).sort({ createdAt: -1 });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error('Products fetch error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
