'use client';

import { useState, useEffect } from 'react';
import { getLessons, getLessonsByGenre } from '@/lib/api';
import LessonCard from './LessonCard';

const genres = [
  { id: 'all', label: 'All Genres', icon: 'music_note', value: 'All' },
  { id: 'salsa-on1', label: 'Salsa On1', value: 'Salsa' },
  { id: 'salsa-on2', label: 'Salsa On2', value: 'Salsa' },
  { id: 'bachata-sensual', label: 'Bachata Sensual', value: 'Bachata' },
  { id: 'bachata-dominicana', label: 'Bachata Dominicana', value: 'Bachata' },
  { id: 'kizomba', label: 'Kizomba', value: 'Kizomba' },
];

export default function LessonList() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [lessons, setLessons] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLessons('All');
  }, []);

  const fetchLessons = async (genre: string) => {
    setLoading(true);
    try {
      const lessonsData = genre === 'All'
        ? await getLessons()
        : await getLessonsByGenre(genre);

      const formattedLessons = lessonsData.map(lesson => ({
        id: lesson.id,
        title: lesson.title,
        genre: lesson.genres.join(' & '),
        price: lesson.price,
        imageUrl: lesson.imageUrl,
        instructors: lesson.instructors.map(instructor => ({
          name: instructor.name,
          imageUrl: instructor.imageUrl,
        })),
        location: {
          studio: lesson.location.studio,
          city: lesson.location.city,
        },
        date: lesson.date,
      }));

      setLessons(formattedLessons);
    } catch (error) {
      console.error('Error fetching lessons:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGenreChange = (genreId: string, genreValue: string) => {
    setSelectedGenre(genreId);
    fetchLessons(genreValue);
  };

  return (
    <div className="px-6 md:px-20 lg:px-40 py-2 flex-1 flex flex-col items-center bg-background-page">
      <div className="layout-content-container flex flex-col max-w-[1200px] w-full flex-1">
        <div className="flex flex-col gap-6 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
            <div className="flex flex-col">
              <h2 className="text-text-main tracking-tight text-3xl font-bold leading-tight">Upcoming Lessons</h2>
              <p className="text-text-sub mt-1">Explore 24 classes available this week</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-text-sub">Sort by:</span>
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface border border-zinc-800 hover:border-primary/50 text-text-main text-sm font-semibold shadow-sm transition-all">
                Date: Upcoming
                <span className="material-symbols-outlined text-[20px] text-primary">expand_more</span>
              </button>
            </div>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x">
            {genres.map((genre) => (
              <button
                key={genre.id}
                onClick={() => handleGenreChange(genre.id, genre.value)}
                className={
                  selectedGenre === genre.id
                    ? "snap-start flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-lg shadow-primary/25 transition-transform active:scale-95"
                    : "snap-start flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface border border-zinc-800 text-text-sub hover:text-primary hover:border-primary hover:bg-white/5 px-5 transition-all"
                }
              >
                {genre.icon && <span className="material-symbols-outlined text-[20px]">{genre.icon}</span>}
                <span className={selectedGenre === genre.id ? "text-sm font-bold" : "text-sm font-semibold"}>{genre.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-16">
          {loading ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <p className="text-text-sub">Loading lessons...</p>
            </div>
          ) : lessons.length === 0 ? (
            <div className="col-span-full flex items-center justify-center py-12">
              <p className="text-text-sub">No lessons found for this genre.</p>
            </div>
          ) : (
            lessons.map((lesson) => (
              <LessonCard key={lesson.id} {...lesson} />
            ))
          )}
        </div>
        <div className="flex items-center justify-center pb-12">
          <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-surface border border-zinc-800 shadow-sm hover:shadow-md hover:border-primary hover:text-primary text-text-main text-sm font-bold tracking-wide transition-all">
            Load More Lessons
          </button>
        </div>
      </div>
    </div>
  );
}
