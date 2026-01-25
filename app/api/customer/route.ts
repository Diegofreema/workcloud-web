import { NextRequest, NextResponse } from 'next/server';
import { Polar } from '@polar-sh/sdk';

const polar = new Polar({
  // server: process.env.SERVER as 'sandbox' | 'production' ?? 'sandbox',
  server: 'production',
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});

export async function GET(request: NextRequest) {
  try {
    const userId = request.nextUrl.searchParams.get('userId');

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
    const subscription = await polar.subscriptions.get({
      id: customer.activeSubscriptions[0].id,
    });
    return NextResponse.json({ customer, subscription });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
