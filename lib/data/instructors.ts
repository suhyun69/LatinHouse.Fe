// Instructor 타입 정의
export interface Instructor {
  id: string;
  name: string;
  imageUrl: string;
  specialties: string[];
  quote: string;
  location: string;
  bio?: string;
}

// Mock 데이터
export const instructorsData: Instructor[] = [
  {
    id: 'fernando-sosa',
    name: 'Fernando Sosa',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEkWHakjfR-lXAg_eFX_FluQx364-d_cW15M-PVD1RuWDAzPL3_FgQL4aS50yVrwcpHW-aaIGoubGPCuDK9kMVIh-90C1oRr-URV_9J0Ab45reW4jj6pLtOU0gkclMCkh0iiVsxXpNGilhscB-lo6L4HePwiPNey99p4hxx3N7Y84lOEgiSrnWNAWdYp7G37lAEN-rsRYs1mZaRH3DKILqVl7pi3a4ERpvxOTjXNZ0YcGNjtu1CgEt3ljjl0Q0Nz5bWKzmyRm2CNA',
    specialties: ['Salsa On2', 'Choreography'],
    quote: 'Pioneer of the SOSA style and leader of Tropical Gem dance company.',
    location: 'Milan, Italy',
  },
  {
    id: 'ataca-alemana',
    name: 'Ataca & La Alemana',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAEfJ2PHz3Ztyy83SCfHk6naOG_bQ5QHmalkedT7Sgqank5InEb3blPG4ZGjMfd-x6QEwCmM8nardAzAfHGdPbfJnWZtO38a1mZA5aV86C610uxfszT05r6Af588ugufv7P6NtOLCNk0vl28wIgPPqKjaSEYyptj4Tk-5KNN6ujKULIl_gA0Hw-mCtQ7nTtFLj9h_v2sFu0cKHcrbJR--5qQvcYrekPUmWsdb6nQl_ny_OkbyWenapYppY4i1zyuVDQSAHk9Bkva38',
    specialties: ['Bachata', 'Sensual'],
    quote: "The world's most recognized bachata couple, known for their musicality.",
    location: 'Tampa, FL',
  },
  {
    id: 'adolfo-indacochea',
    name: 'Adolfo Indacochea',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAR11VK2nU3EPRlHT6fYLDTOvZ6sBrdJ9loPPzVH1t3pnFJqrdPSuQaA_vj7tSYnQbm0SlVOspCrAtmBwmCRqFC4rB292CiGXrRbWObSAc2DuuFLc-Cj9yIhJAh0nfZPdKA0802zDOJo6Y_4PBcarHvyXLQ5WpW9RiH8_CBPsZKf6vQP0eznHGc8JMxgHVK-3bBbv9kJBWc7x7H9Xo7ycDf69h8n9fVcs8yoYsMZR-_58xpUXzEW8relbFNXCTPdMEa_awT1BfrcMI',
    specialties: ['Mambo', 'Shines'],
    quote: 'Global representative of Mambo, focusing on power and technique.',
    location: 'New York, NY',
  },
  {
    id: 'korke-judith',
    name: 'Korke & Judith',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAV2w1ydNETaIsyHcKkNCp3GeT6tuPhLxjNEE4SX5hnNQ7Olt0hqAEI0t4g8f13uHA5F6bzXNBkH2O-_FFPnKCHKsdBxMCRrbrW-Ry9bK19AdgvPjC28up5rOIdxvfsaO4-6L_kj2SgJzD4xDUm6jasY6EdUOUl9JadoddjQ5GWyT55fsLV-CVwb63TEPhqJ5RUemmRSJgcYqKpUS-lmC6NdCvHIcSNgIZjrjkD5p90dYZ85_RxqBsLMUeKtfh36XHmXzm0WCWG0v8',
    specialties: ['Bachata', 'Dominican'],
    quote: 'Creators of the Bachata Sensual style with over 20 years experience.',
    location: 'Cádiz, Spain',
  },
  {
    id: 'eddie-torres-jr',
    name: 'Eddie Torres Jr.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Bj2xrccfoQ1c9yTyv8gjBnAGSg4ssBYPLIEbqI2Yo6ho6eQPPI8FlXl0mzmO1NA8seEGxejZsf8qN3mIhkprjk_h2PSyetRRDF_Mc3a7aJVjx5FzbDi21hRa3SCwjZ2foONSVg5ZcnPrY_cml6ItOoRKpeczd2_2ZMc2Bsy6fjUGIV7gCJ63C8Ju3Fy4P6kO9u2ghpn1I-pH3bRFKnXecKzI9EMQ3RNjJCr3adCpecBB8s_MUh1xCTrSpYk9psGj796PLfxWV6o',
    specialties: ['Salsa On2', 'Classic Mambo'],
    quote: 'Carrying the legacy of the Mambo King with a modern artistic twist.',
    location: 'New York, NY',
  },
  {
    id: 'sara-lopez',
    name: 'Sara Lopez',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAz6cDqHhuCnymiWT_5qaoh_dHGjQZyzZbaQZ7bRWH7h4Czd5YWYPpnoiBZGOwMY_dr1F4hXRGfzAQnE_dTKsroBEq5_y8wIXze6MRDUPsKJwDK6tIEF74_tuyyGYMCqCy0gBWFh0UEPMzedhUb-mHy4Q4i-YfKibYaiPUgZd5s9gf_EeZ9-hj3JMq0PcLTw5GGsD_GRZg3DDtnA1ZhDD7mAlCYl6Mt_zgjCNhUPeffJSZVAaK9h59MjbdQn-TKFbnXumJmmrrU_LM',
    specialties: ['Kizomba', 'Lady Styling'],
    quote: 'The Queen of Kizomba, worldwide reference for styling and isolation.',
    location: 'Madrid, Spain',
  },
];
