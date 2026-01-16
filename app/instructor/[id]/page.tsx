import Link from 'next/link';
import { instructorsData } from '@/lib/data/instructors';

export default async function InstructorPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const instructor = instructorsData.find((i) => i.id === id);

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div className="bg-background-page font-display text-white overflow-x-hidden min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-zinc-800 px-6 py-3 lg:px-40 sticky top-0 z-50 bg-background-page/95 backdrop-blur-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-4 text-white">
            <div className="size-8 text-primary">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Ritmo</h2>
          </div>
          <nav className="hidden md:flex items-center gap-9">
            <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">
              Instructors
            </a>
            <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">
              Classes
            </a>
            <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">
              Events
            </a>
            <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">
              Studio
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center rounded-full size-10 text-white hover:bg-zinc-800 transition-colors">
            <span className="material-symbols-outlined">search</span>
          </button>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border border-zinc-800 cursor-pointer"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_jkjtrqlA-pFoinspq6Zgep_io3KGgG7wRKV5oz-O32wLjUnQ_17aTw3y13gOH3wZfpcl54G3EdDpdYcFT8hJoxtKXEBLKxpi4WFPyTXzH8l1BjMKETB-LO3O5Y8XDpKbGqB4--MlBTL1PIM3QeCNXNNGSQHjNI6zDhaj7N0kw2JEqok15JO11XLGq_IGcQB82Sup6jqozexOhC2Qm3akCexB4QEPFaGe_ZGO20yLKqQiYa3atyspC2Mcdi9dNuKKilhGeCNj2js")',
            }}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 w-full max-w-[1280px] mx-auto flex flex-col">
        {/* Cover Image & Profile Header */}
        <div className="relative w-full">
          <div
            className="h-48 md:h-64 w-full bg-cover bg-center relative"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(24, 19, 17, 0.3), rgba(24, 19, 17, 1)), url('${instructor.coverImage}')`,
            }}
          ></div>
          <div className="px-4 md:px-8 lg:px-12 -mt-16 md:-mt-20 relative z-10 flex flex-col md:flex-row gap-6 items-start">
            <div className="relative group">
              <div className="rounded-full p-1.5 bg-background-page">
                <div
                  className="size-32 md:size-40 rounded-full bg-cover bg-center border-4 border-zinc-800 shadow-xl"
                  style={{ backgroundImage: `url("${instructor.imageUrl}")` }}
                ></div>
              </div>
              <div className="absolute bottom-4 right-4 bg-green-500 border-2 border-background-page size-4 rounded-full"></div>
            </div>
            <div className="flex-1 flex flex-col md:flex-row justify-between w-full pt-0 md:pt-20 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">{instructor.name}</h1>
                  <p className="text-text-sub text-base md:text-lg font-medium flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
                    {instructor.location} • {instructor.title}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {instructor.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-zinc-900 text-white border border-zinc-800"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 mt-2 md:mt-0">
                <button className="flex-1 md:flex-none min-w-[120px] h-11 items-center justify-center rounded-full bg-primary hover:bg-orange-600 text-white text-sm font-bold transition-all shadow-lg shadow-orange-900/20">
                  Follow
                </button>
                <button className="flex-1 md:flex-none min-w-[120px] h-11 items-center justify-center rounded-full bg-surface border border-zinc-800 hover:bg-zinc-900 text-white text-sm font-bold transition-all">
                  Contact
                </button>
                <button className="size-11 flex items-center justify-center rounded-full bg-surface border border-zinc-800 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="px-4 md:px-8 lg:px-12 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            {/* About */}
            <div className="bg-surface rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">person</span>
                About {instructor.name.split(' ')[0]}
              </h3>
              <p className="text-text-sub leading-relaxed mb-0">{instructor.about}</p>
            </div>

            {/* Contact Info */}
            <div className="bg-surface rounded-xl p-6 border border-zinc-800">
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">contact_page</span>
                Contact Info
              </h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="size-9 min-w-[36px] rounded-full bg-background-page flex items-center justify-center border border-zinc-800 text-primary">
                    <span className="material-symbols-outlined text-sm">call</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-text-sub font-bold">Phone Number</span>
                    <span className="text-white text-sm font-medium hover:text-primary transition-colors cursor-pointer">
                      {instructor.phone}
                    </span>
                  </div>
                </div>
                <a className="flex items-center gap-3 group/item" href="#">
                  <div className="size-9 min-w-[36px] rounded-full bg-background-page flex items-center justify-center border border-zinc-800 text-primary group-hover/item:border-primary transition-colors">
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-text-sub font-bold">Instagram</span>
                    <span className="text-white text-sm font-medium group-hover/item:text-primary transition-colors">
                      {instructor.instagram}
                    </span>
                  </div>
                </a>
                <a className="flex items-center gap-3 group/item" href="#">
                  <div className="size-9 min-w-[36px] rounded-full bg-background-page flex items-center justify-center border border-zinc-800 text-primary group-hover/item:border-primary transition-colors">
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-text-sub font-bold">Facebook</span>
                    <span className="text-white text-sm font-medium group-hover/item:text-primary transition-colors">
                      {instructor.facebook}
                    </span>
                  </div>
                </a>
                <a className="flex items-center gap-3 group/item" href="#">
                  <div className="size-9 min-w-[36px] rounded-full bg-background-page flex items-center justify-center border border-zinc-800 text-primary group-hover/item:border-primary transition-colors">
                    <svg className="size-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-text-sub font-bold">YouTube</span>
                    <span className="text-white text-sm font-medium group-hover/item:text-primary transition-colors">
                      {instructor.youtube}
                    </span>
                  </div>
                </a>
                <a className="flex items-center gap-3 group/item" href="#">
                  <div className="size-9 min-w-[36px] rounded-full bg-background-page flex items-center justify-center border border-zinc-800 text-primary group-hover/item:border-primary transition-colors">
                    <span className="material-symbols-outlined text-sm">language</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-text-sub font-bold">Web Page</span>
                    <span className="text-white text-sm font-medium group-hover/item:text-primary transition-colors">
                      {instructor.website}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Stats Grid */}
            {instructor.stats && (
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface border border-zinc-800">
                  <span className="text-2xl font-bold text-white">{instructor.stats.students}</span>
                  <span className="text-xs text-text-sub uppercase tracking-wider font-semibold">Students</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface border border-zinc-800">
                  <span className="text-2xl font-bold text-white">{instructor.stats.experience}</span>
                  <span className="text-xs text-text-sub uppercase tracking-wider font-semibold">Years Exp</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface border border-zinc-800">
                  <span className="text-2xl font-bold text-white flex items-center gap-1">
                    {instructor.stats.rating}{' '}
                    <span className="material-symbols-outlined text-yellow-500 text-sm">star</span>
                  </span>
                  <span className="text-xs text-text-sub uppercase tracking-wider font-semibold">Rating</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface border border-zinc-800">
                  <span className="text-2xl font-bold text-white">{instructor.stats.followers}</span>
                  <span className="text-xs text-text-sub uppercase tracking-wider font-semibold">Followers</span>
                </div>
              </div>
            )}

            {/* Highlights */}
            {instructor.highlights && instructor.highlights.length > 0 && (
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-bold">Highlights</h3>
                <div className="grid grid-cols-2 gap-2">
                  {instructor.highlights.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square rounded-lg bg-cover bg-center cursor-pointer hover:opacity-80 transition-opacity"
                      style={{ backgroundImage: `url('${img}')` }}
                    ></div>
                  ))}
                  <div className="aspect-square rounded-lg bg-cover bg-center cursor-pointer flex items-center justify-center bg-zinc-900">
                    <span className="text-sm font-bold text-white">+12</span>
                  </div>
                </div>
              </div>
            )}
          </aside>

          {/* Main Section - Schedule */}
          <section className="lg:col-span-8 order-1 lg:order-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Schedule</h3>
              <div className="bg-surface p-1 rounded-full flex gap-1 border border-zinc-800">
                <button className="px-5 py-2 rounded-full text-sm font-bold bg-primary text-white shadow-md">
                  Upcoming
                </button>
                <button className="px-5 py-2 rounded-full text-sm font-medium text-text-sub hover:text-white transition-colors">
                  Past Lessons
                </button>
              </div>
            </div>
            {instructor.schedule && instructor.schedule.length > 0 ? (
              <>
                <div className="flex flex-col gap-4">
                  {instructor.schedule.map((lesson) => (
                    <div
                      key={lesson.id}
                      className={`group flex flex-col sm:flex-row bg-surface border ${
                        lesson.available ? 'border-zinc-800 hover:border-primary/50' : 'border-zinc-800 opacity-75'
                      } rounded-2xl overflow-hidden transition-all duration-300 ${
                        lesson.available ? 'hover:shadow-lg hover:shadow-primary/5' : ''
                      }`}
                    >
                      <div
                        className="sm:w-32 h-32 sm:h-auto bg-cover bg-center relative flex flex-col items-center justify-center text-center p-2 before:absolute before:inset-0 before:bg-black/40"
                        style={{ backgroundImage: `url('${lesson.imageUrl}')` }}
                      >
                        <div
                          className={`relative z-10 ${
                            lesson.available ? 'bg-white/10' : 'bg-white/5'
                          } backdrop-blur-md border ${
                            lesson.available ? 'border-white/20' : 'border-white/10'
                          } rounded-xl p-2 min-w-[70px]`}
                        >
                          <span
                            className={`block text-xs font-bold uppercase ${
                              lesson.available ? 'text-white/80' : 'text-white/50'
                            }`}
                          >
                            {lesson.date.month}
                          </span>
                          <span
                            className={`block text-2xl font-extrabold ${lesson.available ? 'text-white' : 'text-white/50'}`}
                          >
                            {lesson.date.day}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1 p-5 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <span
                                className={`px-2 py-0.5 rounded bg-${lesson.levelColor}-500/20 text-${lesson.levelColor}-400 text-[10px] font-bold uppercase tracking-wider border border-${lesson.levelColor}-500/20`}
                              >
                                {lesson.level}
                              </span>
                              <span className="text-xs text-text-sub">{lesson.time}</span>
                            </div>
                            <h4
                              className={`text-xl font-bold ${
                                lesson.available ? 'text-white group-hover:text-primary' : 'text-text-sub'
                              } mb-1 transition-colors`}
                            >
                              {lesson.title}
                            </h4>
                            <p className="text-sm text-text-sub flex items-center gap-1">
                              <span className="material-symbols-outlined text-[16px]">apartment</span>
                              {lesson.location}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2 min-w-[100px]">
                            <span
                              className={`text-xl font-bold ${
                                lesson.available ? 'text-white' : 'text-text-sub line-through'
                              }`}
                            >
                              ${lesson.price}
                            </span>
                            <button
                              className={`w-full py-2 px-4 ${
                                lesson.available
                                  ? 'bg-white text-background-page hover:bg-primary hover:text-white'
                                  : 'bg-zinc-900 text-white/50 cursor-not-allowed'
                              } font-bold text-sm rounded-lg transition-all`}
                              disabled={!lesson.available}
                            >
                              {lesson.available ? 'Book Spot' : 'Sold Out'}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                    View Full Schedule <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-surface border border-zinc-800 rounded-2xl p-12 text-center">
                <p className="text-text-sub text-lg">No upcoming classes scheduled at the moment.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-background-page py-12 mt-auto">
        <div className="max-w-[1280px] mx-auto px-6 text-center text-text-sub text-sm">
          <p>© 2023 Ritmo Dance Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
