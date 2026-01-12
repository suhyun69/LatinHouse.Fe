import { NextResponse } from 'next/server';
import { lessonsData } from '@/lib/data/lessons';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const genre = searchParams.get('genre');

    // 실제 프로덕션에서는 데이터베이스에서 조회
    // const lessons = await db.lessons.findMany({ where: { genre } });

    let filteredLessons = lessonsData;

    if (genre && genre !== 'All') {
      filteredLessons = lessonsData.filter(lesson =>
        lesson.genres.some(g => g.toLowerCase() === genre.toLowerCase())
      );
    }

    return NextResponse.json(filteredLessons);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch lessons' },
      { status: 500 }
    );
  }
}
