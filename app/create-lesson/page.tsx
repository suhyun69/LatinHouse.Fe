import Link from 'next/link';

export default function CreateLessonPage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between bg-background-page/80 backdrop-blur-md px-6 py-3 lg:px-10 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-primary to-orange-600 text-white shadow-lg shadow-orange-500/20">
            <span className="material-symbols-outlined text-[24px]">music_note</span>
          </div>
          <h2 className="text-xl font-bold leading-tight tracking-tight text-white">DanceConnect</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex gap-3">
            <button className="flex h-10 px-5 cursor-pointer items-center justify-center rounded-xl text-sm font-bold text-zinc-400 transition hover:bg-zinc-800 hover:text-white">
              Save Draft
            </button>
            <div className="h-6 w-px bg-zinc-800 my-auto"></div>
          </div>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 ring-2 ring-zinc-800 shadow-md cursor-pointer hover:ring-primary transition-all duration-300"
            style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAndYbx5FG8B2UNcPGnO-sahGUpU_g2zjHO4qHnPukyrDE3IwHTt8cIIBGZHyQq-MfWh828SXHEhy_0V2K1VuESd9vDRyJgigDfqtXrZiZV_xTojp9Oo7FI7NAzV7H6loZHzmdybMdQ8jY0kPMyrehaR_wWWksm4EeHfZsI2QNPWCUgHbVG2M6ANQBodnSNRA7ovVZXQW9aVgKSL6Tm3A032lI7mqH49967coKY9c5LAiVfclK1YzmZt6L_13UnitAR49CP7XayybM")'}}
          ></div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 justify-center py-10 px-4 lg:px-8">
        <div className="flex flex-col max-w-[1100px] w-full gap-8">
          {/* Page Header */}
          <div className="flex flex-col gap-2 pb-2">
            <div className="flex items-center gap-2 text-primary font-bold text-sm tracking-wide uppercase">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Instructor Portal
            </div>
            <h1 className="text-4xl font-extrabold text-white tracking-tight">Create New Lesson</h1>
            <p className="text-zinc-500 text-lg max-w-2xl">Set up your next Salsa or Bachata class and start enrolling students today.</p>
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Sidebar - Lesson Flyer */}
            <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-0 overflow-hidden shadow-soft backdrop-blur-sm">
                <div className="p-6 pb-0">
                  <h2 className="text-lg font-bold text-white mb-1">Lesson Flyer</h2>
                  <p className="text-sm text-zinc-500 mb-4">Upload a high quality cover image.</p>
                </div>
                <div className="px-6 pb-6">
                  <div className="relative group flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-zinc-700 bg-black/20 px-6 py-12 transition-all hover:border-primary hover:bg-zinc-800/50 cursor-pointer aspect-[3/4]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative flex flex-col items-center gap-2 text-center z-10">
                      <div className="size-12 rounded-full bg-zinc-800 shadow-sm flex items-center justify-center text-primary mb-2 group-hover:scale-110 group-hover:bg-zinc-700 transition-all">
                        <span className="material-symbols-outlined text-2xl">add_photo_alternate</span>
                      </div>
                      <p className="text-white font-bold">Click to upload</p>
                      <p className="text-zinc-500 text-xs">A4 Vertical (JPEG, PNG)<br/>Max size 5MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Form Sections */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {/* Section 1: Basic Information */}
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-soft backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-primary font-bold shadow-none ring-1 ring-orange-500/20">1</div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Basic Information</h2>
                    <p className="text-sm text-zinc-500">Define the core identity of your lesson.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Lesson Title</label>
                    <input
                      className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                      placeholder="e.g., Intermediate Salsa Fusion Night"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Genre</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <label className="cursor-pointer group">
                        <input className="peer sr-only" name="genre" type="radio" defaultChecked />
                        <div className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-sm font-bold text-zinc-400 shadow-sm transition-all hover:border-orange-500/50 hover:text-white peer-checked:border-primary peer-checked:bg-orange-500/10 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary/50">
                          Salsa
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input className="peer sr-only" name="genre" type="radio" />
                        <div className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-sm font-bold text-zinc-400 shadow-sm transition-all hover:border-orange-500/50 hover:text-white peer-checked:border-primary peer-checked:bg-orange-500/10 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary/50">
                          Bachata
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input className="peer sr-only" name="genre" type="radio" />
                        <div className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-sm font-bold text-zinc-400 shadow-sm transition-all hover:border-orange-500/50 hover:text-white peer-checked:border-primary peer-checked:bg-orange-500/10 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary/50">
                          Kizomba
                        </div>
                      </label>
                      <label className="cursor-pointer group">
                        <input className="peer sr-only" name="genre" type="radio" />
                        <div className="flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 py-3 text-sm font-bold text-zinc-400 shadow-sm transition-all hover:border-orange-500/50 hover:text-white peer-checked:border-primary peer-checked:bg-orange-500/10 peer-checked:text-primary peer-checked:ring-1 peer-checked:ring-primary/50">
                          Other
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 2: Logistics & Instructors */}
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-soft backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-primary font-bold shadow-none ring-1 ring-orange-500/20">2</div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Logistics &amp; Instructors</h2>
                    <p className="text-sm text-zinc-500">Who is teaching and where is it happening?</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Instructor 1 (Lead)</label>
                      <div className="relative group">
                        <input
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 pl-11 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                          placeholder="Search instructor..."
                        />
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-zinc-600 group-focus-within:text-primary transition-colors">search</span>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Instructor 2 (Support)</label>
                      <div className="relative group">
                        <input
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 pl-11 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                          placeholder="Optional"
                        />
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-zinc-600 group-focus-within:text-primary transition-colors">group_add</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-1">
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Region</label>
                      <div className="relative">
                        <select className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-white outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm appearance-none cursor-pointer">
                          <option>Select Region</option>
                          <option>New York City</option>
                          <option>Los Angeles</option>
                          <option>Miami</option>
                          <option>Chicago</option>
                        </select>
                        <span className="material-symbols-outlined absolute right-3.5 top-3.5 pointer-events-none text-zinc-500">expand_more</span>
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Venue / Address</label>
                      <div className="relative group">
                        <input
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 pl-11 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                          placeholder="e.g. 123 Dance Studio, Brooklyn"
                        />
                        <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-zinc-600 group-focus-within:text-primary transition-colors">location_on</span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Start Date &amp; Time</label>
                      <input
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-zinc-400 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                        type="datetime-local"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">End Date &amp; Time</label>
                      <input
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-zinc-400 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                        type="datetime-local"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3: Pricing & Contact */}
              <section className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 shadow-soft backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-8 border-b border-zinc-800 pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-primary font-bold shadow-none ring-1 ring-orange-500/20">3</div>
                  <div>
                    <h2 className="text-xl font-bold text-white">Pricing &amp; Contact</h2>
                    <p className="text-sm text-zinc-500">Set your rates and payout details.</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Standard Price ($)</label>
                      <div className="relative group">
                        <span className="absolute left-4 top-3 text-zinc-500 font-semibold group-focus-within:text-primary transition-colors">$</span>
                        <input
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 pl-8 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                          placeholder="25.00"
                          type="number"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Discount Info (Optional)</label>
                      <input
                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                        placeholder="e.g. Early bird $20 until Friday"
                      />
                    </div>
                  </div>
                  <div className="h-px bg-zinc-800 my-2 w-full"></div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-200 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-orange-500">account_balance</span>
                      Bank Account Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 rounded-xl bg-black/40 border border-zinc-800">
                      <div>
                        <label className="text-xs uppercase tracking-wide text-zinc-600 mb-1.5 ml-1 block font-semibold">Bank Name</label>
                        <input
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                          placeholder="Bank of America"
                        />
                      </div>
                      <div>
                        <label className="text-xs uppercase tracking-wide text-zinc-600 mb-1.5 ml-1 block font-semibold">IBAN / Account Number</label>
                        <input
                          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                          placeholder="XXXX XXXX XXXX XXXX"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-200 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-orange-500">contact_page</span>
                      Contact Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Contact Email</label>
                        <div className="relative group">
                          <input
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 pl-11 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                            placeholder="hello@dance.com"
                            type="email"
                          />
                          <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-zinc-600 group-focus-within:text-primary transition-colors">mail</span>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-zinc-400 mb-1.5 ml-1 block">Phone Number</label>
                        <div className="relative group">
                          <input
                            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 pl-11 text-base text-white placeholder-zinc-600 outline-none transition-all duration-200 ease-in-out focus:border-primary focus:bg-black focus:ring-1 focus:ring-primary shadow-sm"
                            placeholder="+1 (555) 000-0000"
                            type="tel"
                          />
                          <span className="material-symbols-outlined absolute left-3.5 top-3.5 text-zinc-600 group-focus-within:text-primary transition-colors">call</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sticky Bottom Action Bar */}
          <div className="sticky bottom-6 z-40 mx-auto w-full max-w-[1100px]">
            <div className="rounded-2xl border border-zinc-700/50 bg-zinc-900/90 backdrop-blur-lg p-4 shadow-2xl shadow-black/50 flex justify-between items-center ring-1 ring-white/5">
              <div className="flex items-center gap-2 text-sm text-zinc-500 pl-2 hidden sm:flex">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Changes saved automatically
              </div>
              <div className="flex gap-3 w-full sm:w-auto justify-end">
                <button className="flex h-12 w-full sm:w-auto min-w-[100px] cursor-pointer items-center justify-center rounded-xl bg-zinc-800 px-6 text-sm font-bold text-zinc-300 transition hover:bg-zinc-700 hover:text-white border border-zinc-700 shadow-sm">
                  Cancel
                </button>
                <button className="flex h-12 w-full sm:w-auto min-w-[160px] cursor-pointer items-center justify-center rounded-xl bg-primary px-8 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 hover:scale-[1.02] active:scale-[0.98]">
                  Publish Lesson
                </button>
              </div>
            </div>
          </div>
          <div className="h-10"></div>
        </div>
      </div>
    </div>
  );
}
