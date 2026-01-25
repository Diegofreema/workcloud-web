import { Polar } from '@polar-sh/sdk';

export const polar = new Polar({
  // server: process.env.SERVER as 'sandbox' | 'production' ?? 'sandbox',
  server: 'production',
  accessToken: process.env.POLAR_ACCESS_TOKEN!,
});
