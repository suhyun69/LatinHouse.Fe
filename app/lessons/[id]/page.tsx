import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';
import { getLessonById } from '@/lib/api';

export default async function LessonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const lesson = await getLessonById(id);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-page">
      <Header />
      <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 py-10 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="sticky top-28 space-y-6">
              <div className="relative w-full aspect-[1/1.414] rounded-2xl overflow-hidden shadow-2xl shadow-black group bg-surface border border-zinc-800">
                <img
                  alt={lesson.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  src={lesson.imageUrl}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-10">
            <nav className="flex flex-wrap gap-2 text-sm font-medium">
              <Link className="text-text-sub hover:text-primary transition-colors" href="/">Home</Link>
              <span className="text-zinc-800 material-symbols-outlined text-[16px] self-center">chevron_right</span>
              <Link className="text-text-sub hover:text-primary transition-colors" href="/">Lessons</Link>
              <span className="text-zinc-800 material-symbols-outlined text-[16px] self-center">chevron_right</span>
              <span className="text-text-main">{lesson.title}</span>
            </nav>

            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                {lesson.genres.map((genre, idx) => (
                  <span key={idx} className="bg-primary/10 border border-primary/20 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                    {genre}
                  </span>
                ))}
                <span className="bg-zinc-800 border border-zinc-700 text-zinc-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {lesson.level}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                {lesson.title}
              </h1>

              <p className="text-text-sub text-lg leading-relaxed max-w-2xl">
                {lesson.description}
              </p>
            </div>

            <div className="h-px bg-gradient-to-r from-zinc-800 via-zinc-900 to-transparent w-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-surface rounded-2xl p-6 border border-zinc-800 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex gap-5 items-start group">
                <div className="bg-primary/10 p-3.5 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <span className="material-symbols-outlined text-[26px]">calendar_month</span>
                </div>
                <div>
                  <p className="text-text-sub text-xs font-bold uppercase tracking-wider mb-1.5">Date & Time</p>
                  <p className="text-white font-bold text-lg">{lesson.date.day}</p>
                  <div className="flex items-center gap-2 text-text-sub text-sm mt-1.5 font-medium">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    {lesson.date.time}
                  </div>
                </div>
              </div>

              <div className="bg-surface rounded-2xl p-6 border border-zinc-800 shadow-soft hover:shadow-soft-hover transition-all duration-300 flex gap-5 items-start group">
                <div className="bg-primary/10 p-3.5 rounded-xl text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <span className="material-symbols-outlined text-[26px]">location_on</span>
                </div>
                <div>
                  <p className="text-text-sub text-xs font-bold uppercase tracking-wider mb-1.5">Location</p>
                  <p className="text-white font-bold text-lg">{lesson.location.studio}</p>
                  <p className="text-text-sub text-sm mt-1.5 font-medium">{lesson.location.address}</p>
                  <p className="text-primary text-xs font-bold mt-1.5">{lesson.location.city}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white text-xl font-bold mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">groups</span>
                Your Instructors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {lesson.instructors.map((instructor) => (
                  <Link key={instructor.id} href={`/instructor/${instructor.id}`} className="bg-surface border border-zinc-800 shadow-sm p-5 rounded-2xl flex items-center gap-4 hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                    <div className="relative">
                      <img
                        alt={instructor.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-zinc-900 shadow-md group-hover:scale-105 transition-transform"
                        src={instructor.imageUrl}
                      />
                      <div className="absolute -bottom-1 -right-1 bg-surface p-0.5 rounded-full">
                        <span className="material-symbols-outlined text-primary text-[16px] bg-primary/20 rounded-full p-1">check</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">{instructor.name}</p>
                      <p className="text-text-sub text-sm font-medium">{instructor.role}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-surface rounded-3xl border border-zinc-800 shadow-xl overflow-hidden">
              <div className="bg-gradient-to-br from-zinc-900 to-primary/10 p-8 border-b border-zinc-800">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-1">Pricing & Registration</h3>
                    <p className="text-text-sub text-sm">Secure your spot for this exclusive event</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-extrabold text-white tracking-tight">${lesson.price}</span>
                    <span className="text-text-sub text-lg font-medium">/ person</span>
                  </div>
                </div>
                {lesson.tags.length > 0 && (
                  <div className="flex flex-wrap gap-3 mb-8">
                    {lesson.tags.map((tag, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 bg-green-900/20 text-green-400 border border-green-900/50 text-xs font-bold px-3 py-1.5 rounded-full">
                        <span className="material-symbols-outlined text-[16px]">sell</span>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <Link href={`/checkout/${id}`} className="w-full bg-primary hover:bg-orange-600 text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-primary/20 transition-all transform active:scale-[0.99] flex justify-center items-center gap-2">
                  <span>Book Now</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
              <div className="p-8 bg-black/40">
                <p className="text-white font-bold mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined text-text-sub">account_balance</span>
                  Direct Bank Transfer Details
                </p>
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                    <span className="text-text-sub text-sm font-medium">Bank Name</span>
                    <span className="text-white font-semibold text-sm">{lesson.bankDetails.bankName}</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800">
                    <span className="text-text-sub text-sm font-medium">Account Name</span>
                    <span className="text-white font-semibold text-sm">{lesson.bankDetails.accountName}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1">
                    <div className="flex flex-col">
                      <span className="text-text-sub text-xs font-medium mb-1">IBAN / Account Number</span>
                      <span className="text-white font-mono font-bold text-base tracking-wide">{lesson.bankDetails.accountNumber}</span>
                    </div>
                    <button className="p-2 hover:bg-primary/10 rounded-lg text-text-sub hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-[20px]">content_copy</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center pt-6 border-t border-zinc-900">
              <p className="text-text-sub text-sm font-medium">Questions? Contact us directly.</p>
              <div className="flex gap-3">
                <a className="flex items-center gap-2 bg-surface hover:bg-zinc-900 border border-zinc-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-lg" href="#">
                  <span className="material-symbols-outlined text-green-500 text-[20px]">chat</span>
                  WhatsApp
                </a>
                <a className="flex items-center gap-2 bg-surface hover:bg-zinc-900 border border-zinc-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm hover:shadow-lg" href="#">
                  <span className="material-symbols-outlined text-blue-500 text-[20px]">mail</span>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
