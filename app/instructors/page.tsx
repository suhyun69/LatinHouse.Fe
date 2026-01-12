import Link from 'next/link';
import { instructorsData } from '@/lib/data/instructors';

const genres = [
  { id: 'all', label: 'All Instructors' },
  { id: 'salsa', label: 'Salsa' },
  { id: 'bachata', label: 'Bachata' },
  { id: 'kizomba', label: 'Kizomba' },
];

export default function InstructorsPage() {
  return (
    <main className="flex-grow flex flex-col">
      <div className="w-full bg-background-page px-6 md:px-20 lg:px-40 pt-12 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-text-main text-4xl md:text-5xl font-black tracking-tight">
              Meet the <span className="text-primary">Masters</span>
            </h1>
            <p className="text-text-sub text-lg max-w-2xl font-medium">
              Learn from world-renowned dancers and championship-winning instructors. Elevate your dance journey with the best in the industry.
            </p>
          </div>
        </div>
      </div>

      <div className="sticky top-[73px] z-40 bg-background-page/95 backdrop-blur-sm px-6 md:px-20 lg:px-40 py-6 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between">
          <div className="flex gap-3 overflow-x-auto w-full lg:w-auto pb-2 lg:pb-0 scrollbar-hide snap-x">
            {genres.map((genre, index) => (
              <button
                key={genre.id}
                className={
                  index === 0
                    ? "snap-start flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary text-white px-5 shadow-lg shadow-primary/25 transition-all"
                    : "snap-start flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-surface border border-zinc-800 text-text-sub hover:text-primary hover:border-primary hover:bg-white/5 px-5 transition-all"
                }
              >
                <span className={index === 0 ? "text-sm font-bold" : "text-sm font-semibold"}>{genre.label}</span>
              </button>
            ))}
          </div>

          <div className="flex gap-3 w-full lg:w-auto">
            <div className="flex-1 lg:w-64">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-3 text-[20px] text-zinc-500">location_on</span>
                <select className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 h-10 text-sm text-text-main focus:ring-primary focus:border-primary appearance-none cursor-pointer">
                  <option>All Regions</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Miami</option>
                  <option>London</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 text-[20px] text-zinc-500 pointer-events-none">expand_more</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-20 lg:px-40 py-12 flex-1 bg-background-page">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {instructorsData.map((instructor) => (
            <div
              key={instructor.id}
              className="group flex flex-col bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 ring-1 ring-zinc-800 hover:ring-primary/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  alt={instructor.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={instructor.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {instructor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className={
                          index === 0
                            ? "px-2 py-0.5 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider"
                            : "px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-wider"
                        }
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-text-main text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-text-sub text-sm leading-relaxed line-clamp-2 italic">
                  "{instructor.quote}"
                </p>
                <div className="flex items-center gap-2 text-zinc-500 mt-2">
                  <span className="material-symbols-outlined text-[18px]">location_on</span>
                  <span className="text-xs font-semibold">{instructor.location}</span>
                </div>
                <Link
                  href={`/instructor/${instructor.id}`}
                  className="mt-4 w-full h-11 flex items-center justify-center rounded-xl bg-zinc-800 border border-zinc-700 text-text-main hover:bg-primary hover:text-white hover:border-primary shadow-sm text-sm font-bold transition-all duration-300"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center mt-16 pb-12">
          <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-full h-12 px-8 bg-surface border border-zinc-800 shadow-sm hover:shadow-md hover:border-primary hover:text-primary text-text-main text-sm font-bold tracking-wide transition-all">
            Load More Instructors
          </button>
        </div>
      </div>
    </main>
  );
}
