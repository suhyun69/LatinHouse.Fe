import Link from 'next/link';
import { getLessonById } from '@/lib/api';

export default async function CheckoutPage({ params }: { params: Promise<{ lessonId: string }> }) {
  const { lessonId } = await params;
  const lesson = await getLessonById(lessonId);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const serviceFee = 2.0;
  const total = lesson.price + serviceFee;

  // 첫 번째 장르와 첫 번째 강사 사용
  const primaryGenre = lesson.genres[0] || 'Dance';
  const primaryInstructor = lesson.instructors[0];

  return (
    <div className="font-display bg-background-page text-text-main min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-surface/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">local_fire_department</span>
            </div>
            <h2 className="text-text-main text-lg font-bold leading-tight tracking-tight">Salsa &amp; Bachata Studio</h2>
          </div>
          <div className="flex items-center gap-2 text-text-sub bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Secure Checkout</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 lg:px-10 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column - Booking Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-text-main text-3xl font-extrabold leading-tight tracking-tight">Your Booking</p>
              <p className="text-text-sub text-base font-medium">Review your lesson details below.</p>
            </div>
            <div className="bg-surface rounded-2xl overflow-hidden shadow-soft border border-zinc-800 group hover:border-primary/50 transition-colors duration-300">
              <div className="w-full aspect-video bg-cover bg-center relative" style={{ backgroundImage: `url('${lesson.imageUrl}')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <div className="flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 shadow-sm border border-white/10">
                    <span className="material-symbols-outlined text-primary text-sm">music_note</span>
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">{primaryGenre}</span>
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-md px-3 py-1 shadow-sm border border-white/10">
                    <span className="material-symbols-outlined text-primary text-sm">star</span>
                    <span className="text-white text-[10px] font-bold uppercase tracking-wider">{lesson.level}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white text-2xl font-bold leading-tight drop-shadow-lg">{lesson.title}</h3>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-6">
                <div className="flex items-center gap-4 pb-6 border-b border-dashed border-zinc-800">
                  <div
                    className="bg-center bg-no-repeat bg-cover rounded-full size-14 ring-2 ring-primary ring-offset-2 ring-offset-surface"
                    style={{ backgroundImage: `url("${primaryInstructor.imageUrl}")` }}
                  ></div>
                  <div>
                    <p className="text-primary font-bold text-xs uppercase tracking-wide mb-0.5">Instructor</p>
                    <p className="text-text-main text-lg font-bold">{primaryInstructor.name}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-text-sub">
                      <span className="material-symbols-outlined text-[20px] text-primary">calendar_today</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Date</span>
                    </div>
                    <p className="text-text-main text-sm font-semibold pl-7">{lesson.date.day}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-text-sub">
                      <span className="material-symbols-outlined text-[20px] text-primary">schedule</span>
                      <span className="text-xs font-bold uppercase tracking-wide">Time</span>
                    </div>
                    <p className="text-text-main text-sm font-semibold pl-7">{lesson.date.time}</p>
                  </div>
                </div>
                <div className="bg-zinc-900/50 rounded-xl p-4 flex gap-4 items-start border border-zinc-800">
                  <div className="size-10 rounded-full bg-zinc-900 flex items-center justify-center text-primary shadow-sm flex-shrink-0 border border-zinc-800">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div className="flex-grow">
                    <p className="text-text-main text-sm font-bold">{lesson.location.studio}</p>
                    <p className="text-text-sub text-xs leading-relaxed mt-0.5">{lesson.location.address}</p>
                  </div>
                  <div
                    className="size-12 rounded-lg bg-center bg-cover bg-no-repeat shadow-inner border border-zinc-800 opacity-80 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer"
                    style={{ backgroundImage: `url('${lesson.location.mapUrl}')` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-surface rounded-2xl p-6 lg:p-8 shadow-soft border border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-orange-700"></div>
              <h3 className="text-text-main text-xl font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">receipt_long</span>
                Order Summary
              </h3>
              <div className="flex flex-col gap-3 mb-8">
                <div className="flex justify-between items-center text-text-main">
                  <span className="text-sm font-medium">{lesson.title} Ticket</span>
                  <span className="font-bold">${lesson.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-text-sub">
                  <span className="text-sm">Service Fee</span>
                  <span className="font-medium">${serviceFee.toFixed(2)}</span>
                </div>
                <div className="py-4">
                  <div className="flex gap-2">
                    <input
                      className="flex-1 bg-zinc-900 border border-zinc-800 text-text-main rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600 shadow-sm"
                      placeholder="Promo Code"
                      type="text"
                    />
                    <button className="bg-zinc-900 hover:bg-zinc-700 text-text-main border border-zinc-800 px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">
                      Apply
                    </button>
                  </div>
                </div>
                <div className="h-px bg-zinc-800 my-2"></div>
                <div className="flex justify-between items-end mt-2">
                  <span className="text-lg font-bold text-text-main">Total</span>
                  <span className="text-4xl font-extrabold text-primary tracking-tight">${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="space-y-6">
                <h4 className="text-text-main text-lg font-bold flex items-center gap-2 mt-8">
                  <span className="material-symbols-outlined text-primary">credit_card</span>
                  Payment Details
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <label className="cursor-pointer group">
                    <input className="peer sr-only" name="payment_method" type="radio" defaultChecked />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary text-text-sub hover:border-primary/50 transition-all">
                      <span className="material-symbols-outlined mr-2 text-[20px]">credit_card</span>
                      <span className="text-sm font-bold">Card</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="peer sr-only" name="payment_method" type="radio" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary text-text-sub hover:border-primary/50 transition-all">
                      <span className="text-sm font-bold">PayPal</span>
                    </div>
                  </label>
                  <label className="cursor-pointer group">
                    <input className="peer sr-only" name="payment_method" type="radio" />
                    <div className="h-12 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:text-primary text-text-sub hover:border-primary/50 transition-all">
                      <span className="text-sm font-bold">Apple Pay</span>
                    </div>
                  </label>
                </div>
                <div className="space-y-5 bg-zinc-900/30 p-5 rounded-xl border border-zinc-800">
                  <div>
                    <label className="text-xs font-bold text-text-sub uppercase tracking-wide mb-1.5 block">Cardholder Name</label>
                    <input
                      className="w-full bg-zinc-900 border border-zinc-800 text-text-main rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600 shadow-sm"
                      placeholder="e.g. Mateo Rodriguez"
                      type="text"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-text-sub uppercase tracking-wide mb-1.5 block">Card Number</label>
                    <div className="relative">
                      <input
                        className="w-full bg-zinc-900 border border-zinc-800 text-text-main rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600 shadow-sm"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                      />
                      <span className="material-symbols-outlined absolute right-3 top-3 text-zinc-500">credit_card</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-text-sub uppercase tracking-wide mb-1.5 block">Expiry Date</label>
                      <input
                        className="w-full bg-zinc-900 border border-zinc-800 text-text-main rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600 shadow-sm"
                        placeholder="MM / YY"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-text-sub uppercase tracking-wide mb-1.5 block">CVC</label>
                      <div className="relative">
                        <input
                          className="w-full bg-zinc-900 border border-zinc-800 text-text-main rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600 shadow-sm"
                          placeholder="123"
                          type="text"
                        />
                        <span className="material-symbols-outlined absolute right-3 top-3 text-zinc-500 text-[20px]">help</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 flex flex-col gap-4">
                <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold h-14 rounded-xl text-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 group border border-orange-600">
                  <span>Confirm &amp; Pay ${total.toFixed(2)}</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <p className="text-center text-xs text-text-sub flex justify-center items-center gap-1.5">
                  <span className="material-symbols-outlined text-emerald-500 text-sm">lock</span>
                  SSL Encrypted Transaction. 100% Satisfaction Guaranteed.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link href={`/lessons/${lessonId}`} className="text-sm font-semibold text-text-sub hover:text-primary transition-colors">
                Cancel and return to schedule
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
