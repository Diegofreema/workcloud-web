import { NextRequest, NextResponse } from 'next/server';
import { Polar } from '@polar-sh/sdk';

const polar = new Polar({
  // server: process.env.SERVER as 'sandbox' | 'production' ?? 'sandbox',
  server: 'production',
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});

export async function GET(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body;
    if (!userId) {
      return NextResponse.json(
        {
          error: 'Missing required fields: Product id or user id',
        },
        { status: 400 },
      );
    }
    const customer = await polar.customers.getStateExternal({
      externalId: userId,
    });
    return NextResponse.json({ customer });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
