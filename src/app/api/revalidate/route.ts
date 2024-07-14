import { revalidateTag } from 'next/cache';

export async function GET() {
  revalidateTag('pages');
  return Response.json({ status: 'ok' });
}
