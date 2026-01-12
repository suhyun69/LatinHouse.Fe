import { getLessons } from '@/lib/api';
import LessonCard from './LessonCard';

const genres = [
  { id: 'all', label: 'All Genres', icon: 'music_note', active: true },
  { id: 'salsa-on1', label: 'Salsa On1', active: false },
  { id: 'salsa-on2', label: 'Salsa On2', active: false },
  { id: 'bachata-sensual', label: 'Bachata Sensual', active: false },
  { id: 'bachata-dominicana', label: 'Bachata Dominicana', active: false },
  { id: 'kizomba', label: 'Kizomba', active: false },
];

export default async function LessonList() {

  const lessonsData = await getLessons();
  const lessons = lessonsData.map(lesson => ({
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
                className={
                  genre.active
                    ? "snap-start flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-lg shadow-primary/25 transition-transform active:scale-95"
                    : "snap-start flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface border border-zinc-800 text-text-sub hover:text-primary hover:border-primary hover:bg-white/5 px-5 transition-all"
                }
              >
                {genre.icon && <span className="material-symbols-outlined text-[20px]">{genre.icon}</span>}
                <span className={genre.active ? "text-sm font-bold" : "text-sm font-semibold"}>{genre.label}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-16">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} {...lesson} />
          ))}
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
