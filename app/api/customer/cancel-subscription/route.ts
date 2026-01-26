import { polar } from '@/lib/polar';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

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

    // Handle Polar API errors with specific status codes
    if (e && typeof e === 'object' && 'statusCode' in e) {
      const error = e as { statusCode?: number; body?: any };
      const statusCode = error.statusCode;
      const body = error.body;

      // Handle 402, 404, 409 - return { error, detail }
      if (statusCode && [402, 404, 409].includes(statusCode)) {
        return NextResponse.json(
          {
            error: body?.error || 'An error occurred',
            detail: body?.detail || '',
          },
          { status: statusCode },
        );
      }

      // Handle 422 - return { detail: [{ loc, msg, type }] }
      if (statusCode === 422) {
        return NextResponse.json(
          {
            detail: body?.detail || [],
          },
          { status: 422 },
        );
      }
    }

    // Default error handling
    const message =
      e instanceof Error ? e.message : 'Failed to cancel subscription';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
