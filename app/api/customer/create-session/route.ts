import { polar } from '@/lib/polar';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        {
          error: 'Missing required fields: User id',
        },
        { status: 400 },
      );
    }
    const result = await polar.customerSessions.create({
      returnUrl: '/',
      externalCustomerId: userId,
    });

    return NextResponse.json({ session: result });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ error: e }, { status: 500 });
  }
}
