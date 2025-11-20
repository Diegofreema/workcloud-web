import { NextRequest, NextResponse } from 'next/server';
import { Polar } from '@polar-sh/sdk';

const polar = new Polar({
  // server: process.env.SERVER as 'sandbox' | 'production' ?? 'sandbox',
  server: 'production',
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});

export async function POST(request: NextRequest) {
  console.log('Called');
  try {
    const body = await request.json();
    const { id, userId } = body;
    if (!id || !userId) {
      return NextResponse.json(
        {
          error: 'Missing required fields: Product id or user id',
        },
        { status: 400 }
      );
    }
    const checkout = await polar.checkouts.create({
      products: [id],
      externalCustomerId: userId,
    });
    return NextResponse.json({ checkout });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
