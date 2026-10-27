
'use client';

import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Check,
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react';

const phone = '254759713882';

const pages = {
  accommodation: {
    label: 'ROOMS & SUITES',
    title: 'A comfortable place to call your own in Nakuru.',
    subtitle:
      'Make room for rest, whether you are visiting for business, exploring the region or travelling through Nakuru.',
    image: '/images/laquita-room2.JPG',
    introTitle: 'Your stay should feel considered from the start.',
    intro: [
      'Choosing accommodation is an important part of any trip. At La Quita Hotel & Suites, our aim is to give guests a welcoming place to settle in while visiting Nakuru.',
      'Whether you are planning ahead or arranging a stop along your journey, speak to our team about available rooms, rates and the arrangements that best suit your visit.',
    ],
    highlights: [
      {
        title: 'Rooms & suites',
        text: 'Ask about available room types, facilities, rates and the best option for your stay.',
      },
      {
        title: 'Breakfast & meal options',
        text: 'Choose breakfast or lunch as an addition to your room booking, or enquire about half-board arrangements.',
      },
      {
        title: 'Business and leisure',
        text: 'Share the purpose of your visit so our team can help with your accommodation enquiry.',
      },
    ],
    sections: [
      {
        eyebrow: 'PLAN YOUR STAY',
        title: 'Find the right option for your visit.',
        paragraphs: [
          'Every guest has different needs. You may be visiting for work, attending a meeting, passing through Nakuru or planning a longer stay. Start by telling us your preferred dates, how many guests will be staying and what matters most to you.',
          'Our team can then share the current availability, room rates and relevant details before you make a decision. Rates and availability should always be confirmed directly with the hotel.',
        ],
        bullets: [
          'Your preferred arrival and departure dates',
          'Number of adults and children, if applicable',
          'Whether you would like breakfast, lunch or a half-board enquiry',
          'Any important requirements you would like us to consider',
        ],
      },
      {
        eyebrow: 'FOR INTERNATIONAL TRAVELLERS',
        title: 'Plan your Nakuru stay before you travel.',
        paragraphs: [
          'Travelling to Kenya from another country often means organising several details in advance. Contact La Quita before arrival to discuss accommodation, expected dates and the information you need to plan your stay.',
          'You can begin your enquiry from overseas through WhatsApp. Please include your dates and the number of guests so that our team can respond to your specific request.',
        ],
        bullets: [
          'Confirm room availability and the applicable rate',
          'Ask about payment methods and booking arrangements',
          'Confirm check-in requirements before travelling',
          'Keep your hotel contact details available during your trip',
        ],
      },
      {
        eyebrow: 'BEFORE YOU BOOK',
        title: 'Clear information makes planning easier.',
        paragraphs: [
          'Before confirming accommodation, make sure you understand what is included in the quoted rate, the applicable booking and cancellation terms, accepted payment methods and check-in requirements.',
          'Room rates shown on this page exclude meals. Breakfast is KSh 500 per person and lunch is KSh 1,500 per person. Ask the team to confirm how your meal selections will be charged for your stay. Half-board and dinner arrangements need to be confirmed directly with the hotel.',
        ],
        bullets: [
          'Request the full price for your selected dates',
          'Confirm exactly what is included',
          'Ask about the booking and cancellation policy',
          'Request written confirmation of your reservation',
        ],
      },
    ],
    faqs: [
      {
        q: 'How do I check room rates and availability?',
        a: 'Send your arrival date, departure date and number of guests through our booking form or WhatsApp enquiry link. The hotel team can share current rates and availability.',
      },
      {
        q: 'What are the room-only rates?',
        a: 'The listed room-only rates are KSh 2,000, KSh 2,500 and KSh 3,000 per room per night. Confirm the category, availability and applicable terms with reception.',
      },
      {
        q: 'How much are breakfast and lunch?',
        a: 'Breakfast is KSh 500 per person and lunch is KSh 1,500 per person. Both are priced separately from the room-only rates. Confirm your requested meal arrangements with reception.',
      },
      {
        q: 'Can I enquire about half-board?',
        a: 'Yes. Send a half-board enquiry and ask reception to confirm the meal combination and final price before you book.',
      },
      {
        q: 'Are room reservations confirmed automatically through this website?',
        a: 'No. The enquiry form opens WhatsApp and sends your request to the hotel. Wait for confirmation from the hotel before treating a reservation as confirmed.',
      },
    ],
    cta: 'Enquire about rooms',
    message:
      'I would like to enquire about accommodation. Please share your available room types, rates and booking conditions.',
  },

  restaurant: {
    label: 'RESTAURANT & DINING',
    title: 'Good food. A welcoming table. Time well spent.',
    subtitle:
      'Discover dining enquiries at La Quita Hotel & Suites in Pipeline, Nakuru.',
    image: '/images/laquita-pilau.jpg',
    introTitle: 'Make dining part of your La Quita experience.',
    intro: [
      'A meal can be a welcome pause in a busy day, a reason to meet friends or an opportunity to gather with colleagues. Our restaurant page helps you start planning a dining visit at La Quita Hotel & Suites.',
      'For current menu items, prices, service times and availability, please contact the team directly. This ensures you receive accurate information for the date you plan to visit.',
    ],
    highlights: [
      {
        title: 'Dining enquiries',
        text: 'Ask about available dishes, menu options, prices and current service arrangements.',
      },
      {
        title: 'Breakfast & lunch',
        text: 'Breakfast is KSh 500 per person and lunch is KSh 1,500 per person. Confirm availability and arrangements with our team.',
      },
      {
        title: 'Groups and gatherings',
        text: 'Let us know your group size and intended date so we can discuss suitable arrangements.',
      },
    ],
    sections: [
      {
        eyebrow: 'THE DINING EXPERIENCE',
        title: 'Good company starts with good planning.',
        paragraphs: [
          'Whether you are travelling, working nearby or meeting someone in Nakuru, a restaurant visit is easier to plan when you know what is available. Reach out to enquire about current menu options and the arrangements for your preferred time.',
          'If you have a particular dish in mind, ask whether it is available before making the trip. Menu selection, prices and service times should be confirmed by the restaurant.',
        ],
        bullets: [
          'Ask for the current menu and prices',
          'Confirm dining times before visiting',
          'Mention any dietary requirements when enquiring',
          'Ask about arrangements for groups in advance',
        ],
      },
      {
        eyebrow: 'FOR HOTEL GUESTS',
        title: 'Ask about meals alongside your accommodation.',
        paragraphs: [
          'If you are also enquiring about a room, tell the team whether you are interested in breakfast, lunch or another dining option. Having your stay and meal enquiries together helps you understand the arrangements available for your visit.',
          'Room-only rates exclude meals. Breakfast is KSh 500 per person and lunch is KSh 1,500 per person. Ask the team to confirm the package and any additional charges before booking.',
        ],
        bullets: [
          'Clarify whether a meal is included in your rate',
          'Ask about meal options for your travel dates',
          'Confirm any additional charges in advance',
        ],
      },
      {
        eyebrow: 'PLANNING A VISIT',
        title: 'What to include in your enquiry.',
        paragraphs: [
          'A short message with the date, approximate time and number of people is a useful starting point, especially if you are organising a meal for colleagues, friends or visiting family.',
          'Our team can respond with the information available and advise you about the next steps for your dining enquiry.',
        ],
        bullets: [
          'Your preferred date and approximate time',
          'The number of people in your party',
          'Whether you are asking about a regular meal or group dining',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I see the restaurant menu before visiting?',
        a: 'Contact the hotel using WhatsApp and ask for the current menu and prices. Menu information can change, so confirm it directly.',
      },
      {
        q: 'How much are breakfast and lunch?',
        a: 'Breakfast is KSh 500 per person and lunch is KSh 1,500 per person. Ask the restaurant to confirm availability and meal arrangements.',
      },
      {
        q: 'Can I enquire about dining for a group?',
        a: 'Yes. Include your preferred date, approximate time and group size so the restaurant team can advise on possible arrangements.',
      },
    ],
    cta: 'Ask about dining',
    message:
      'I would like to enquire about the restaurant. Please share the current menu, prices and dining arrangements.',
  },

  lounge: {
    label: 'BAR & LOUNGE',
    title: 'Slow down. Catch up. Enjoy the moment.',
    subtitle:
      'Explore the bar and lounge experience at La Quita Hotel & Suites, Nakuru.',
    image: '/images/laquita-lounge.jpg',
    introTitle: 'A change of pace, right here in Nakuru.',
    intro: [
      'Sometimes a good evening is simply about getting together, having a conversation and taking a break from the day. La Quita’s bar and lounge provides a place to enquire about a relaxed visit with friends or colleagues.',
      'If you are planning to watch a football match, ask the team about DStv viewing and whether your preferred fixture will be available. Confirm current drinks, prices and operating arrangements before visiting.',
    ],
    highlights: [
      {
        title: 'Catch up with friends',
        text: 'Make time for conversation and a relaxed social visit.',
      },
      {
        title: 'Football on DStv',
        text: 'Ask about match availability and viewing arrangements for your chosen fixture.',
      },
      {
        title: 'Drinks enquiries',
        text: 'Contact the team to check available drinks, current prices and any promotions.',
      },
    ],
    sections: [
      {
        eyebrow: 'TIME TO UNWIND',
        title: 'Make the evening your own.',
        paragraphs: [
          'A welcoming lounge can be a convenient place to meet after work, reconnect with friends or enjoy some downtime during a visit to Nakuru.',
          'For groups, special occasions or a planned visit around a football match, contact the hotel in advance to ask about availability and arrangements.',
        ],
        bullets: [
          'Ask about the current lounge and bar offerings',
          'Confirm available drinks and current prices',
          'Enquire about group arrangements before arriving',
        ],
      },
      {
        eyebrow: 'FOOTBALL & ENTERTAINMENT',
        title: 'Check the game before you make plans.',
        paragraphs: [
          'If you are visiting to watch football, include the teams and match date in your enquiry. Broadcast rights, fixture times and channel availability may differ, so the hotel should confirm whether the match can be shown.',
          'For a group gathering, contact the team early to discuss your expected arrival time and the arrangements available on the day.',
        ],
        bullets: [
          'Include the match and date in your message',
          'Confirm the expected kick-off time in Kenya',
          'Ask whether a group can be accommodated',
        ],
      },
      {
        eyebrow: 'A NOTE ABOUT VISUALS',
        title: 'Get the details before visiting.',
        paragraphs: [
          'Some lounge visuals used on this website are illustrative renderings rather than photographs of the actual room. Please contact La Quita for current information about the facilities and the arrangements available during your visit.',
        ],
        bullets: [
          'Ask questions about the current setting',
          'Confirm availability and any applicable conditions',
        ],
      },
    ],
    faqs: [
      {
        q: 'Can I watch football at the lounge?',
        a: 'DStv viewing is part of the lounge offering. Contact the hotel to confirm whether your chosen fixture and channel will be available on the day.',
      },
      {
        q: 'Where can I check drinks and prices?',
        a: 'Ask the team through WhatsApp for the current drinks selection and prices, as these may change.',
      },
      {
        q: 'Can I plan a group visit?',
        a: 'Contact the hotel with your intended date, time and group size to ask about available arrangements.',
      },
    ],
    cta: 'Enquire about the lounge',
    message:
      'I would like to enquire about the bar and lounge, available drinks and viewing arrangements.',
  },

  conferences: {
    label: 'MEETINGS & CONFERENCES',
    title: 'Bring people together. Give good ideas room to grow.',
    subtitle:
      'Explore meeting and conference enquiries at La Quita Hotel & Suites in Nakuru.',
    image: '/images/laquita-conference.jpg',
    introTitle: 'A good event starts with a clear plan.',
    intro: [
      'Organising a seminar, training session, workshop or business meeting involves more than finding a room. You need to communicate the purpose, size and practical requirements of your event so that the venue can respond appropriately.',
      'La Quita Hotel & Suites welcomes enquiries about meetings and conferences in Nakuru. Contact our team to discuss your event, ask about the available setting and confirm capacity, pricing, equipment and availability.',
    ],
    highlights: [
      {
        title: 'Business meetings',
        text: 'Discuss a venue enquiry for team meetings, discussions and professional gatherings.',
      },
      {
        title: 'Seminars and workshops',
        text: 'Share your event schedule, attendance estimate and format requirements.',
      },
      {
        title: 'Event planning',
        text: 'Ask about available facilities, packages, arrangements and costs before confirming.',
      },
    ],
    sections: [
      {
        eyebrow: 'MEETING PLANNING',
        title: 'Tell us what you need your venue to do.',
        paragraphs: [
          'A boardroom-style meeting, a training session and a seminar may require different seating arrangements and equipment. Before confirming a venue, describe how the event will run and what attendees will need.',
          'Our team can then advise you on the details that can be supported by the available facilities. Please confirm all capacities, equipment, catering options and prices directly with the hotel.',
        ],
        bullets: [
          'The type and purpose of your meeting',
          'The anticipated number of attendees',
          'Your preferred date, start time and finish time',
          'Seating, presentation or equipment requirements',
          'Whether you need food or accommodation enquiries',
        ],
      },
      {
        eyebrow: 'FOR ORGANISERS',
        title: 'What to confirm before making a booking.',
        paragraphs: [
          'A written proposal or confirmation should explain what the quoted package covers. This may include the venue arrangement, time available, equipment, food and drink options and any additional charges that apply.',
          'If participants are travelling from outside Nakuru, it may also be useful to enquire about accommodation for the group. Availability and costs should be checked separately with the hotel.',
        ],
        bullets: [
          'Venue capacity for your preferred seating plan',
          'Included equipment and available facilities',
          'Catering arrangements and prices, if required',
          'Payment, deposit and cancellation terms',
          'Access times and event-day arrangements',
        ],
      },
      {
        eyebrow: 'FOR INTERNATIONAL ORGANISERS',
        title: 'Start planning before your delegates arrive.',
        paragraphs: [
          'If you are arranging a meeting in Kenya from abroad, contact the hotel well before your preferred date. Include your approximate group size, schedule and requirements, and request written details of the available options.',
          'Do not assume a room configuration, projector, internet specification, catering package or event capacity is included until the hotel confirms it.',
        ],
        bullets: [
          'Provide the event date and local time in Kenya',
          'Request a clear quotation in the stated currency',
          'Confirm which services are included in the quotation',
          'Ask for written confirmation of your arrangements',
        ],
      },
      {
        eyebrow: 'IMPORTANT NOTE',
        title: 'Confirm the current venue layout.',
        paragraphs: [
          'Some conference visuals on this website are illustrative renderings rather than photographs of the actual facility. Request current photographs or arrange to view the space before making a final decision about your event.',
        ],
        bullets: [
          'Confirm the actual available venue and layout',
          'Check capacity, equipment and accessibility directly',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the conference hall hire rate?',
        a: 'The listed hall-hire rate is KSh 8,000. Please contact the hotel to confirm the applicable duration, what is included, capacity and availability.',
      },
      {
        q: 'Can I enquire about a seminar or workshop?',
        a: 'Yes. Share your preferred date, number of attendees and event requirements through WhatsApp so the team can discuss available options.',
      },
      {
        q: 'How do I confirm the conference capacity?',
        a: 'Ask the hotel to confirm the actual available space and capacity for your intended seating arrangement before booking.',
      },
      {
        q: 'Can I ask about catering and accommodation for delegates?',
        a: 'Yes. Include these requirements in your enquiry so that the team can confirm which arrangements are available and what they cost.',
      },
    ],
    cta: 'Discuss your event',
    message:
      'I would like to enquire about a meeting or conference. Please share capacity, packages, equipment, prices and availability.',
  },

  gallery: {
    label: 'EXPLORE LA QUITA',
    title: 'Take a closer look at your next Nakuru stop.',
    subtitle:
      'Explore our available hotel, room, dining and hospitality visuals.',
    image: '/images/laquita-exterior.JPG',
    introTitle: 'Get to know the spaces before you visit.',
    intro: [
      'A gallery can help you begin to understand a hotel before you arrive. Use this page to explore selected visuals associated with La Quita Hotel & Suites and find the relevant service page for more information.',
      'Photographs and illustrative visuals are not always interchangeable. Contact our team for current photographs and confirmation of the actual room or facility relevant to your enquiry.',
    ],
    highlights: [
      {
        title: 'Hotel exterior',
        text: 'See the exterior image used to introduce La Quita Hotel & Suites.',
      },
      {
        title: 'Accommodation',
        text: 'Explore room images and continue to the accommodation page for booking enquiries.',
      },
      {
        title: 'Dining and facilities',
        text: 'View available dining visuals and ask for further information about facilities.',
      },
    ],
    sections: [
      {
        eyebrow: 'EXPLORE OUR WEBSITE',
        title: 'Find the information relevant to your visit.',
        paragraphs: [
          'If accommodation is your priority, visit our rooms page to enquire about room types, rates and availability. If you are planning a meal, social evening or business event, use the relevant service page to send your questions to our team.',
          'Our goal is to help you move from browsing to a useful enquiry, with accurate details supplied directly by the hotel.',
        ],
        bullets: [
          'Accommodation and meal enquiries',
          'Restaurant and dining information',
          'Bar, lounge and DStv enquiries',
          'Meetings, seminars and conference planning',
        ],
      },
      {
        eyebrow: 'BEFORE MAKING A DECISION',
        title: 'Request current photos when details matter.',
        paragraphs: [
          'A website image may show a selected view or an illustrative concept. If you need to inspect specific room features, actual conference seating, accessibility or the appearance of a facility, ask the hotel for current photographs and relevant details.',
        ],
        bullets: [
          'Confirm that images match the facility you want to use',
          'Ask about any feature that is important to your visit',
          'Confirm availability and rates directly with the hotel',
        ],
      },
    ],
    faqs: [
      {
        q: 'Are all images on this website actual photographs?',
        a: 'Some lounge and conference visuals may be illustrative renderings. Please request current photographs of a specific facility if you need to verify its appearance.',
      },
      {
        q: 'Where can I find information about room availability?',
        a: 'Visit the accommodation page or use the WhatsApp enquiry links to ask the team about current rates and availability.',
      },
      {
        q: 'Can I ask for more photographs?',
        a: 'Yes. Contact the hotel and specify the room or facility you would like to see.',
      },
    ],
    cta: 'Request more information',
    message:
      'Please share current photographs and further information about your hotel facilities.',
  },

  about: {
    label: 'OUR STORY',
    title: 'Where tranquility meets excellence.',
    subtitle:
      'A modern, welcoming hospitality destination in Pipeline, Nakuru, Kenya.',
    image: '/images/laquita-exterior.JPG',
    introTitle: 'Hospitality is about how your visit feels.',
    intro: [
      'La Quita Hotel & Suites is a hospitality destination in Pipeline, Nakuru. The website brings together information for guests enquiring about accommodation, dining, the bar and lounge, and meetings and conferences.',
      'Our guiding idea is simple: Where Tranquility Meets Excellence. We aim to make it easier for guests to understand the available services, ask the right questions and plan their visit with confidence.',
    ],
    highlights: [
      {
        title: 'Comfort',
        text: 'Helping guests understand their accommodation options before booking.',
      },
      {
        title: 'Convenience',
        text: 'Making it easier to enquire about the services relevant to a visit.',
      },
      {
        title: 'Connection',
        text: 'Bringing guests, colleagues, friends and families together.',
      },
    ],
    sections: [
      {
        eyebrow: 'OUR APPROACH',
        title: 'A place for different kinds of visits.',
        paragraphs: [
          'A hotel can play several roles in a guest’s day. It may be a place to rest after travelling, a starting point for a stay in Nakuru, a setting for a meal or a place to bring colleagues together.',
          'The La Quita website is organised around those needs. Each section explains what you can enquire about and gives you a direct way to contact the hotel for the details that matter to your plans.',
        ],
        bullets: [
          'Accommodation and meal enquiries',
          'Restaurant and dining information',
          'Bar and lounge enquiries',
          'Meetings, seminars and workshops',
        ],
      },
      {
        eyebrow: 'OUR LOCATION',
        title: 'Discover La Quita in Nakuru.',
        paragraphs: [
          'La Quita Hotel & Suites is located in Pipeline, Nakuru, Kenya. If you are visiting from elsewhere in Kenya or travelling internationally, contact the hotel ahead of your arrival to confirm directions and plan the details of your stay.',
          'For the most useful guidance, include your expected arrival date and any questions about accommodation or services in your enquiry.',
        ],
        bullets: [
          'Find us in Pipeline, Nakuru, Kenya',
          'Use the contact page for phone and WhatsApp details',
          'Confirm booking conditions and service availability directly',
        ],
      },
    ],
    faqs: [
      {
        q: 'Where is La Quita Hotel & Suites located?',
        a: 'La Quita Hotel & Suites is in Pipeline, Nakuru, Kenya. Use the contact page to request directions or open a map search.',
      },
      {
        q: 'What services can I enquire about?',
        a: 'You can enquire about accommodation, breakfast and lunch, restaurant and dining, the bar and lounge, carwash and meetings or conferences.',
      },
      {
        q: 'How do I contact the hotel?',
        a: 'Call +254 759 713 882 or use the WhatsApp links on the website to send your enquiry.',
      },
    ],
    cta: 'Get to know La Quita',
    message:
      'Hello La Quita Hotel & Suites. I would like to learn more about your hotel and available services.',
  },

  contact: {
    label: 'CONTACT & DIRECTIONS',
    title: 'Let’s help you plan your visit.',
    subtitle:
      'Contact La Quita Hotel & Suites in Pipeline, Nakuru, Kenya.',
    image: '/images/laquita-exterior.JPG',
    introTitle: 'A useful conversation starts with a clear enquiry.',
    intro: [
      'Whether you are arranging a stay, asking about dining, planning an evening in the lounge or organising a meeting, the hotel team is the best source for current details about availability and prices.',
      'You can contact La Quita by phone or WhatsApp. Sharing the service you are interested in, your preferred date and any important requirements will help make your enquiry more specific.',
    ],
    highlights: [
      {
        title: 'Call the hotel',
        text: '+254 759 713 882',
      },
      {
        title: 'Send a WhatsApp enquiry',
        text: 'Message the team with your question and preferred dates.',
      },
      {
        title: 'Find our location',
        text: 'La Quita Hotel & Suites, Pipeline, Nakuru, Kenya.',
      },
    ],
    sections: [
      {
        eyebrow: 'ACCOMMODATION ENQUIRIES',
        title: 'Have your travel details ready.',
        paragraphs: [
          'For a room enquiry, share your arrival and departure dates, the number of guests and whether you are interested in breakfast or lunch. Ask the team to confirm the rate, terms and availability before making travel arrangements.',
          'International travellers should confirm the hotel’s booking, payment and check-in requirements before departing for Kenya.',
        ],
        bullets: [
          'Arrival and departure dates',
          'Number of guests and room requirements',
          'Questions about the quoted rate and meal plan',
        ],
      },
      {
        eyebrow: 'EVENT & DINING ENQUIRIES',
        title: 'Tell us what you are planning.',
        paragraphs: [
          'For conferences and meetings, include the event date, expected attendance, format and equipment or catering requirements. For dining and lounge enquiries, share your intended date, approximate time and group size.',
          'The team can then confirm which arrangements are available and explain any applicable charges.',
        ],
        bullets: [
          'Purpose of your visit or event',
          'Preferred date and expected number of people',
          'Specific facilities or arrangements you need confirmed',
        ],
      },
      {
        eyebrow: 'FIND US',
        title: 'La Quita Hotel & Suites, Pipeline, Nakuru.',
        paragraphs: [
          'Use the map search to locate La Quita Hotel & Suites in Nakuru. Confirm the exact route and pin before travelling, especially if you are arriving from outside the area.',
        ],
        bullets: [
          'Area: Pipeline, Nakuru, Kenya',
          'Phone: +254 759 713 882',
          'WhatsApp: available through the enquiry links on this website',
        ],
      },
    ],
    faqs: [
      {
        q: 'What is the hotel contact number?',
        a: 'Call +254 759 713 882 or use the WhatsApp contact links on this website.',
      },
      {
        q: 'Can I enquire before travelling from another country?',
        a: 'Yes. Contact the hotel in advance to ask about dates, prices, booking arrangements and check-in requirements.',
      },
      {
        q: 'Does sending a WhatsApp enquiry confirm my booking?',
        a: 'No. Your message begins an enquiry. Wait for the hotel to confirm your reservation and its terms.',
      },
    ],
    cta: 'Send us a WhatsApp',
    message:
      'Hello La Quita Hotel & Suites. I have a question about your services and would like more information.',
  },
};

type PageName = keyof typeof pages;

const roomRates = [
  { name: 'Classic Room', price: 2000 },
  { name: 'Comfort Room', price: 2500 },
  { name: 'Premier Room', price: 3000 },
];

const relatedPages = [
  {
    title: 'Accommodation',
    description: 'Explore rooms and plan your stay.',
    href: '/accommodation',
    image: '/images/laquita-room.jpg',
  },
  {
    title: 'Restaurant & Dining',
    description: 'Ask about meals and dining options.',
    href: '/restaurant',
    image: '/images/laquita-pilau.jpg',
  },
  {
    title: 'Bar & Lounge',
    description: 'Explore the lounge and viewing arrangements.',
    href: '/lounge',
    image: '/images/laquita-lounge.jpg',
  },
  {
    title: 'Meetings & Conferences',
    description: 'Plan a seminar, workshop or meeting.',
    href: '/conferences',
    image: '/images/laquita-conference.jpg',
  },
];

function makeWhatsAppLink(message: string) {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export default function InteriorPage({ page }: { page: PageName }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [today, setToday] = useState('');

  const data = pages[page];

  const whatsappUrl = makeWhatsAppLink(
    `Hello La Quita Hotel & Suites. ${data.message}`,
  );

  useEffect(() => {
    const current = new Date();
    const localToday = new Date(
      current.getTime() - current.getTimezoneOffset() * 60000,
    )
      .toISOString()
      .slice(0, 10);

    setToday(localToday);

    const elements =
      document.querySelectorAll<HTMLElement>('.interior-reveal');

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    document.documentElement.classList.add('interior-motion-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -35px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('interior-motion-ready');
    };
  }, [page]);

  return (
    <main className="interior-page">
      {/* TOP BAR */}

      <div className="interior-topline">
        <span>PIPELINE · NAKURU, KENYA</span>

        <span className="interior-topline-slogan">
          WHERE TRANQUILITY MEETS EXCELLENCE
        </span>

        <a
          href={makeWhatsAppLink(data.message)}
          target="_blank"
          rel="noreferrer"
        >
          WHATSAPP US <ArrowRight size={13} />
        </a>
      </div>

      {/* NAVIGATION */}

      <header className="interior-nav">
        <a
          className="interior-brand"
          href="/"
          aria-label="La Quita homepage"
        >
          <img
            src="/images/laquita-logo.jpg"
            alt="La Quita Hotel & Suites"
          />

          <span>
            <b>LA QUITA</b>
            <small>HOTEL & SUITES</small>
          </span>
        </a>

        <button
          type="button"
          className="interior-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav className={`interior-links ${menuOpen ? 'open' : ''}`}>
          <a href="/accommodation" onClick={() => setMenuOpen(false)}>
            Accommodation
          </a>

          <a href="/restaurant" onClick={() => setMenuOpen(false)}>
            Dining
          </a>

          <a href="/lounge" onClick={() => setMenuOpen(false)}>
            Lounge
          </a>

          <a href="/conferences" onClick={() => setMenuOpen(false)}>
            Conference
          </a>

          <a href="/blog" onClick={() => setMenuOpen(false)}>
            Journal
          </a>

          <a
            className="interior-nav-cta"
            href="/booking"
            onClick={() => setMenuOpen(false)}
          >
            Book a stay <ArrowRight size={15} />
          </a>
        </nav>
      </header>

      {/* HERO */}

      <section className="interior-hero">
        <div
          className="interior-hero-image"
          style={{ backgroundImage: `url("${data.image}")` }}
        />

        <div className="interior-hero-shade" />

        <div className="interior-hero-copy">
          <p className="interior-eyebrow">
            <span /> {data.label}
          </p>

          <h1>{data.title}</h1>

          <p className="interior-hero-subtitle">{data.subtitle}</p>

          <div className="interior-hero-actions">
            <a className="interior-button" href="#page-details">
              Explore this page <ArrowRight size={16} />
            </a>

            <a className="interior-hero-secondary" href="/booking">
              Plan your stay <ArrowDownRight size={17} />
            </a>
          </div>
        </div>

        <div className="interior-hero-location">
          PIPELINE <span /> NAKURU, KENYA
        </div>
      </section>

      {/* ACCOMMODATION QUICK BOOKING */}

      {page === 'accommodation' && (
        <section className="interior-quick-booking">
          <div className="interior-quick-heading">
            <span>PLAN YOUR STAY</span>
            <h2>Choose your dates.</h2>
          </div>

          <form
            action="/booking"
            method="GET"
            className="interior-quick-form"
          >
            <label>
              Check-in
              <input
                type="date"
                name="checkIn"
                min={today || undefined}
                required
                value={checkIn}
                onChange={(event) => {
                  setCheckIn(event.target.value);

                  if (checkOut && event.target.value >= checkOut) {
                    setCheckOut('');
                  }
                }}
              />
            </label>

            <label>
              Check-out
              <input
                type="date"
                name="checkOut"
                min={checkIn || today || undefined}
                required
                value={checkOut}
                onChange={(event) => setCheckOut(event.target.value)}
              />
            </label>

            <label>
              Guests
              <select name="guests" defaultValue="2">
                {[1, 2, 3, 4, 5, 6, 8, 10].map((n) => (
                  <option value={n} key={n}>
                    {n} {n === 1 ? 'guest' : 'guests'}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Meal plan
              <select name="mealPlan" defaultValue="room-only">
                <option value="room-only">Room only</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="breakfast-lunch">Breakfast + lunch</option>
                <option value="half-board">Half-board enquiry</option>
              </select>
            </label>

            <button type="submit">
              Continue <ArrowRight size={15} />
            </button>
          </form>
        </section>
      )}

      {/* INTRODUCTION */}

      <section className="interior-intro interior-reveal" id="page-details">
        <div className="interior-intro-heading">
          <p className="interior-small-label">LA QUITA HOTEL & SUITES</p>
          <h2>{data.introTitle}</h2>
        </div>

        <div className="interior-intro-copy">
          {data.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      {/* ACCOMMODATION ROOM RATES AND MEALS */}

      {page === 'accommodation' && (
        <section className="interior-rates">
          <div className="interior-section-heading interior-reveal">
            <p className="interior-small-label">ROOMS & SUITES</p>

            <h2>
              Your comfort.
              <br />
              <i>Your choice.</i>
            </h2>

            <p>
              Choose your preferred room rate. All rates below are room-only
              prices and exclude meals.
            </p>
          </div>

          <div className="interior-rates-grid">
            {roomRates.map((room, index) => (
              <article
                className="interior-rate-card interior-reveal"
                key={room.name}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <span className="interior-rate-number">
                  0{index + 1} / ROOM COLLECTION
                </span>

                <h3>{room.name}</h3>

                <div className="interior-rate-price">
                  <span>KSh</span>
                  <strong>{room.price.toLocaleString('en-KE')}</strong>
                </div>

                <p>Per room · Per night</p>

                <a
                  href={makeWhatsAppLink(
                    `I would like to enquire about the ${room.name} at KSh ${room.price.toLocaleString('en-KE')} per room per night, excluding meals. Please confirm availability and booking terms.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Enquire about this room <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>

          <div className="interior-meal-prices interior-reveal">
            <div className="interior-meal-heading">
              <p className="interior-small-label">
                MEALS & HALF-BOARD ENQUIRIES
              </p>

              <h2>Make meals part of your plan.</h2>

              <p>Meals are priced separately from the room-only rates.</p>
            </div>

            <div className="interior-meal-price-row">
              <span>Breakfast</span>
              <strong>KSh 500</strong>
              <small>Per person</small>
            </div>

            <div className="interior-meal-price-row">
              <span>Lunch</span>
              <strong>KSh 1,500</strong>
              <small>Per person</small>
            </div>

            <div className="interior-meal-price-row interior-meal-price-enquiry">
              <span>Half-board / dinner options</span>
              <a
                href={makeWhatsAppLink(
                  'Please share the available half-board meal combinations and confirmed prices.',
                )}
                target="_blank"
                rel="noreferrer"
              >
                Ask for options <ArrowRight size={14} />
              </a>
            </div>

            <p className="interior-meal-disclaimer">
              Half-board arrangements, dinner rates and any applicable
              package prices must be confirmed by the hotel. No unconfirmed
              meal charge is included in the room rates above.
            </p>

            <a
              href="/booking"
              className="interior-button interior-booking-button"
            >
              Continue to booking <ArrowRight size={15} />
            </a>
          </div>
        </section>
      )}

      {/* HIGHLIGHTS */}

      <section className="interior-highlights">
        {data.highlights.map((item, index) => (
          <article
            className="interior-highlight interior-reveal"
            key={item.title}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <span className="interior-highlight-number">
              0{index + 1}
            </span>

            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      {/* CONFERENCE HALL RATE */}

      {page === 'conferences' && (
        <section className="interior-conference-rate interior-reveal">
          <div>
            <p className="interior-small-label">MEETINGS & CONFERENCES</p>
            <h2>Conference hall hire</h2>
            <p>
              Contact our team to confirm the hire duration, capacity,
              layout, equipment and what is included in the quotation.
            </p>
          </div>

          <div className="interior-conference-price">
            <span>KSh</span>
            <strong>8,000</strong>
          </div>
        </section>
      )}

      {/* PAGE DETAILS */}

      {data.sections.map((section, index) => (
        <section
          className={`interior-detail-section ${
            index % 2 === 1 ? 'interior-detail-alt' : ''
          } interior-reveal`}
          key={section.title}
        >
          <div className="interior-detail-inner">
            <div className="interior-detail-heading">
              <p className="interior-small-label">{section.eyebrow}</p>
              <h2>{section.title}</h2>
            </div>

            <div className="interior-detail-copy">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Check size={16} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}

      <section className="interior-faq">
        <div className="interior-faq-heading interior-reveal">
          <p className="interior-small-label">HELPFUL INFORMATION</p>
          <h2>Questions guests often ask.</h2>
          <p>
            Contact our team for details specific to your dates and
            requirements.
          </p>
        </div>

        <div className="interior-faq-list interior-reveal">
          {data.faqs.map((faq) => (
            <details className="interior-faq-item" key={faq.q}>
              <summary>
                <span>{faq.q}</span>
                <ChevronDown size={18} />
              </summary>

              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* RELATED SERVICES */}

      <section className="interior-related">
        <div className="interior-related-heading interior-reveal">
          <p className="interior-small-label">EXPLORE MORE</p>
          <h2>More ways to enjoy La Quita.</h2>
          <p>
            Explore another service or contact the hotel to plan your visit.
          </p>
        </div>

        <div className="interior-related-grid">
          {relatedPages
            .filter((item) => {
              if (page === 'accommodation') {
                return item.href !== '/accommodation';
              }

              if (page === 'restaurant') {
                return item.href !== '/restaurant';
              }

              if (page === 'lounge') {
                return item.href !== '/lounge';
              }

              if (page === 'conferences') {
                return item.href !== '/conferences';
              }

              return true;
            })
            .slice(0, 3)
            .map((item, index) => (
              <a
                className="interior-related-card interior-reveal"
                href={item.href}
                key={item.href}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <img src={item.image} alt="" loading="lazy" />

                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <span>
                    Explore <ArrowRight size={14} />
                  </span>
                </div>
              </a>
            ))}
        </div>
      </section>

      {/* MAP ON CONTACT PAGE */}

      {page === 'contact' && (
        <section className="interior-map-section">
          <div className="interior-map-copy">
            <p className="interior-small-label">FIND LA QUITA</p>

            <h2>Visit us in Pipeline, Nakuru.</h2>

            <p>
              Use this map search to locate La Quita Hotel & Suites.
              Verify the hotel pin before relying on it for precise
              directions.
            </p>

            <a
              className="interior-button"
              href="https://www.google.com/maps/dir/?api=1&destination=La+Quita+Hotel+and+Suites%2C+Pipeline%2C+Nakuru%2C+Kenya"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <ArrowRight size={15} />
            </a>
          </div>

          <iframe
            title="Map search for La Quita Hotel & Suites in Nakuru"
            src="https://maps.google.com/maps?q=La%20Quita%20Hotel%20%26%20Suites%2C%20Pipeline%2C%20Nakuru%2C%20Kenya&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </section>
      )}

      {/* CONTACT CALL TO ACTION */}

      <section className="interior-contact-band">
        <div>
          <p className="interior-eyebrow">
            <span /> WHERE TRANQUILITY MEETS EXCELLENCE
          </p>

          <h2>
            Your next visit.
            <br />
            <i>Starts here.</i>
          </h2>

          <p>
            Contact our team to ask about availability, prices and
            arrangements for your visit.
          </p>
        </div>

        <div className="interior-contact-actions">
          <a className="interior-button" href="/booking">
            Book a stay <ArrowRight size={15} />
          </a>

          <a
            className="interior-contact-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} /> {data.cta}
          </a>
        </div>
      </section>

      {/* FOOTER */}

      <footer className="interior-footer">
        <div className="interior-footer-main">
          <div className="interior-footer-brand-col">
            <a
              className="interior-brand interior-footer-brand"
              href="/"
            >
              <img
                src="/images/laquita-logo.jpg"
                alt="La Quita Hotel & Suites"
              />

              <span>
                <b>LA QUITA</b>
                <small>HOTEL & SUITES</small>
              </span>
            </a>

            <p>
              Where Tranquility
              <br />
              <i>Meets Excellence.</i>
            </p>
          </div>

          <div className="interior-footer-links">
            <h3>EXPLORE</h3>
            <a href="/accommodation">Accommodation</a>
            <a href="/restaurant">Restaurant & Dining</a>
            <a href="/lounge">Bar & Lounge</a>
            <a href="/conferences">Meetings & Conferences</a>
            <a href="/gallery">Gallery</a>
            <a href="/about">About La Quita</a>
            <a href="/blog">Journal</a>
          </div>

          <div className="interior-footer-links">
            <h3>GUEST INFORMATION</h3>
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cancellation-policy">Cancellation & Refunds</a>
            <a href="/guest-policy">Guest Rules</a>
            <a href="/cookie-policy">Cookie Policy</a>
          </div>

          <div className="interior-footer-contact">
            <h3>GET IN TOUCH</h3>

            <span>Pipeline, Nakuru, Kenya</span>

            <a href="tel:+254759713882">+254 759 713 882</a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp our team <ArrowRight size={14} />
            </a>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=La+Quita+Hotel+and+Suites%2C+Pipeline%2C+Nakuru%2C+Kenya"
              target="_blank"
              rel="noreferrer"
            >
              <MapPin size={14} /> Directions
            </a>
          </div>
        </div>

        <div className="interior-footer-bottom">
          <span>© {new Date().getFullYear()} La Quita Hotel & Suites</span>
          <span>HOSPITALITY · COMFORT · CONNECTION</span>
          <a href="/">Back to homepage ↑</a>
        </div>
      </footer>

      {/* WHATSAPP CONTACT */}

      <a
        className="interior-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact La Quita on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      {/* STYLES */}

      <style jsx global>{`
        .interior-page {
          --ir: #a52e22;
          --ig: #e5b84c;
          --ic: #fbf8f1;
          --ii: #29231d;
          --im: #756d62;
          background: var(--ic);
          color: var(--ii);
          min-height: 100vh;
          overflow: clip;
        }

        .interior-page * {
          box-sizing: border-box;
        }

        .interior-page a {
          text-decoration: none;
        }

        .interior-topline {
          min-height: 36px;
          padding: 9px 7%;
          background: var(--ii);
          color: #eee6d8;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .interior-topline a {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--ig);
          white-space: nowrap;
        }

        .interior-brand {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: var(--ii);
          flex-shrink: 0;
        }

        .interior-brand img {
          display: block;
          width: 46px;
          height: 46px;
          object-fit: contain;
        }

        .interior-brand span {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .interior-brand b {
          font-size: 17px;
          line-height: 1;
          letter-spacing: 2px;
        }

        .interior-brand small {
          font-size: 8px;
          letter-spacing: 1.8px;
        }

        .interior-nav {
          min-height: 80px;
          padding: 12px 7%;
          position: relative;
          z-index: 30;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          background: var(--ic);
          border-bottom: 1px solid #e9e1d4;
        }

        .interior-links {
          display: flex;
          align-items: center;
          gap: clamp(13px, 2vw, 25px);
        }

        .interior-links > a:not(.interior-nav-cta) {
          color: #51483e;
          font-size: 10px;
          transition: color .2s;
        }

        .interior-links > a:not(.interior-nav-cta):hover {
          color: var(--ir);
        }

        .interior-links .interior-nav-cta {
          min-height: 42px;
          padding: 12px 15px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          background: var(--ir);
          color: white;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .interior-menu-toggle {
          display: none;
          padding: 8px;
          border: 0;
          background: transparent;
          color: var(--ii);
          cursor: pointer;
        }

        .interior-hero {
          position: relative;
          isolation: isolate;
          min-height: clamp(470px, 58vw, 640px);
          display: flex;
          align-items: center;
          background: #29231d;
          color: white;
          overflow: hidden;
        }

        .interior-hero-image,
        .interior-hero-shade {
          position: absolute;
          inset: 0;
          z-index: -1;
        }

        .interior-hero-image {
          background-size: cover;
          background-position: center;
          animation: interior-hero-zoom 15s ease-out both;
        }

        .interior-hero-shade {
          background:
            linear-gradient(
              90deg,
              rgba(25, 20, 17, .88),
              rgba(25, 20, 17, .62) 52%,
              rgba(25, 20, 17, .18)
            ),
            linear-gradient(
              0deg,
              rgba(25, 20, 17, .35),
              transparent 45%
            );
        }

        .interior-hero-copy {
          width: min(780px, 82%);
          margin-left: 10%;
          padding: 70px 0 90px;
          animation: interior-hero-enter .8s .1s both;
        }

        .interior-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 20px;
          color: var(--ig);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
          line-height: 1.7;
        }

        .interior-eyebrow > span {
          width: 24px;
          height: 2px;
          background: var(--ig);
          flex-shrink: 0;
        }

        .interior-hero h1 {
          max-width: 780px;
          margin: 0;
          font: 500 clamp(44px, 5.9vw, 77px)/1.06
            'Playfair Display', Georgia, serif;
          letter-spacing: -1.8px;
        }

        .interior-hero-subtitle {
          max-width: 500px;
          margin: 23px 0 27px;
          color: #eee5d9;
          font-size: 12px;
          line-height: 1.95;
        }

        .interior-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
        }

        .interior-button {
          min-height: 45px;
          padding: 13px 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: var(--ig);
          color: #30261a;
          font-size: 10px;
          font-weight: 800;
          transition: transform .25s, background .25s;
        }

        .interior-button:hover {
          transform: translateY(-2px);
          background: #f1cd72;
        }

        .interior-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: white;
          font-size: 10px;
          font-weight: 700;
        }

        .interior-hero-location {
          position: absolute;
          left: 7%;
          right: 7%;
          bottom: 22px;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #f2e9dc;
          font-size: 8px;
          letter-spacing: 1.6px;
          font-weight: 700;
        }

        .interior-hero-location span {
          width: 36px;
          height: 1px;
          background: var(--ig);
        }

        .interior-quick-booking {
          position: relative;
          z-index: 3;
          width: 86%;
          max-width: 1300px;
          margin: 0 auto;
          padding: 24px 26px;
          display: grid;
          grid-template-columns: .72fr 2fr;
          align-items: center;
          gap: 25px;
          background: #fffdf8;
          border: 1px solid #e5dac8;
          box-shadow: 0 12px 35px #21180c0c;
        }

        .interior-quick-heading > span {
          color: var(--ir);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .interior-quick-heading h2 {
          margin: 7px 0 0;
          font: 500 22px/1.3 'Playfair Display', Georgia, serif;
        }

        .interior-quick-form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr)) auto;
          gap: 11px;
          align-items: end;
        }

        .interior-quick-form label {
          display: flex;
          flex-direction: column;
          gap: 7px;
          color: #65594b;
          font-size: 9px;
          font-weight: 700;
          min-width: 0;
        }

        .interior-quick-form input,
        .interior-quick-form select {
          width: 100%;
          min-width: 0;
          min-height: 42px;
          padding: 0 9px;
          border: 1px solid #ded4c5;
          border-radius: 0;
          background: white;
          color: #302820;
          font: inherit;
          font-size: 10px;
        }

        .interior-quick-form button {
          min-height: 42px;
          padding: 0 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border: 0;
          background: var(--ir);
          color: white;
          font-size: 10px;
          font-weight: 800;
          cursor: pointer;
          white-space: nowrap;
        }

        .interior-intro {
          padding: 75px 10%;
          display: grid;
          grid-template-columns: .95fr 1.05fr;
          align-items: start;
          gap: 8%;
        }

        .interior-small-label {
          margin: 0 0 19px;
          color: var(--ir);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.7px;
          line-height: 1.7;
        }

        .interior-intro h2,
        .interior-section-heading h2,
        .interior-meal-heading h2,
        .interior-conference-rate h2,
        .interior-detail-heading h2,
        .interior-faq-heading h2,
        .interior-related-heading h2,
        .interior-map-section h2 {
          margin: 0;
          font: 500 clamp(33px, 3.8vw, 49px)/1.15
            'Playfair Display', Georgia, serif;
          letter-spacing: -.8px;
        }

        .interior-intro-copy > p,
        .interior-detail-copy > p {
          margin: 0 0 16px;
          color: var(--im);
          font-size: 12px;
          line-height: 2;
        }

        .interior-rates {
          padding: 74px 10%;
          background: #f0e9dc;
        }

        .interior-section-heading {
          max-width: 570px;
          margin-bottom: 31px;
        }

        .interior-section-heading h2 i {
          color: var(--ir);
          font-weight: 500;
        }

        .interior-section-heading > p:last-child {
          margin: 15px 0 0;
          color: var(--im);
          font-size: 12px;
          line-height: 1.9;
        }

        .interior-rates-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
        }

        .interior-rate-card {
          min-width: 0;
          padding: 25px 22px 21px;
          display: flex;
          flex-direction: column;
          background: var(--ic);
          border: 1px solid #e2d8c7;
          transition: transform .3s, box-shadow .3s;
        }

        .interior-rate-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 35px #39281910;
        }

        .interior-rate-number {
          color: #877864;
          font-size: 8px;
          letter-spacing: 1.4px;
        }

        .interior-rate-card h3 {
          margin: 23px 0 17px;
          font: 500 24px/1.25 'Playfair Display', Georgia, serif;
        }

        .interior-rate-price {
          display: flex;
          align-items: baseline;
          gap: 7px;
          color: var(--ir);
        }

        .interior-rate-price span {
          font-size: 11px;
          font-weight: 700;
        }

        .interior-rate-price strong {
          font: 500 36px/1.1 'Playfair Display', Georgia, serif;
        }

        .interior-rate-card > p {
          margin: 7px 0 21px;
          color: var(--im);
          font-size: 9px;
        }

        .interior-rate-card > a {
          margin-top: auto;
          padding-top: 15px;
          border-top: 1px solid #e3dacd;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          color: var(--ir);
          font-size: 10px;
          font-weight: 800;
        }

        .interior-meal-prices {
          margin-top: 30px;
          padding: 30px;
          background: #fffdf8;
          border: 1px solid #e5dac8;
        }

        .interior-meal-heading h2 {
          font-size: clamp(27px, 3vw, 37px);
        }

        .interior-meal-heading > p:last-child {
          color: var(--im);
          font-size: 11px;
          line-height: 1.8;
        }

        .interior-meal-price-row {
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
          gap: 20px;
          padding: 16px 0;
          border-top: 1px solid #e8dfd2;
          font-size: 11px;
        }

        .interior-meal-price-row > strong {
          color: var(--ir);
          font: 500 22px/1.2 'Playfair Display', Georgia, serif;
          white-space: nowrap;
        }

        .interior-meal-price-row > small {
          color: var(--im);
          font-size: 9px;
          white-space: nowrap;
        }

        .interior-meal-price-enquiry > a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ir);
          font-weight: 800;
          font-size: 10px;
        }

        .interior-meal-disclaimer {
          color: var(--im);
          font-size: 10px;
          line-height: 1.8;
        }

        .interior-booking-button {
          margin-top: 10px;
        }

        .interior-highlights {
          padding: 40px 10%;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 27px;
          background: #fffdf8;
          border-top: 1px solid #e5dfd3;
          border-bottom: 1px solid #e5dfd3;
        }

        .interior-highlight {
          padding: 8px 18px 8px 0;
        }

        .interior-highlight-number {
          display: inline-block;
          margin-bottom: 16px;
          color: var(--ir);
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .interior-highlight h3 {
          margin: 0 0 10px;
          font: 500 23px/1.25 'Playfair Display', Georgia, serif;
        }

        .interior-highlight p {
          margin: 0;
          color: var(--im);
          font-size: 11px;
          line-height: 1.9;
        }

        .interior-conference-rate {
          padding: 45px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          background: #eee5d5;
        }

        .interior-conference-rate > div:first-child {
          max-width: 640px;
        }

        .interior-conference-rate h2 {
          font-size: clamp(30px, 3.5vw, 42px);
        }

        .interior-conference-rate > div:first-child > p:last-child {
          color: var(--im);
          font-size: 11px;
          line-height: 1.9;
        }

        .interior-conference-price {
          display: flex;
          align-items: baseline;
          gap: 8px;
          color: var(--ir);
          white-space: nowrap;
        }

        .interior-conference-price > span {
          font-size: 12px;
          font-weight: 700;
        }

        .interior-conference-price > strong {
          font: 500 40px/1.2 'Playfair Display', Georgia, serif;
        }

        .interior-detail-section {
          padding: 72px 10%;
          background: var(--ic);
        }

        .interior-detail-alt {
          background: #eee8dd;
        }

        .interior-detail-inner {
          display: grid;
          grid-template-columns: .86fr 1.14fr;
          gap: 8%;
          align-items: start;
        }

        .interior-detail-heading {
          position: sticky;
          top: 105px;
        }

        .interior-detail-copy ul {
          padding: 0;
          margin: 22px 0 0;
          list-style: none;
        }

        .interior-detail-copy li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          margin: 13px 0;
          color: #51483f;
          font-size: 11px;
          line-height: 1.8;
        }

        .interior-detail-copy li svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: var(--ir);
        }

        .interior-faq {
          padding: 76px 10%;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 8%;
          background: #fffdf8;
        }

        .interior-faq-heading > p:last-child {
          color: var(--im);
          font-size: 11px;
          line-height: 1.9;
        }

        .interior-faq-list {
          border-top: 1px solid #e5dfd3;
        }

        .interior-faq-item {
          padding: 18px 0;
          border-bottom: 1px solid #e5dfd3;
        }

        .interior-faq-item summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 17px;
          cursor: pointer;
          list-style: none;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.7;
        }

        .interior-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .interior-faq-item summary svg {
          flex-shrink: 0;
          color: var(--ir);
          transition: transform .2s;
        }

        .interior-faq-item[open] summary svg {
          transform: rotate(180deg);
        }

        .interior-faq-item > p {
          margin: 13px 28px 0 0;
          color: var(--im);
          font-size: 11px;
          line-height: 1.9;
        }

        .interior-related {
          padding: 73px 8%;
          background: #f0e9dc;
        }

        .interior-related-heading {
          margin-bottom: 30px;
        }

        .interior-related-heading > p:last-child {
          color: var(--im);
          font-size: 11px;
          line-height: 1.8;
        }

        .interior-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 17px;
        }

        .interior-related-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          background: #fffdf8;
          color: var(--ii);
          border: 1px solid #e5dbcb;
          overflow: hidden;
          transition: transform .25s, box-shadow .25s;
        }

        .interior-related-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 35px #30231612;
        }

        .interior-related-card > img {
          display: block;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .interior-related-card > div {
          flex: 1;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .interior-related-card h3 {
          margin: 0 0 10px;
          font: 500 22px/1.25 'Playfair Display', Georgia, serif;
        }

        .interior-related-card p {
          margin: 0 0 17px;
          color: var(--im);
          font-size: 10px;
          line-height: 1.8;
        }

        .interior-related-card span {
          width: 100%;
          margin-top: auto;
          padding-top: 13px;
          border-top: 1px solid #e5dfd3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--ir);
          font-size: 10px;
          font-weight: 800;
        }

        .interior-map-section {
          padding: 70px 10%;
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          align-items: center;
          gap: 7%;
          background: #f0e9dc;
        }

        .interior-map-copy > p:not(.interior-small-label) {
          color: var(--im);
          font-size: 11px;
          line-height: 1.9;
        }

        .interior-map-section iframe {
          display: block;
          width: 100%;
          height: 350px;
          border: 6px solid white;
          background: #eee5d5;
        }

        .interior-contact-band {
          padding: 65px 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 35px;
          background: var(--ir);
          color: white;
        }

        .interior-contact-band .interior-eyebrow {
          margin-bottom: 15px;
        }

        .interior-contact-band h2 {
          margin: 0;
          font: 500 clamp(34px, 4vw, 49px)/1.12
            'Playfair Display', Georgia, serif;
        }

        .interior-contact-band h2 i {
          color: var(--ig);
          font-weight: 500;
        }

        .interior-contact-band > div:first-child > p:last-child {
          max-width: 460px;
          color: #f1dcd6;
          font-size: 11px;
          line-height: 1.9;
        }

        .interior-contact-actions {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          flex-shrink: 0;
        }

        .interior-contact-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: white;
          font-size: 10px;
          font-weight: 700;
        }

        .interior-footer {
          padding: 45px 7% 0;
          background: #29231d;
          color: #eee6d8;
        }

        .interior-footer-main {
          display: grid;
          grid-template-columns: 1.15fr .95fr 1fr .9fr;
          gap: 30px;
          padding-bottom: 39px;
        }

        .interior-footer-brand {
          color: #eee6d8;
        }

        .interior-footer-brand-col > p {
          margin: 20px 0 0;
          font: 500 22px/1.35 'Playfair Display', Georgia, serif;
        }

        .interior-footer-brand-col > p i {
          color: var(--ig);
        }

        .interior-footer-links,
        .interior-footer-contact {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
        }

        .interior-footer-links h3,
        .interior-footer-contact h3 {
          margin: 5px 0 8px;
          color: var(--ig);
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .interior-footer-links a,
        .interior-footer-contact a,
        .interior-footer-contact > span {
          color: #d7cfc4;
          font-size: 10px;
          line-height: 1.7;
        }

        .interior-footer-links a:hover,
        .interior-footer-contact a:hover {
          color: var(--ig);
        }

        .interior-footer-bottom {
          min-height: 54px;
          padding: 15px 0;
          border-top: 1px solid #52473a;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 13px;
          color: #c9beb0;
          font-size: 8px;
          letter-spacing: .8px;
        }

        .interior-footer-bottom a {
          color: var(--ig);
        }

        .interior-whatsapp {
          position: fixed;
          right: 21px;
          bottom: 21px;
          z-index: 50;
          width: 47px;
          height: 47px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #75603d;
          border-radius: 50%;
          background: #29231d;
          color: var(--ig);
          box-shadow: 0 8px 25px #0003;
        }

        .interior-reveal {
          opacity: 1;
          transform: translateY(0);
          transition: opacity .65s ease, transform .65s ease;
        }

        .interior-motion-ready .interior-reveal:not(.is-visible) {
          opacity: 0;
          transform: translateY(22px);
        }

        .interior-motion-ready .interior-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes interior-hero-zoom {
          from {
            transform: scale(1.055);
          }

          to {
            transform: scale(1);
          }
        }

        @keyframes interior-hero-enter {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1100px) {
          .interior-nav {
            padding-left: 5%;
            padding-right: 5%;
          }

          .interior-links {
            gap: 12px;
          }

          .interior-links > a:not(.interior-nav-cta) {
            font-size: 9px;
          }

          .interior-quick-booking {
            width: 90%;
            grid-template-columns: 1fr;
          }

          .interior-quick-form {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .interior-quick-form button {
            grid-column: 1 / -1;
          }

          .interior-intro,
          .interior-rates,
          .interior-detail-section,
          .interior-faq,
          .interior-contact-band,
          .interior-map-section,
          .interior-conference-rate {
            padding-left: 7%;
            padding-right: 7%;
          }

          .interior-footer-main {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 760px) {
          .interior-topline {
            padding: 9px 5%;
            font-size: 7px;
          }

          .interior-topline-slogan {
            display: none;
          }

          .interior-nav {
            min-height: 72px;
            padding: 10px 5%;
          }

          .interior-brand img {
            width: 41px;
            height: 41px;
          }

          .interior-brand b {
            font-size: 16px;
          }

          .interior-menu-toggle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }

          .interior-links {
            position: absolute;
            left: 0;
            right: 0;
            top: 100%;
            z-index: 30;
            padding: 12px 5% 22px;
            display: none;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            background: var(--ic);
            box-shadow: 0 15px 25px #00000010;
          }

          .interior-links.open {
            display: flex;
          }

          .interior-links > a:not(.interior-nav-cta) {
            padding: 14px 0;
            border-bottom: 1px solid #e6ded2;
            font-size: 12px;
          }

          .interior-links .interior-nav-cta {
            margin-top: 14px;
          }

          .interior-hero {
            min-height: 480px;
          }

          .interior-hero-shade {
            background:
              linear-gradient(90deg, #181411df, #18141165 100%),
              linear-gradient(0deg, #18141182, transparent 65%);
          }

          .interior-hero-copy {
            width: 86%;
            margin-left: 7%;
            padding: 55px 0 80px;
          }

          .interior-hero h1 {
            font-size: clamp(40px, 9vw, 59px);
          }

          .interior-hero-subtitle {
            font-size: 12px;
          }

          .interior-hero-location {
            left: 7%;
            right: 7%;
            bottom: 18px;
            font-size: 7px;
          }

          .interior-quick-booking {
            width: 100%;
            padding: 25px 7%;
            grid-template-columns: 1fr;
          }

          .interior-intro {
            padding: 55px 7%;
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .interior-intro h2 {
            font-size: 38px;
          }

          .interior-rates {
            padding: 55px 7%;
          }

          .interior-rates-grid {
            grid-template-columns: 1fr;
          }

          .interior-rate-card {
            padding: 23px;
          }

          .interior-meal-prices {
            padding: 22px 16px;
          }

          .interior-meal-price-row {
            gap: 10px;
          }

          .interior-meal-price-row > strong {
            font-size: 19px;
          }

          .interior-meal-price-row > small {
            font-size: 8px;
          }

          .interior-highlights {
            grid-template-columns: 1fr;
            gap: 15px;
            padding: 29px 7%;
          }

          .interior-highlight {
            padding: 8px 0 17px;
            border-bottom: 1px solid #e5dfd3;
          }

          .interior-highlight:last-child {
            border-bottom: 0;
          }

          .interior-highlight-number {
            margin-bottom: 9px;
          }

          .interior-detail-section {
            padding: 55px 7%;
          }

          .interior-detail-inner {
            grid-template-columns: 1fr;
            gap: 23px;
          }

          .interior-detail-heading {
            position: static;
          }

          .interior-detail-heading h2,
          .interior-faq-heading h2,
          .interior-related-heading h2,
          .interior-map-section h2 {
            font-size: 35px;
          }

          .interior-faq {
            padding: 55px 7%;
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .interior-related {
            padding: 55px 7%;
          }

          .interior-related-grid {
            grid-template-columns: 1fr;
          }

          .interior-related-card > img {
            height: 230px;
          }

          .interior-conference-rate {
            padding: 38px 7%;
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .interior-contact-band {
            padding: 48px 7%;
            align-items: flex-start;
            flex-direction: column;
            gap: 24px;
          }

          .interior-contact-band h2 {
            font-size: 37px;
          }

          .interior-map-section {
            padding: 55px 7%;
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .interior-map-section iframe {
            height: 310px;
          }

          .interior-footer {
            padding: 38px 7% 0;
          }

          .interior-footer-main {
            gap: 29px 18px;
          }

          .interior-footer-bottom {
            padding: 16px 0;
            align-items: flex-start;
            flex-direction: column;
          }

          .interior-whatsapp {
            right: 13px;
            bottom: 13px;
            width: 44px;
            height: 44px;
          }
        }

        @media (max-width: 420px) {
          .interior-quick-form {
            grid-template-columns: 1fr;
          }

          .interior-quick-form button {
            grid-column: auto;
          }

          .interior-meal-price-row {
            grid-template-columns: 1fr auto;
          }

          .interior-meal-price-row > small {
            grid-column: 1 / -1;
          }

          .interior-meal-price-enquiry > a {
            grid-column: 1 / -1;
          }

          .interior-footer-main {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .interior-page *,
          .interior-page *::before,
          .interior-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }

          .interior-reveal {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </main>
  );
}
