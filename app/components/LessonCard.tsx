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
    <Link href={`/lessons/${id}`} className="group flex flex-col sm:flex-row bg-surface rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-hover transition-all duration-300 ring-1 ring-zinc-800 hover:ring-primary/40 cursor-pointer">
      <div className="relative w-full sm:w-[180px] shrink-0 h-48 sm:h-auto bg-zinc-900 overflow-hidden">
        <img
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          src={imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2 py-1 rounded-md bg-black/70 backdrop-blur border border-white/10 text-primary text-[10px] font-bold uppercase tracking-wider shadow-sm">
            {genre}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 z-10">
          <span className="flex items-center justify-center h-7 px-2 rounded-lg bg-primary text-white text-xs font-bold shadow-lg">
            ${price}
          </span>
        </div>
      </div>
      <div className="flex flex-col p-5 gap-3 flex-1 justify-between">
        <div>
          <h3 className="text-text-main text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-1">
            {title}
          </h3>
          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center -space-x-2">
              {instructors.map((instructor, idx) => (
                <img
                  key={idx}
                  alt={instructor.name}
                  className="size-8 rounded-full ring-2 ring-surface object-cover"
                  src={instructor.imageUrl}
                />
              ))}
            </div>
            <span className="text-xs font-medium text-text-sub">Hosted by {instructorNames}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-zinc-800 pt-3">
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">location_on</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-main leading-tight">{location.studio}</span>
              <span className="text-xs text-text-sub">{location.city}</span>
            </div>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">calendar_month</span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-text-main leading-tight">{date.day}</span>
              <span className="text-xs text-text-sub">{date.time}</span>
            </div>
          </div>
        </div>
        <div className="mt-1 w-full flex items-center justify-center rounded-xl h-10 bg-primary text-white shadow-md shadow-primary/20 hover:bg-orange-600 hover:shadow-lg hover:shadow-primary/30 text-sm font-bold transition-all duration-300">
          Book Now
        </div>
      </div>
    </Link>
  );
}
