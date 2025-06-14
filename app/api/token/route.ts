import { StreamClient, UserRequest } from '@stream-io/node-sdk';
import { NextRequest, NextResponse } from 'next/server';

const apiKey = process.env.STREAM_API_KEY!;
const apiSecret = process.env.STEAM_SECRET_KEY!;

const client = new StreamClient(apiKey, apiSecret);
export async function POST(req: NextRequest) {
  const { image, name, email, id } = await req.json();
  if (!image || !name || !email || !id) {
    throw new Error('Missing required fields');
  }
  const newUser: UserRequest = {
    id,
    name,
    image,
    role: 'user',
    custom: {
      email,
    },
  };

  await client.upsertUsers([newUser]);
  const token = client.generateUserToken({
    user_id: id,
  });

  return NextResponse.json({
    token,
  });
}
