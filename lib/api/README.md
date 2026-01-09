# Lessons API Utils

레슨 데이터를 조회하는 API 유틸리티 함수들입니다.

## 설치 및 사용법

### Import

```typescript
// 모든 함수 import
import { getLessons, getLessonById, getLessonsByGenre } from '@/lib/api';

// 타입 import
import type { Lesson } from '@/lib/api';
```

## API 함수들

### 1. getLessons()
모든 레슨 목록을 가져옵니다.

```typescript
const lessons = await getLessons();
```

**반환값:** `Promise<Lesson[]>`

---

### 2. getLessonById(id)
특정 레슨의 상세 정보를 가져옵니다.

```typescript
const lesson = await getLessonById('1');
```

**매개변수:**
- `id` (string): 레슨 ID

**반환값:** `Promise<Lesson | null>`

---

### 3. getLessonsByGenre(genre)
장르별로 레슨을 필터링합니다.

```typescript
const salsaLessons = await getLessonsByGenre('Salsa');
const bachataLessons = await getLessonsByGenre('Bachata');
const allLessons = await getLessonsByGenre('All');
```

**매개변수:**
- `genre` (string): 장르명 ('Salsa', 'Bachata', 'Kizomba', 'All')

**반환값:** `Promise<Lesson[]>`

---

### 4. getLessonsByIds(ids)
여러 레슨 ID로 레슨 목록을 가져옵니다.

```typescript
const lessons = await getLessonsByIds(['1', '2', '3']);
```

**매개변수:**
- `ids` (string[]): 레슨 ID 배열

**반환값:** `Promise<Lesson[]>`

---

### 5. getLessonsByInstructor(instructorId)
특정 강사가 담당하는 레슨을 검색합니다.

```typescript
const marcoLessons = await getLessonsByInstructor('marco-rivera');
```

**매개변수:**
- `instructorId` (string): 강사 ID

**반환값:** `Promise<Lesson[]>`

---

### 6. getLessonsByLevel(level)
레벨별로 레슨을 필터링합니다.

```typescript
const beginnerLessons = await getLessonsByLevel('Beginner');
const intermediateLessons = await getLessonsByLevel('Intermediate');
```

**매개변수:**
- `level` (string): 레벨명 ('Beginner', 'Intermediate', 'Advanced', 'All Levels')

**반환값:** `Promise<Lesson[]>`

---

### 7. searchLessons(query)
검색어로 레슨을 검색합니다.

```typescript
const results = await searchLessons('salsa');
```

**매개변수:**
- `query` (string): 검색어

**반환값:** `Promise<Lesson[]>`

---

## 사용 예제

### Server Component에서 사용

```typescript
// app/lessons/page.tsx
import { getLessons } from '@/lib/api';

export default async function LessonsPage() {
  const lessons = await getLessons();

  return (
    <div>
      {lessons.map(lesson => (
        <div key={lesson.id}>{lesson.title}</div>
      ))}
    </div>
  );
}
```

### Dynamic Route에서 사용

```typescript
// app/lessons/[id]/page.tsx
import { getLessonById } from '@/lib/api';

export default async function LessonDetailPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const lesson = await getLessonById(id);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div>
      <h1>{lesson.title}</h1>
      <p>{lesson.description}</p>
      <p>Price: ${lesson.price}</p>
    </div>
  );
}
```

### Client Component에서 사용

```typescript
'use client';

import { useEffect, useState } from 'react';
import { getLessons, type Lesson } from '@/lib/api';

export default function LessonList() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLessons() {
      try {
        const data = await getLessons();
        setLessons(data);
      } catch (error) {
        console.error('Failed to fetch lessons:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchLessons();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {lessons.map(lesson => (
        <div key={lesson.id}>{lesson.title}</div>
      ))}
    </div>
  );
}
```

### 장르 필터링 예제

```typescript
'use client';

import { useState, useEffect } from 'react';
import { getLessonsByGenre, type Lesson } from '@/lib/api';

export default function FilteredLessons() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    async function fetchFilteredLessons() {
      const data = await getLessonsByGenre(selectedGenre);
      setLessons(data);
    }

    fetchFilteredLessons();
  }, [selectedGenre]);

  return (
    <div>
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="All">All Genres</option>
        <option value="Salsa">Salsa</option>
        <option value="Bachata">Bachata</option>
        <option value="Kizomba">Kizomba</option>
      </select>

      <div>
        {lessons.map(lesson => (
          <div key={lesson.id}>{lesson.title}</div>
        ))}
      </div>
    </div>
  );
}
```

### 검색 기능 예제

```typescript
'use client';

import { useState } from 'react';
import { searchLessons, type Lesson } from '@/lib/api';

export default function LessonSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Lesson[]>([]);

  const handleSearch = async (searchQuery: string) => {
    setQuery(searchQuery);
    if (searchQuery.trim()) {
      const data = await searchLessons(searchQuery);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search lessons..."
      />

      <div>
        {results.map(lesson => (
          <div key={lesson.id}>{lesson.title}</div>
        ))}
      </div>
    </div>
  );
}
```

## Lesson 타입

```typescript
interface Lesson {
  id: string;
  title: string;
  genres: string[];
  level: string;
  description: string;
  price: number;
  imageUrl: string;
  instructors: {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
  }[];
  location: {
    studio: string;
    address: string;
    city: string;
  };
  date: {
    day: string;
    time: string;
  };
  tags: string[];
  bankDetails: {
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
}
```

## 주의사항

- 현재는 mock 데이터를 사용하고 있습니다.
- 실제 프로덕션 환경에서는 `lib/api/lessons.ts` 파일의 각 함수를 실제 API 엔드포인트를 호출하도록 수정해야 합니다.
- 모든 함수는 Promise를 반환하므로 `async/await`를 사용해야 합니다.
