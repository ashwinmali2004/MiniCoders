import { NextRequest, NextResponse } from 'next/server';
import { search } from '@/utils/searchUtils';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query');

  if (!query || typeof query !== 'string') {
    return NextResponse.json({ error: 'Query must be a string' }, { status: 400 });
  }

  const results = search(query);
  return NextResponse.json(results);
}
