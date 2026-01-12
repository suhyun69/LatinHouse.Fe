import { NextResponse } from 'next/server';
import { lessonsData } from '@/lib/data/lessons';

export async function GET() {
  try {
    // 실제 프로덕션에서는 데이터베이스에서 조회
    // const lessons = await db.lessons.findMany();

    return NextResponse.json(lessonsData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    );
  }
}
