import { Polar } from '@polar-sh/sdk';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const polar = new Polar({
  // server: process.env.SERVER as 'sandbox' | 'production' ?? 'sandbox',
  server: 'production',
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});

const requestSchema = z.object({
  id: z.string().min(1, 'Subscription id is required'),
  session: z.string().min(1, 'Session id is required'),
});

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    const session = searchParams.get('session');

    const parsed = requestSchema.safeParse({ id, session });

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: parsed.error.issues[0]?.message || 'Invalid query parameters',
        },
        { status: 400 },
      );
    }

    const result = await polar.customerPortal.subscriptions.cancel(
      {
        customerSession: parsed.data.session,
      },
      {
        id: parsed.data.id,
      },
    );

    return NextResponse.json({ subscription: result }, { status: 200 });
  } catch (e) {
    console.error(e);
    const message =
      e instanceof Error ? e.message : 'Failed to cancel subscription';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
