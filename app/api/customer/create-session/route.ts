import { polar } from '@/lib/polar';
import { Polar } from '@polar-sh/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const requestSchema = z.object({
  userId: z.string().min(1, 'User id is required'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = requestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || 'Invalid request body',
        },
        { status: 400 },
      );
    }

    const { userId } = parsed.data;

    const result = await polar.customerSessions.create({
      externalCustomerId: userId,
    });

    return NextResponse.json({ session: result });
  } catch (e) {
    console.error(e);
    const message = e instanceof Error ? e.message : 'Failed to create session';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
