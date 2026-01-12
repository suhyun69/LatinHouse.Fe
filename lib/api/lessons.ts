import { lessonsData, Lesson } from '../data/lessons';

/**
 * 모든 레슨 목록을 가져옵니다.
 * @returns Promise<Lesson[]> - 모든 레슨의 배열
 */
export async function getLessons(): Promise<Lesson[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/lessons`, {
      cache: 'no-store', // 항상 최신 데이터를 가져옴
    });

    if (!response.ok) {
      throw new Error('Failed to fetch lessons');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching lessons:', error);
    // 에러 발생 시 fallback으로 mock 데이터 반환
    return lessonsData;
  }
}

/**
 * 장르별로 레슨을 필터링하여 가져옵니다.
 * @param genre - 필터링할 장르 (예: 'Salsa', 'Bachata', 'Kizomba')
 * @returns Promise<Lesson[]> - 필터링된 레슨의 배열
 */
export async function getLessonsByGenre(genre: string): Promise<Lesson[]> {
  // 실제 프로덕션에서는 API 호출
  // const response = await fetch(`/api/lessons?genre=${genre}`);
  // return response.json();

  if (genre === 'All') {
    return Promise.resolve(lessonsData);
  }

  const filtered = lessonsData.filter(lesson =>
    lesson.genres.some(g => g.toLowerCase() === genre.toLowerCase())
  );

  return Promise.resolve(filtered);
}

/**
 * ID로 특정 레슨의 상세 정보를 가져옵니다.
 * @param id - 레슨 ID
 * @returns Promise<Lesson | null> - 레슨 객체 또는 null (찾지 못한 경우)
 */
export async function getLessonById(id: string): Promise<Lesson | null> {
  // 실제 프로덕션에서는 API 호출
  // const response = await fetch(`/api/lessons/${id}`);
  // if (!response.ok) return null;
  // return response.json();

  const lesson = lessonsData.find(lesson => lesson.id === id);
  return Promise.resolve(lesson || null);
}

/**
 * 여러 레슨 ID로 레슨 목록을 가져옵니다.
 * @param ids - 레슨 ID 배열
 * @returns Promise<Lesson[]> - 찾은 레슨들의 배열
 */
export async function getLessonsByIds(ids: string[]): Promise<Lesson[]> {
  // 실제 프로덕션에서는 API 호출
  // const response = await fetch(`/api/lessons?ids=${ids.join(',')}`);
  // return response.json();

  const lessons = lessonsData.filter(lesson => ids.includes(lesson.id));
  return Promise.resolve(lessons);
}

/**
 * 강사 ID로 레슨을 검색합니다.
 * @param instructorId - 강사 ID
 * @returns Promise<Lesson[]> - 해당 강사가 담당하는 레슨의 배열
 */
export async function getLessonsByInstructor(instructorId: string): Promise<Lesson[]> {
  // 실제 프로덕션에서는 API 호출
  // const response = await fetch(`/api/lessons?instructorId=${instructorId}`);
  // return response.json();

  const lessons = lessonsData.filter(lesson =>
    lesson.instructors.some(instructor => instructor.id === instructorId)
  );

  return Promise.resolve(lessons);
}

/**
 * 레벨별로 레슨을 필터링하여 가져옵니다.
 * @param level - 필터링할 레벨 (예: 'Beginner', 'Intermediate', 'Advanced', 'All Levels')
 * @returns Promise<Lesson[]> - 필터링된 레슨의 배열
 */
export async function getLessonsByLevel(level: string): Promise<Lesson[]> {
  // 실제 프로덕션에서는 API 호출
  // const response = await fetch(`/api/lessons?level=${level}`);
  // return response.json();

  const filtered = lessonsData.filter(lesson =>
    lesson.level.toLowerCase() === level.toLowerCase()
  );

  return Promise.resolve(filtered);
}

/**
 * 검색어로 레슨을 검색합니다. (제목, 설명, 장르에서 검색)
 * @param query - 검색어
 * @returns Promise<Lesson[]> - 검색 결과 레슨의 배열
 */
export async function searchLessons(query: string): Promise<Lesson[]> {
  // 실제 프로덕션에서는 API 호출
  // const response = await fetch(`/api/lessons/search?q=${encodeURIComponent(query)}`);
  // return response.json();

  const lowerQuery = query.toLowerCase();
  const results = lessonsData.filter(lesson =>
    lesson.title.toLowerCase().includes(lowerQuery) ||
    lesson.description.toLowerCase().includes(lowerQuery) ||
    lesson.genres.some(g => g.toLowerCase().includes(lowerQuery))
  );

  return Promise.resolve(results);
}
