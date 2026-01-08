import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

// 실제 프로덕션에서는 DB나 API에서 가져와야 함
const instructors = [
  {
    id: 'marco-rivera',
    name: 'Marco Rivera',
    username: '@marco_salsa',
    location: 'Miami, FL',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALfcV1HSBW8aV6HCruqHIlEm75lgxBsvHVtcuR-sDlzD5NMpMTp0hk4klTQsF4aK1WjNHiT6XFNCujMWs3XcXsdanFkC0idfrILP4ppF9Z3TcjNSSSn_B7EVC6XPptSsVHrW7KLwlVgaM730be3U2ZSMFgHIEequq0q_2wKo78NtNdKoShtP4KeHQB66R5IVYklfTOHn-3BeEWNbx5RAPHgsBYiKyC5f2GlO9YNTkfk1ERjc_5Mt_oNqgidCjTgcA3R4V8grVvXis',
    role: 'Instructor',
    specialties: ['Salsa On2', 'Bachata'],
    stats: {
      classes: 42,
      students: 1200,
      learning: 15,
    },
    lessons: [
      {
        id: '1',
        title: 'Intermediate Salsa On1',
        status: 'Upcoming',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnp2ZeBZX1TU-6qzA0KYzhE09Vw6Mlv_J1HnMn7xkcLaMwdQZ1SiXmNrCVzzjJGg5bAqmRj0eBvmzU9DPKEUexECSi7kfI_jsX-4of_Mr_i0zZW59rNL5_ltTVKYN-pLJYoMvajQThOxy9KcDVVACYeBSaQXThvIJsBtI9CgjrWfyUQERW0oIKv-SCqC9rxZqTMLJdVy4UC9Vx3k6cuUk2AsmoKKvdbPTAYSaqmEJaxzrwT3xeiSFniV4cwX3OwIxVr1z0XXNx6IU',
        date: 'Mon, Oct 24',
        time: '19:30 - 20:30',
        location: 'Dance Fusion Studio, Room A',
        enrolledCount: 15,
      },
      {
        id: '2',
        title: 'Bachata Sensual Basics',
        status: 'Completed',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt9TJQJDWoa4YarPbNGRpQ-LHQAiYnaFR9yoNp18Mf3wiM6MyAbYQIuDJZ4GmquyA5LqJ3m9FgUA2YKDpz882tgTkTu_nNgv2F5UPrM6lsyHB19sLQ12aSaXw6HB8fzMEhLBWSf7jKp3nNkmM9xG_wtqrkHTyPs_ku6sV-It1k4Jfvi5jJ0t2wbLpNg5te8psvMBdyr1Cl-6Qs5D4VfWw-63bNHn6vnRuiBpx9YC3C-93VFK1wfPZBsuafpU3Szfv0mHB1osneYyQ',
        date: 'Wed, Oct 19',
        time: '18:00 - 19:00',
        location: 'Dance Fusion Studio, Room B',
        enrolledCount: 20,
      },
    ],
    learningSchedule: [
      {
        id: '1',
        title: 'Cuban Salsa Styling',
        date: 'Fri, Oct 28',
        time: '20:00',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARUoiYhF7g4gDQ0tUWcATIPjhgvSiy8qTPJ1gDiBl69kcjlono5qIZh0tpnfdyfsEXub0iHSL5FyuLysEa1k8HSEpj1Hf0IlLruh31HtWuKj0uJSCNRa_t3WOdURj2Bfy2ukhEem_wKUwN015zSa6uNZPlwgQwxfRBuFLN6jIKRqzzWicKzDi0opVAXJCSsB9ZyRBHPXDdJnq56Egj0mOvFgiKHGLRDRJ--mq2RVUwesEF4zcnU8P1lfRW3GzHVWxOXAeCUhMUN8Y',
        instructorName: 'Instr. Alejandro',
        instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRwMkEL-zX__mwnaAxzAxr_lKCt7QXUuUwjSNw0yan8zW1ffl5MaLCLii_S524OU_QaTTv9Um-hUKNEeDAV6vFWpUYaq6Hn5wdiFxLzDZMmjcjBvfufbnZn5GgEEc78zH7yxbacp1rTj-c1FBmHCc4zMZWneYaYJhAf74MEv5gCgJVOiEQWRZ6MZ-QB0cO7V62tqjMn7K_iMlBNSMMJb0BORLKxfvpMogEo65q39YYoNRtRdrUTjAvlcfYuOgaAgsa8z6-7kgX-9A',
        status: 'upcoming',
      },
      {
        id: '2',
        title: 'Musicality Workshop',
        date: 'Sat, Oct 15',
        time: '14:00',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdP7q7-Tmfw-I3FUFbiO0a4fU0MmFj9Lk94UqwxYMK8o6bB5kMsCoLKV414HNzCrOPbwRR20c5X1AOksyhU3iYv4ucoXASoO4KOKcbvoYHbcQDjjh3vAT5VXwJrjE2B-8zTiwne-_L-JTmj7ze9HWee3QIWT4srtyPaSAHYaLXh_wzhdQmq1L2RwmWIUN_lubfgnAi_Vsi4VNIMfLLHmQLU0UiDcZp_DBilSGFvAfS9M510IKw2sIOlBlrPaunQ6vvAKQovxP7IEg',
        instructorName: 'Instr. Maria',
        instructorImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlWEo7NwtCOjrKWplff_1HmdWI3PPBsYDxegZSiWmf1ocPcnSYJpR3nkZxpuHL1U3h2DQbt6oAV7jNBfjRGkvewVHOq1BlWnCCjAFpODymerNUNKjWj0wrmIGfudBusdkmmyOk9jOKwIUPg4pjwt2gge749Ws_E5IGrVl_SQR3HvcwrH2pZnbhVn_IihGCfzESJorwZ9th8PaGnMWb8Liiq-lc4m_DaK1FlfsY3Wllxr1myjaIINjGbt0mzjT0bJXegDEK3EUPPeM',
        status: 'completed',
      },
    ],
    recentStudents: [
      {
        id: '1',
        name: 'Leslie Alexander',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALCn0MkFgicbskgtglUln2Hbpmq3aVLxlu_PDQ_gKJI80Rq_uP33HFJomCmedhPLcd3ddBaCRvuok-5VEfh-Bx8GrXf8ldwrgps50Nm8iOSfFcrywEE_lmdnkZLEN_iRAxGpv-0VD77-c64_6ZFmZRDqJbhqaY5BgxGY-qyJjYAsvBz5jqFDu1K2F_uhjVWg3tH0obBky6ya6nrwE8RD_b3PQCSmtwKAdKBJhEq9VqZh8w_1TvJX4gvEgT-ijI-XQAdDQZiRlCziU',
        lesson: 'Salsa On1',
        lastSeen: 'Last week',
        online: true,
      },
      {
        id: '2',
        name: 'Michael Foster',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWDy22jsVu4RZYvx-jTGmjKFrEp9XJyTdjuutyyQ5pOgCY978JmWqf-iHK3XHEdtNdaHRg78GXU5rSNKNEuxvSLTjJEnzCoxgOOhE1AQ0606ch_osPR_q_XNvi8xujq5v0D2hl1laFjKllYVSPvUYzhdC0Hj_YRhYOZowH9X14njmPF2wpbOHxRF--Khq6ka284rXj-fEaKeQ6cUJwhmDdtNveLlRnXVAQSVRUgW56HMWQTsjbmwdyIFxT2Jpsm4SjV_sOxW6g7yU',
        lesson: 'Bachata',
        lastSeen: 'Yesterday',
        online: false,
      },
      {
        id: '3',
        name: 'Dries Vincent',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbtUM8XdjBPxeXWKJVjI7ubF_9MLP7lFlbYK47Q9bD0dXV0lbSzNgcnoeBG81XRFSCb-as8YQ96wOJyvOSBGLUlLXVVjSYAhVuxxoExkNnbZgQt9I2mdcUGjyHXo7YWkBbaDdjMVZMRCEKbUmqIAd2pMY__rP-4inaekltGgNWi5NUFuXtpBuxEB4JPTeYglmrS2dCAt3aMtmweeDRy20UUuQdwTSDNRxI6--xNupQYIdED7oXDBgMUynmE231T4L-DPjnAO2KQBs',
        lesson: 'Salsa On1',
        lastSeen: '2 weeks ago',
        online: false,
      },
    ],
  },
  {
    id: 'elena-cruz',
    name: 'Elena Cruz',
    username: '@elena_bachata',
    location: 'New York, NY',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcfXR_Pa3dk6zhVrmAxrrDkQVedyLMc5mpwEqRcflYsUG4iXuWIjAj-WpwvOQYUwsgB-yu2Nh05hK4KNNwkmNekgEmx5IQK8Rh7QsA-vJcu1dtAyZUWfJ8U37Cmy0ERMQUR8aKKbvvyVtB_VsFloyFDTnaT7Gb9N0U-pSItyC1TsvhY41yn_cI9ycp3MI8ksDiC4E_zqdrpkxNY64RCVeKdCGckeVYveF68JKPSYIfa5ts2332I3zNtN6gktDxSoTG8Ii2v-gyY3U',
    role: 'Instructor',
    specialties: ['Bachata Sensual', 'Ladies Styling'],
    stats: { classes: 28, students: 850, learning: 8 },
    lessons: [],
    learningSchedule: [],
    recentStudents: [],
  },
  {
    id: 'leo',
    name: 'Leo Martinez',
    username: '@leo_dance',
    location: 'Los Angeles, CA',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEkWHakjfR-lXAg_eFX_FluQx364-d_cW15M-PVD1RuWDAzPL3_FgQL4aS50yVrwcpHW-aaIGoubGPCuDK9kMVIh-90C1oRr-URV_9J0Ab45reW4jj6pLtOU0gkclMCkh0iiVsxXpNGilhscB-lo6L4HePwiPNey99p4hxx3N7Y84lOEgiSrnWNAWdYp7G37lAEN-rsRYs1mZaRH3DKILqVl7pi3a4ERpvxOTjXNZ0YcGNjtu1CgEt3ljjl0Q0Nz5bWKzmyRm2CNA',
    role: 'Instructor',
    specialties: ['Bachata', 'Kizomba'],
    stats: { classes: 35, students: 950, learning: 12 },
    lessons: [],
    learningSchedule: [],
    recentStudents: [],
  },
];

export default async function InstructorProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const instructor = instructors.find(i => i.id === id);

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background-page">
      <Header />
      <main className="flex-1 w-full max-w-[1280px] mx-auto px-4 md:px-8 py-8 md:py-12">
        <section className="relative bg-surface rounded-3xl p-8 shadow-soft mb-10 overflow-hidden border border-zinc-800">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-[100px] -z-0 opacity-50"></div>
          <div className="absolute bottom-0 left-10 w-32 h-32 bg-orange-600/10 rounded-full -z-0 filter blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left w-full lg:w-auto">
              <div className="relative">
                <div
                  className="bg-center bg-no-repeat bg-cover rounded-2xl size-36 shadow-lg rotate-3 border border-zinc-800"
                  style={{ backgroundImage: `url("${instructor.imageUrl}")` }}
                ></div>
                <div className="absolute -bottom-3 -right-3 bg-surface p-1.5 rounded-full shadow-md border border-zinc-800">
                  <div className="bg-primary text-white p-1.5 rounded-full flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">verified</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">{instructor.name}</h1>
                <p className="text-text-sub font-medium flex items-center justify-center md:justify-start gap-2">
                  <span className="text-primary/90">{instructor.username}</span>
                  <span className="size-1.5 bg-gray-600 rounded-full"></span>
                  <span className="material-symbols-outlined text-[18px]">location_on</span> {instructor.location}
                </p>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
                  <span className="px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wide border border-orange-500/10">
                    {instructor.role}
                  </span>
                  {instructor.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-bold border border-white/5">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 w-full lg:w-auto">
              <div className="flex items-center justify-center lg:justify-end gap-8 md:gap-12">
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{instructor.stats.classes}</p>
                  <p className="text-xs font-bold text-text-sub uppercase tracking-wider mt-1">Classes</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{instructor.stats.students}</p>
                  <p className="text-xs font-bold text-text-sub uppercase tracking-wider mt-1">Students</p>
                </div>
                <div className="w-px h-10 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-2xl font-black text-white">{instructor.stats.learning}</p>
                  <p className="text-xs font-bold text-text-sub uppercase tracking-wider mt-1">Learning</p>
                </div>
              </div>
              <div className="flex gap-3 justify-center lg:justify-end">
                <button className="flex items-center gap-2 px-6 py-2.5 bg-transparent border border-white/20 hover:border-primary text-text-main hover:text-primary font-bold rounded-xl transition-all shadow-sm hover:shadow-md hover:bg-white/5">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                  Share
                </button>
                <button className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-orange-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40">
                  <span className="material-symbols-outlined text-[20px]">person_add</span>
                  Follow
                </button>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-8 mb-8 border-b border-white/10 px-2 overflow-x-auto">
          <a className="flex items-center gap-2 pb-4 border-b-2 border-primary text-primary font-bold whitespace-nowrap" href="#">
            <span className="material-symbols-outlined filled">school</span>
            Teaching Dashboard
          </a>
          <a className="flex items-center gap-2 pb-4 border-b-2 border-transparent text-text-sub hover:text-white font-semibold transition-colors whitespace-nowrap" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            My Schedule
          </a>
          <a className="flex items-center gap-2 pb-4 border-b-2 border-transparent text-text-sub hover:text-white font-semibold transition-colors whitespace-nowrap" href="#">
            <span className="material-symbols-outlined">groups</span>
            Students
          </a>
        </div>

        {instructor.lessons.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">local_activity</span>
                  Lessons You Teach
                </h3>
                <button className="flex items-center gap-1 text-sm font-bold text-primary hover:text-orange-400 transition-colors bg-orange-500/10 px-3 py-1.5 rounded-lg border border-primary/20 hover:bg-orange-500/20">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  Create New
                </button>
              </div>
              {instructor.lessons.map((lesson) => (
                <div key={lesson.id} className="group bg-surface p-5 rounded-2xl shadow-soft hover:shadow-lg border border-zinc-800 hover:border-orange-500/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row gap-5">
                    <div
                      className={`w-full sm:w-40 h-40 sm:h-32 rounded-xl bg-cover bg-center shrink-0 shadow-sm group-hover:scale-[1.02] transition-transform duration-500 ${lesson.status === 'Completed' ? 'grayscale group-hover:grayscale-0' : ''}`}
                      style={{ backgroundImage: `url("${lesson.imageUrl}")` }}
                    ></div>
                    <div className="flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-bold text-white group-hover:text-primary transition-colors">{lesson.title}</h4>
                          <span className={`px-2.5 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border ${lesson.status === 'Upcoming' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-white/5 text-gray-400 border-white/10'}`}>
                            {lesson.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mb-3">
                          <div className="flex items-center gap-2 text-sm text-text-sub">
                            <span className={`material-symbols-outlined text-[18px] ${lesson.status === 'Upcoming' ? 'text-primary' : 'text-gray-500'}`}>calendar_today</span>
                            <span className="font-medium text-text-main">{lesson.date}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-sub">
                            <span className={`material-symbols-outlined text-[18px] ${lesson.status === 'Upcoming' ? 'text-primary' : 'text-gray-500'}`}>schedule</span>
                            <span className="font-medium text-text-main">{lesson.time}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-text-sub sm:col-span-2">
                            <span className={`material-symbols-outlined text-[18px] ${lesson.status === 'Upcoming' ? 'text-primary' : 'text-gray-500'}`}>location_on</span>
                            <span>{lesson.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/5">
                        <div className="flex items-center gap-2 text-sm text-text-sub">
                          <span className="material-symbols-outlined text-[18px] text-primary">group</span>
                          <span className="font-medium">{lesson.enrolledCount} enrolled</span>
                        </div>
                        <button className="text-sm font-bold text-primary hover:text-orange-400 hover:underline">
                          {lesson.status === 'Upcoming' ? 'Manage Class →' : 'View Report'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-surface p-6 rounded-3xl shadow-soft border border-zinc-800">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-white">Learning Schedule</h3>
                  <a className="text-xs font-bold text-primary hover:underline" href="#">See All</a>
                </div>
                <div className="flex flex-col gap-4">
                  {instructor.learningSchedule.map((item) => (
                    <div key={item.id} className={`flex gap-4 p-3 rounded-xl hover:bg-orange-500/10 transition-colors cursor-pointer group ${item.status === 'completed' ? 'opacity-60 hover:opacity-100' : ''}`}>
                      <div
                        className={`size-14 rounded-xl bg-cover bg-center shrink-0 shadow-sm ${item.status === 'completed' ? 'grayscale' : ''}`}
                        style={{ backgroundImage: `url("${item.imageUrl}")` }}
                      ></div>
                      <div className="flex flex-col flex-1 min-w-0 justify-center">
                        <p className="text-sm font-bold text-white group-hover:text-primary truncate transition-colors">{item.title}</p>
                        <p className="text-xs text-text-sub font-medium mt-1">{item.date} • {item.time}</p>
                        <div className="flex items-center gap-1.5 mt-1.5">
                          <div
                            className="size-4 rounded-full bg-cover bg-center"
                            style={{ backgroundImage: `url("${item.instructorImage}")` }}
                          ></div>
                          <span className="text-[10px] font-bold text-text-sub uppercase">{item.instructorName}</span>
                        </div>
                      </div>
                      <div className="flex items-center self-center">
                        {item.status === 'upcoming' ? (
                          <div className="size-2 rounded-full bg-green-500"></div>
                        ) : (
                          <span className="material-symbols-outlined text-[16px] text-gray-500">check</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-5 py-2.5 rounded-xl border border-dashed border-white/20 text-sm font-bold text-text-sub hover:text-primary hover:border-primary hover:bg-orange-500/10 transition-all">
                  Find More Classes
                </button>
              </div>

              <div className="bg-gradient-to-br from-surface to-orange-900/20 p-6 rounded-3xl shadow-soft border border-zinc-800">
                <h3 className="text-lg font-bold text-white mb-5">Recent Students</h3>
                <ul className="flex flex-col gap-4">
                  {instructor.recentStudents.map((student) => (
                    <li key={student.id} className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          alt={student.name}
                          className="h-10 w-10 rounded-full object-cover ring-2 ring-surface shadow-sm"
                          src={student.imageUrl}
                        />
                        {student.online && (
                          <div className="absolute bottom-0 right-0 size-2.5 bg-green-500 border-2 border-surface rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-white truncate">{student.name}</p>
                        <p className="text-xs text-text-sub truncate">{student.lesson} • {student.lastSeen}</p>
                      </div>
                      <button className="text-gray-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-[20px]">chat</span>
                      </button>
                    </li>
                  ))}
                </ul>
                <button className="mt-5 w-full text-center text-xs font-bold uppercase tracking-wider text-primary hover:text-orange-400 transition-colors">
                  View All Students
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-surface p-12 rounded-2xl border border-zinc-800 text-center">
            <span className="material-symbols-outlined text-[64px] text-text-sub mb-4 block">school</span>
            <h3 className="text-xl font-bold text-white mb-2">No Classes Yet</h3>
            <p className="text-text-sub">This instructor hasn't created any classes yet.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
