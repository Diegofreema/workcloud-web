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
      const polarError = e as {
        statusCode?: number;
        error?: string;
        detail?: string;
        body?: string;
      };
      const statusCode = polarError.statusCode;

      // Parse body if it's a string
      let parsedBody: { error?: string; detail?: string | any[] } = {};
      if (polarError.body && typeof polarError.body === 'string') {
        try {
          parsedBody = JSON.parse(polarError.body);
        } catch {
          // If parsing fails, use direct properties
          parsedBody = {};
        }
      }

      // Use direct properties from error object or parsed body
      const errorMessage =
        polarError.error || parsedBody.error || 'An error occurred';
      const errorDetail = polarError.detail || parsedBody.detail || '';

      // Handle 403, 404, 409 - return { error, detail }
      if (statusCode && [403, 404, 409].includes(statusCode)) {
        return NextResponse.json(
          {
            error: errorMessage,
            detail: errorDetail,
          },
          { status: statusCode },
        );
      }

      // Handle 422 - return { detail: [{ loc, msg, type }] }
      if (statusCode === 422) {
        return NextResponse.json(
          {
            detail: Array.isArray(errorDetail) ? errorDetail : [],
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
