import Link from 'next/link';

interface LessonCardProps {
  id: string;
  title: string;
  genre: string;
  price: number;
  imageUrl: string;
  instructors: {
    name: string;
    imageUrl: string;
  }[];
  location: {
    studio: string;
    city: string;
  };
  date: {
    day: string;
    time: string;
  };
}

export default function LessonCard({
  id,
  title,
  genre,
  price,
  imageUrl,
  instructors,
  location,
  date,
}: LessonCardProps) {
  const instructorNames = instructors.map(i => i.name).join(' & ');

  return (
    <Link href={`/lessons/${id}`} className="group flex flex-row bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 border border-zinc-800 hover:border-primary/60 cursor-pointer">
      <div className="relative w-[160px] sm:w-[180px] shrink-0 aspect-[3/4] bg-zinc-900 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10 text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {genre}
          </span>
        </div>
      </div>
      <div className="flex flex-col p-5 sm:p-6 gap-3 flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-text-main text-lg sm:text-xl font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-2">
            {instructors.map((instructor, idx) => (
              <img
                key={idx}
                alt={instructor.name}
                className="size-7 sm:size-8 rounded-full ring-2 ring-surface object-cover"
                src={instructor.imageUrl}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-text-sub">{instructorNames}</span>
        </div>
        <div className="flex flex-col gap-2.5 mt-auto pt-4 border-t border-white/5">
          <div className="grid grid-cols-[24px_1fr] items-center gap-x-3 gap-y-2.5">
            <div className="flex justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">location_on</span>
            </div>
            <span className="text-sm font-medium text-text-sub truncate">{location.studio}, {location.city}</span>
            <div className="flex justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">calendar_month</span>
            </div>
            <span className="text-sm font-medium text-text-sub">{date.day}</span>
            <div className="flex justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">schedule</span>
            </div>
            <span className="text-sm font-medium text-text-sub">{date.time}</span>
            <div className="flex justify-center">
              <span className="material-symbols-outlined text-primary text-[20px]">payments</span>
            </div>
            <div className="flex items-center justify-between pr-2">
              <span className="text-primary text-sm font-bold tracking-wide">${price}</span>
              <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all">arrow_forward</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
