// Lesson 타입 정의
export interface Lesson {
  id: string;
  title: string;
  genres: string[];
  level: string;
  description: string;
  price: number;
  imageUrl: string;
  instructors: {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
  }[];
  location: {
    studio: string;
    address: string;
    city: string;
    mapUrl?: string;
  };
  date: {
    day: string;
    time: string;
  };
  tags: string[];
  bankDetails: {
    bankName: string;
    accountName: string;
    accountNumber: string;
  };
}

// Mock 데이터 (실제 프로덕션에서는 DB나 API에서 가져와야 함)
export const lessonsData: Lesson[] = [
  {
    id: '1',
    title: 'Intermediate Salsa & Bachata Bootcamp',
    genres: ['Salsa', 'Bachata'],
    level: 'Intermediate',
    description: 'Master the fluid turns, musicality, and connection in this intensive weekend workshop designed for intermediate dancers looking to level up.',
    price: 45,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7eqZzEbzAcsy__oad5yCC6SiK5KBY1ni5QfdJGHlQjB21tE3CucaoMR9BVpMfkwExlpvN1bpBNeYfrhsoIXHhv3u9WX5xAIz8o7EUbWmWpCUmXE3bvNG8k1OAjPraoE1zLOnJHwy1ER8IzH_d0npXFQo903jewpgcpUoC8CheZ0vbLCxv--WByYv7nXabPwU2mzQtXRVZlwlQpabprf6fbt_Fy3hXN4SkG0OnFamo3vrEy68fryjkfMOSY91K2V4LCwHd40y14Go',
    instructors: [
      {
        id: 'marco-rivera',
        name: 'Marco Rivera',
        role: 'Lead Instructor (Salsa)',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUZA_nUqB8X9IwCkQhATa6ybKFuDp329kCoYTSBMHyCTd6cPulFs9TtlfRfuCVDs-3zMSskWEBWvobpRmfvS0SWtBOJvgwLblpbc0xLFy-qQjVvntQwbrlMlJiPufjpk1txjYZw_nzLNxyzsu-uOoLBeVAKheUQp1v-cII2WP19Yz8HkgaMaJUtXZSiHcP6ZHHfUq99aCdF6qrK9YFIq2rD1n-ni7NgRR0lO_6xKZiCYu1aMBwQlhaTHvLShUsrHYTRGVYVq9iO84'
      },
      {
        id: 'elena-cruz',
        name: 'Elena Cruz',
        role: 'Assistant (Bachata)',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcfXR_Pa3dk6zhVrmAxrrDkQVedyLMc5mpwEqRcflYsUG4iXuWIjAj-WpwvOQYUwsgB-yu2Nh05hK4KNNwkmNekgEmx5IQK8Rh7QsA-vJcu1dtAyZUWfJ8U37Cmy0ERMQUR8aKKbvvyVtB_VsFloyFDTnaT7Gb9N0U-pSItyC1TsvhY41yn_cI9ycp3MI8ksDiC4E_zqdrpkxNY64RCVeKdCGckeVYveF68JKPSYIfa5ts2332I3zNtN6gktDxSoTG8Ii2v-gyY3U'
      },
    ],
    location: {
      studio: 'Dance Fusion Studio',
      address: '123 Rhythm Ave, Brooklyn',
      city: 'New York Region',
      mapUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlGXMWuL8vsRWvgpxiQvaVcqicQXEr5NDiXM_Rrv0XNotoixRfHeLYLms7lL18RuNuwAVPmaMeSN98y3-djBwypExQOZfnaZTS06e8leSXVYQ2zBrD82OqCEq7OKMxH1RagVGFA_alKO88wmBrx5sMOr4OEy1b7xdYXAEZOTmHfSMbtwBkoUqlpuRaxS98YaN3U3YO89q9mQtr4vpSUwpgx2mcWQa6OX-nqhYo5U3pEXumNLbrxkCuF5KzsDBic-CB-jPWQgbauZk',
    },
    date: {
      day: 'Sat, Oct 28, 2023',
      time: '14:00 - 18:00 (4 Hours)',
    },
    tags: ['Early Bird (-10%)', 'Group Discount Available'],
    bankDetails: {
      bankName: 'Chase Bank',
      accountName: 'Latin Dance Hub LLC',
      accountNumber: 'US12 3456 7890 1234 5678',
    },
  },
  {
    id: '2',
    title: 'Sensual Bachata Masterclass',
    genres: ['Bachata'],
    level: 'Intermediate',
    description: 'Deep dive into sensual bachata techniques and styling.',
    price: 25,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBzZDC2JjVAvUDC0Ug1RfBt51BiLr6DCnzIVXwS9U7LxM01gSEmOk9_ojQsKTBa0i1jqt_LCs2Gfhq2CklcTxCLlKIzohGcJOkI_OYWQupXaHjtHJlQ02_bpOpDuC0jVJBI3dAK3Z2ahiue3fte0KShxPJnrS1rSW2IXqq6c_FB4qJCNq9wMQr1msmgGPfg0XLg8Ppd7r--svgtupoNQFgZAiuTz4qEkIvvYSqJzxKQPfG--cQ4U0w1xMZGceblnHtFA4eT4PEdVl4',
    instructors: [
      {
        id: 'leo',
        name: 'Leo Martinez',
        role: 'Lead Instructor',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEkWHakjfR-lXAg_eFX_FluQx364-d_cW15M-PVD1RuWDAzPL3_FgQL4aS50yVrwcpHW-aaIGoubGPCuDK9kMVIh-90C1oRr-URV_9J0Ab45reW4jj6pLtOU0gkclMCkh0iiVsxXpNGilhscB-lo6L4HePwiPNey99p4hxx3N7Y84lOEgiSrnWNAWdYp7G37lAEN-rsRYs1mZaRH3DKILqVl7pi3a4ERpvxOTjXNZ0YcGNjtu1CgEt3ljjl0Q0Nz5bWKzmyRm2CNA'
      },
    ],
    location: {
      studio: 'The Loft BK',
      address: 'Brooklyn',
      city: 'New York',
      mapUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlGXMWuL8vsRWvgpxiQvaVcqicQXEr5NDiXM_Rrv0XNotoixRfHeLYLms7lL18RuNuwAVPmaMeSN98y3-djBwypExQOZfnaZTS06e8leSXVYQ2zBrD82OqCEq7OKMxH1RagVGFA_alKO88wmBrx5sMOr4OEy1b7xdYXAEZOTmHfSMbtwBkoUqlpuRaxS98YaN3U3YO89q9mQtr4vpSUwpgx2mcWQa6OX-nqhYo5U3pEXumNLbrxkCuF5KzsDBic-CB-jPWQgbauZk',
    },
    date: {
      day: 'Sat, Oct 25',
      time: '2:00 PM - 5:00 PM'
    },
    tags: [],
    bankDetails: {
      bankName: 'Chase Bank',
      accountName: 'Latin Dance Hub LLC',
      accountNumber: 'US12 3456 7890 1234 5678'
    },
  },
  {
    id: '3',
    title: 'Salsa On1 Fundamentals',
    genres: ['Salsa'],
    level: 'Beginner',
    description: 'Learn the basics of Salsa On1 timing and fundamental patterns.',
    price: 20,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnp2ZeBZX1TU-6qzA0KYzhE09Vw6Mlv_J1HnMn7xkcLaMwdQZ1SiXmNrCVzzjJGg5bAqmRj0eBvmzU9DPKEUexECSi7kfI_jsX-4of_Mr_i0zZW59rNL5_ltTVKYN-pLJYoMvajQThOxy9KcDVVACYeBSaQXThvIJsBtI9CgjrWfyUQERW0oIKv-SCqC9rxZqTMLJdVy4UC9Vx3k6cuUk2AsmoKKvdbPTAYSaqmEJaxzrwT3xeiSFniV4cwX3OwIxVr1z0XXNx6IU',
    instructors: [
      {
        id: 'marco-rivera',
        name: 'Marco Rivera',
        role: 'Lead Instructor',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUZA_nUqB8X9IwCkQhATa6ybKFuDp329kCoYTSBMHyCTd6cPulFs9TtlfRfuCVDs-3zMSskWEBWvobpRmfvS0SWtBOJvgwLblpbc0xLFy-qQjVvntQwbrlMlJiPufjpk1txjYZw_nzLNxyzsu-uOoLBeVAKheUQp1v-cII2WP19Yz8HkgaMaJUtXZSiHcP6ZHHfUq99aCdF6qrK9YFIq2rD1n-ni7NgRR0lO_6xKZiCYu1aMBwQlhaTHvLShUsrHYTRGVYVq9iO84'
      },
    ],
    location: {
      studio: 'Studio 88',
      address: 'Manhattan',
      city: 'New York'
    },
    date: {
      day: 'Thu, Oct 27',
      time: '7:00 PM - 8:30 PM'
    },
    tags: ['Beginner Friendly'],
    bankDetails: {
      bankName: 'Chase Bank',
      accountName: 'Latin Dance Hub LLC',
      accountNumber: 'US12 3456 7890 1234 5678'
    },
  },
  {
    id: '4',
    title: 'Bachata Footwork Workshop',
    genres: ['Bachata'],
    level: 'Advanced',
    description: 'Advanced footwork techniques and styling for experienced dancers.',
    price: 35,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDt9TJQJDWoa4YarPbNGRpQ-LHQAiYnaFR9yoNp18Mf3wiM6MyAbYQIuDJZ4GmquyA5LqJ3m9FgUA2YKDpz882tgTkTu_nNgv2F5UPrM6lsyHB19sLQ12aSaXw6HB8fzMEhLBWSf7jKp3nNkmM9xG_wtqrkHTyPs_ku6sV-It1k4Jfvi5jJ0t2wbLpNg5te8psvMBdyr1Cl-6Qs5D4VfWw-63bNHn6vnRuiBpx9YC3C-93VFK1wfPZBsuafpU3Szfv0mHB1osneYyQ',
    instructors: [
      {
        id: 'elena-cruz',
        name: 'Elena Cruz',
        role: 'Lead Instructor',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCcfXR_Pa3dk6zhVrmAxrrDkQVedyLMc5mpwEqRcflYsUG4iXuWIjAj-WpwvOQYUwsgB-yu2Nh05hK4KNNwkmNekgEmx5IQK8Rh7QsA-vJcu1dtAyZUWfJ8U37Cmy0ERMQUR8aKKbvvyVtB_VsFloyFDTnaT7Gb9N0U-pSItyC1TsvhY41yn_cI9ycp3MI8ksDiC4E_zqdrpkxNY64RCVeKdCGckeVYveF68JKPSYIfa5ts2332I3zNtN6gktDxSoTG8Ii2v-gyY3U'
      },
    ],
    location: {
      studio: 'Dance Fusion Studio',
      address: 'Brooklyn',
      city: 'New York'
    },
    date: {
      day: 'Sun, Oct 29',
      time: '3:00 PM - 5:00 PM'
    },
    tags: ['Advanced Only'],
    bankDetails: {
      bankName: 'Chase Bank',
      accountName: 'Latin Dance Hub LLC',
      accountNumber: 'US12 3456 7890 1234 5678'
    },
  },
  {
    id: '5',
    title: 'Kizomba Connection Workshop',
    genres: ['Kizomba'],
    level: 'Intermediate',
    description: 'Explore the connection and musicality in Kizomba dancing.',
    price: 30,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD__d0wI06JpxFM1X72TwVCjC8ZPU4Q2eIJv1x9_NCJGV2rEFPGF-_HpS43SsZTT4DYcHkGTiWG02vGsZprgZBTgFUYGgVx5OxL6LuN-gPo7DY2d7N5yOdvKlVQu7nPTKzGVy0vKzGqOg05q-MZBQKXHt0vR0_L1CwfqCO-LrjUPSE9qlJBVnkwmFdnCnDshzAyP7eOKwwFUzuKNH2IuuR8Yv06aKv8FgSBWmAMlvDo95OlgD2TJD12-6MoKY71CuKCMuHM',
    instructors: [
      {
        id: 'leo',
        name: 'Leo Martinez',
        role: 'Lead Instructor',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEkWHakjfR-lXAg_eFX_FluQx364-d_cW15M-PVD1RuWDAzPL3_FgQL4aS50yVrwcpHW-aaIGoubGPCuDK9kMVIh-90C1oRr-URV_9J0Ab45reW4jj6pLtOU0gkclMCkh0iiVsxXpNGilhscB-lo6L4HePwiPNey99p4hxx3N7Y84lOEgiSrnWNAWdYp7G37lAEN-rsRYs1mZaRH3DKILqVl7pi3a4ERpvxOTjXNZ0YcGNjtu1CgEt3ljjl0Q0Nz5bWKzmyRm2CNA'
      },
    ],
    location: {
      studio: 'Urban Moves',
      address: 'Queens',
      city: 'New York'
    },
    date: {
      day: 'Fri, Nov 3',
      time: '8:00 PM - 10:00 PM'
    },
    tags: [],
    bankDetails: {
      bankName: 'Chase Bank',
      accountName: 'Latin Dance Hub LLC',
      accountNumber: 'US12 3456 7890 1234 5678'
    },
  },
  {
    id: '6',
    title: 'Cuban Salsa Social Night',
    genres: ['Salsa'],
    level: 'All Levels',
    description: 'Practice your Cuban salsa moves in a friendly social environment.',
    price: 15,
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARUoiYhF7g4gDQ0tUWcATIPjhgvSiy8qTPJ1gDiBl69kcjlono5qIZh0tpnfdyfsEXub0iHSL5FyuLysEa1k8HSEpj1Hf0IlLruh31HtWuKj0uJSCNRa_t3WOdURj2Bfy2ukhEem_wKUwN015zSa6uNZPlwgQwxfRBuFLN6jIKRqzzWicKzDi0opVAXJCSsB9ZyRBHPXDdJnq56Egj0mOvFgiKHGLRDRJ--mq2RVUwesEF4zcnU8P1lfRW3GzHVWxOXAeCUhMUN8Y',
    instructors: [
      {
        id: 'marco-rivera',
        name: 'Marco Rivera',
        role: 'Host',
        imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUZA_nUqB8X9IwCkQhATa6ybKFuDp329kCoYTSBMHyCTd6cPulFs9TtlfRfuCVDs-3zMSskWEBWvobpRmfvS0SWtBOJvgwLblpbc0xLFy-qQjVvntQwbrlMlJiPufjpk1txjYZw_nzLNxyzsu-uOoLBeVAKheUQp1v-cII2WP19Yz8HkgaMaJUtXZSiHcP6ZHHfUq99aCdF6qrK9YFIq2rD1n-ni7NgRR0lO_6xKZiCYu1aMBwQlhaTHvLShUsrHYTRGVYVq9iO84'
      },
    ],
    location: {
      studio: 'Dance Fusion Studio',
      address: 'Brooklyn',
      city: 'New York'
    },
    date: {
      day: 'Sat, Nov 4',
      time: '9:00 PM - 12:00 AM'
    },
    tags: ['Social Dance'],
    bankDetails: {
      bankName: 'Chase Bank',
      accountName: 'Latin Dance Hub LLC',
      accountNumber: 'US12 3456 7890 1234 5678'
    },
  },
];
