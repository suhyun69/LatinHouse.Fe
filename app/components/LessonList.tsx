import LessonCard from './LessonCard';

const genres = [
  { id: 'all', label: 'All Genres', icon: 'music_note', active: true },
  { id: 'salsa-on1', label: 'Salsa On1', active: false },
  { id: 'salsa-on2', label: 'Salsa On2', active: false },
  { id: 'bachata-sensual', label: 'Bachata Sensual', active: false },
  { id: 'bachata-dominicana', label: 'Bachata Dominicana', active: false },
  { id: 'kizomba', label: 'Kizomba', active: false },
];

const lessons = [
  {
    title: 'Intermediate Salsa Partnerwork',
    genre: 'Salsa On2',
    price: 20,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-MqFA4-2239uM1kPoypjF4C4GgMaQuOx9pS2iVlxsuNDoSFSikHdNgk2-7ThWGVXOkfI9bmCe4eS04_4AHhwspImIzS4JdGR4j9I0hQgpagdueDKu501EUsplLMt3TkxsPdn6Uae1hea--S6wHGMr50cAU87RwoxxAKbM_5XEhUkYhjxnhbRRfL_ANI7RFUdtSasAMyV7FIFI5rUOkGAPuQSD8UVU-DSe4ZeBm2gT-F0iNkBm5XDj9SiPRu4iLbv3mfxLwWLg4fE',
    instructors: [
      { name: 'Diego', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEfJ2PHz3Ztyy83SCfHk6naOG_bQ5QHmalkedT7Sgqank5InEb3blPG4ZGjMfd-x6QEwCmM8nardAzAfHGdPbfJnWZtO38a1mZA5aV86C610uxfszT05r6Af588ugufv7P6NtOLCNk0vl28wIgPPqKjaSEYyptj4Tk-5KNN6ujKULIl_gA0Hw-mCtQ7nTtFLj9h_v2sFu0cKHcrbJR--5qQvcYrekPUmWsdb6nQl_ny_OkbyWenapYppY4i1zyuVDQSAHk9Bkva38' },
      { name: 'Maria', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV2w1ydNETaIsyHcKkNCp3GeT6tuPhLxjNEE4SX5hnNQ7Olt0hqAEI0t4g8f13uHA5F6bzXNBkH2O-_FFPnKCHKsdBxMCRrbrW-Ry9bK19AdgvPjC28up5rOIdxvfsaO4-6L_kj2SgJzD4xDUm6jasY6EdUOUl9JadoddjQ5GWyT55fsLV-CVwb63TEPhqJ5RUemmRSJgcYqKpUS-lmC6NdCvHIcSNgIZjrjkD5p90dYZ85_RxqBsLMUeKtfh36XHmXzm0WCWG0v8' },
    ],
    location: { studio: 'Empire Dance Studio', city: 'Manhattan, NY' },
    date: { day: 'Fri, Oct 24', time: '7:00 PM - 9:00 PM' },
  },
  {
    title: 'Sensual Bachata Masterclass',
    genre: 'Bachata',
    price: 25,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzZDC2JjVAvUDC0Ug1RfBt51BiLr6DCnzIVXwS9U7LxM01gSEmOk9_ojQsKTBa0i1jqt_LCs2Gfhq2CklcTxCLlKIzohGcJOkI_OYWQupXaHjtHJlQ02_bpOpDuC0jVJBI3dAK3Z2ahiue3fte0KShxPJnrS1rSW2IXqq6c_FB4qJCNq9wMQr1msmgGPfg0XLg8Ppd7r--svgtupoNQFgZAiuTz4qEkIvvYSqJzxKQPfG--cQ4U0w1xMZGceblnHtFA4eT4PEdVl4',
    instructors: [
      { name: 'Leo', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEkWHakjfR-lXAg_eFX_FluQx364-d_cW15M-PVD1RuWDAzPL3_FgQL4aS50yVrwcpHW-aaIGoubGPCuDK9kMVIh-90C1oRr-URV_9J0Ab45reW4jj6pLtOU0gkclMCkh0iiVsxXpNGilhscB-lo6L4HePwiPNey99p4hxx3N7Y84lOEgiSrnWNAWdYp7G37lAEN-rsRYs1mZaRH3DKILqVl7pi3a4ERpvxOTjXNZ0YcGNjtu1CgEt3ljjl0Q0Nz5bWKzmyRm2CNA' },
      { name: 'Kat', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAt6PzfdLnbMqIOGfTD4XXE81dgsQjb09GXnSxde1IG2m5bXodDhiZxcR5YUqnqoPCBKqv33RHSTNbDSXdPukf2SR5k8jFzfrFkTGQkGuSRHwbVU--9Il62lK_oEuWMyBycfCTKvljxa_prQZ8PzFUZDVSX8Ms0NK_qmf0i-IQ741-jFqdtm5l3Kk7QriNiHvY_kSDuyRuvD_2rCHZsnqWrb6P0ypaOjk2Gwc4SxqxIHg7oBN8Hmg4GpvEaPIqjsokX3dq1WHjNr7s' },
    ],
    location: { studio: 'The Loft BK', city: 'Brooklyn, NY' },
    date: { day: 'Sat, Oct 25', time: '2:00 PM - 5:00 PM' },
  },
  {
    title: 'Ladies Styling & Movement',
    genre: 'Styling',
    price: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMfXEQTh9J9wX1tO9a43M2f-tlQzVTeRDWHVysuEhTIWXsejf3VtyFqGjy2FVAbHygVRCQZmJDqUfayyOIsgY28K1PH8RyrPY30EG67c5Le0QwzMFU0dfBlZEUAMzqjv4dNFH9qUww6f2BvRM8UOJYwfHvSsE8ShFwIDJDJ2i9sn0ZO2696FccfuQ50pqc-o5A9B7j3nBNwVrPCVqSNzcWEYtXpq6m_VhHaiGBFDRMn-bsV5G8-wLOyK09B7bP2SrgNMKvbBWGE6g',
    instructors: [
      { name: 'Sofia', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz6cDqHhuCnymiWT_5qaoh_dHGjQZyzZbaQZ7bRWH7h4Czd5YWYPpnoiBZGOwMY_dr1F4hXRGfzAQnE_dTKsroBEq5_y8wIXze6MRDUPsKJwDK6tIEF74_tuyyGYMCqCy0gBWFh0UEPMzedhUb-mHy4Q4i-YfKibYaiPUgZd5s9gf_EeZ9-hj3JMq0PcLTw5GGsD_GRZg3DDtnA1ZhDD7mAlCYl6Mt_zgjCNhUPeffJSZVAaK9h59MjbdQn-TKFbnXumJmmrrU_LM' },
    ],
    location: { studio: 'Pearl Studios', city: 'Manhattan, NY' },
    date: { day: 'Sun, Oct 26', time: '11:00 AM - 12:30 PM' },
  },
  {
    title: 'Beginner Salsa Bootcamp',
    genre: 'Salsa On1',
    price: 20,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCMKpJ7ltoZgJleo_V-MIjZEqPFJEx_Pc_1FcDi3PJu6SbkRsWhDhdUuAoNGz-r6pcM3BDXlSA8dbeW7A_SifzrsRP1DV0JOFwZuzRCC2oBUjf7I1hDxbk8ezt5zwt1Qg0IqeVXaCImQ2Q7LPnBB1o_bbfAz4oNV8pwFnHWrMq2BHWHQoOXYm20wOCkDZm-nvfky0twq_L1fvWAw14IxFC7RYXEGQUyRB94sJP4BLbJE8DeFj8spijNhUYOPgTjmtFevS_BNvfkG4E',
    instructors: [
      { name: 'Carlos', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Bj2xrccfoQ1c9yTyv8gjBnAGSg4ssBYPLIEbqI2Yo6ho6eQPPI8FlXl0mzmO1NA8seEGxejZsf8qN3mIhkprjk_h2PSyetRRDF_Mc3a7aJVjx5FzbDi21hRa3SCwjZ2foONSVg5ZcnPrY_cml6ItOoRKpeczd2_2ZMc2Bsy6fjUGIV7gCJ63C8Ju3Fy4P6kO9u2ghpn1I-pH3bRFKnXecKzI9EMQ3RNjJCr3adCpecBB8s_MUh1xCTrSpYk9psGj796PLfxWV6o' },
    ],
    location: { studio: 'Latin Fever Studio', city: 'Queens, NY' },
    date: { day: 'Mon, Oct 27', time: '6:30 PM - 8:30 PM' },
  },
  {
    title: 'Intro to Zouk Flow',
    genre: 'Zouk',
    price: 22,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9a_j2kqu20aM6yGe7cfidZgDezFFcC-ZCj7BZIlLyRAgEMtDX_JGOGw8YrQnuYqG6SzaEX0FqfWRRzxLplwgDyMFmHhfRxHDF0kmztyfpBk9XwIxtgSEpI38-YktS3ph-GMR7Eh-mIZksymeI7eSADD0yNT8sX7cJCtCuqQh1s5X5JBANuxNRW1PAkCOkdPYMp-4rjAN7I2P88IarAgmjQ5O1VIIpQy9ePXC1M65x-2jUGhgKhoSmAu78ILG2di8lRIkd-2AAywQ',
    instructors: [
      { name: 'Alex', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDS4DSp9s7zckivx74CWczkZ8Ad8YTbZUFrVL3ZLMfRIeu4XuLLSg_ppb7HwEjwi8U-FTCUhTqRg7uidjHhI6WRnhbvGa4Ys-5a0---R3OPIfuwL08UDLn0hWDeUgrSFR_RRfLksrulH-Ns552qiUkcaQVkhrpDdMwXX38Hh3rGUPjOUrHTTs9Dx_T1ZUjB6qHSb5Mq0NW-mOEXzOZsHW5EY60QgrTRkCO3KRwy7QDCuaSNPrjJncrvihVQXK8t8_sVFtU77YslSdY' },
      { name: 'Sarah', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTadEvueGaqhY5E1ZmzPDeBO0eZWyfIDGGNDTv4G7rWJiW6GqXFzvTKPSbkLeDfHl-F2e36DLEUPpJcAr_Zw1aEuafLLrmjFf3he6rUCw4Pt5aqsrGjah-SC5TkQyDeSohuENMyba4ESo-tWTNcsxLImhRPjgClNUgUu1UUWYMk92OiQXEjDoum8f7Sv8wl41jfBSk73KydiRiXu_h61NLhmhlXS03v6E1b3qmYdTagStckdk9IB7g5ZGaBHw_O4Iqha8Kv_AxryE' },
    ],
    location: { studio: 'Motion Arts Center', city: 'Jersey City, NJ' },
    date: { day: 'Tue, Oct 28', time: '8:00 PM - 9:30 PM' },
  },
  {
    title: 'Advanced Shines & Footwork',
    genre: 'Salsa On2',
    price: 10,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASIIjPy-FaywO9lDUm8Kh-gxhASr78JNfbgk6dPAX3Kwq833HK8Q5xtQbNsU1kyRSv7g-7DvDjkKbPuLAqf8LSOiPr27u2iL8g5GoYzaZfeAfrpRJ8KJ_H8KS3rh_o1-8QrFAA72-1uvVuaPwpkxUYkpBnxWSbJHpVFmcjg9-3neHASqswW0MQobyHa_7yqKZyCCzZCalWchPEt0FsDlI3js4plvwUWc5isVnMMfJB87KJgpSUnLtKpMiOwmCYRf1v3rtaYwA14oM',
    instructors: [
      { name: 'Marco', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR11VK2nU3EPRlHT6fYLDTOvZ6sBrdJ9loPPzVH1t3pnFJqrdPSuQaA_vj7tSYnQbm0SlVOspCrAtmBwmCRqFC4rB292CiGXrRbWObSAc2DuuFLc-Cj9yIhJAh0nfZPdKA0802zDOJo6Y_4PBcarHvyXLQ5WpW9RiH8_CBPsZKf6vQP0eznHGc8JMxgHVK-3bBbv9kJBWc7x7H9Xo7ycDf69h8n9fVcs8yoYsMZR-_58xpUXzEW8relbFNXCTPdMEa_awT1BfrcMI' },
    ],
    location: { studio: 'Yamulee Studio', city: 'Bronx, NY' },
    date: { day: 'Wed, Oct 29', time: '7:00 PM - 8:30 PM' },
  },
];

export default function LessonList() {
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
          {lessons.map((lesson, idx) => (
            <LessonCard key={idx} {...lesson} />
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
