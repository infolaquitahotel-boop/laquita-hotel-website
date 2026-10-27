
export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  image: string;
  imageAlt: string;
  imageNote?: string;
  introduction: string[];
  sections: BlogSection[];
  serviceLabel: string;
  serviceHref: string;
  callToAction: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-accommodation-in-nakuru-kenya',
    title: 'How to Choose Accommodation in Nakuru, Kenya',
    category: 'Accommodation Guide',
    excerpt:
      'Planning a visit to Nakuru? Here are practical questions to ask when choosing a hotel, comparing room options and preparing for a comfortable stay.',
    description:
      'Learn how to choose accommodation in Nakuru, Kenya. Compare room options, location, breakfast arrangements, booking terms and guest facilities before you travel.',
    image: '/images/laquita-room2.JPG',
    imageAlt: 'Room image featured by La Quita Hotel & Suites',
    introduction: [
      'Choosing where to stay can shape the experience of a trip. Whether you are visiting Nakuru for work, travelling through Kenya or arranging a leisure visit, the right accommodation should suit your schedule, budget and practical needs.',
      'Before making a reservation, look beyond the headline price. Ask clear questions about the room, location, services, booking terms and what is included. This guide will help you compare your options and prepare for your visit.',
    ],
    sections: [
      {
        heading: '1. Start with the purpose of your trip',
        paragraphs: [
          'A business trip may require convenient access to your meetings, predictable arrangements and a suitable place to rest after a busy day. A leisure trip may place greater emphasis on your plans around Nakuru, your preferred room and the services you expect to use.',
          'If you are travelling through the area, think about your expected arrival time and the length of your stay. Explaining your needs clearly when enquiring helps a hotel respond with information relevant to your plans.',
        ],
        bullets: [
          'Decide your arrival and departure dates.',
          'Work out how many people will be staying.',
          'List any essential room or facility requirements.',
          'Set a budget for accommodation and additional services.',
        ],
      },
      {
        heading: '2. Compare the complete cost, not just the room price',
        paragraphs: [
          'A quoted rate may cover different things at different hotels. For example, breakfast may be included in one package and charged separately in another. Ask for a clear explanation of what your chosen rate includes before comparing it with other options.',
          'Also ask about deposits, payment methods, cancellation terms and any additional charges that could apply. This is especially important when planning a trip from abroad, because you want to understand the booking conditions before committing to travel.',
        ],
      },
      {
        heading: '3. Check the location and facilities',
        paragraphs: [
          'Consider where you need to be during your visit and how you will get there. If you are coming to Pipeline, Nakuru, ask the hotel for directions and confirm its location before travelling. A map search can help you understand the surrounding area, but confirm the route and destination before setting off.',
          'Facilities should be checked against your actual needs. If internet access, parking, a restaurant, a lounge or conference facilities matters to you, ask whether the service is available for your dates and whether any specific conditions apply.',
        ],
      },
      {
        heading: '4. Look for clear and useful information',
        paragraphs: [
          'A hotel enquiry should help you establish what you are booking. Ask about room types, occupancy, check-in requirements and the services included in your rate. Request current photographs if you need to inspect a particular room or facility before making your decision.',
          'Website images can help you discover a property, but it is sensible to verify details directly. If an image is illustrative rather than an actual photograph, ask the hotel for current images of the facility you intend to use.',
        ],
      },
      {
        heading: '5. Plan ahead if you are travelling internationally',
        paragraphs: [
          'When travelling to Kenya from another country, arrange the accommodation details before departure where possible. Confirm the booking, payment arrangements, contact number, check-in requirements and any information you may need to provide on arrival.',
          'Keep a copy of your reservation confirmation and the hotel contact details accessible while travelling. If your travel plans change, contact the hotel as early as possible and ask what options are available under your booking terms.',
        ],
      },
      {
        heading: 'Enquire about a stay at La Quita',
        paragraphs: [
          'La Quita Hotel & Suites is located in Pipeline, Nakuru, Kenya. If you are considering a stay, contact our team with your dates, number of guests and whether you are interested in bed and breakfast. We can respond to your enquiry with the current rates, availability and booking details that apply.',
        ],
      },
    ],
    serviceLabel: 'Explore accommodation',
    serviceHref: '/accommodation',
    callToAction:
      'Hello La Quita Hotel & Suites. I read your accommodation guide and would like to enquire about room rates, availability and booking arrangements.',
  },

  {
    slug: 'planning-a-stay-in-nakuru-kenya',
    title: 'Planning a Stay in Nakuru, Kenya: A Practical Guide',
    category: 'Travel Planning',
    excerpt:
      'Organising a visit to Nakuru? Prepare your accommodation, transport, daily schedule and essential travel details before you arrive.',
    description:
      'Planning a trip to Nakuru, Kenya? Use this practical checklist to organise accommodation, transport, daily plans and hotel arrangements before arrival.',
    image: '/images/laquita-exterior.JPG',
    imageAlt: 'Exterior of La Quita Hotel & Suites in Nakuru',
    introduction: [
      'Nakuru can be a destination in its own right or one stop within a wider journey through Kenya. Whether you are visiting for business, family commitments or leisure, a little preparation helps you organise the practical details and make better use of your time.',
      'The most useful travel plan is one that reflects your own dates, priorities and budget. Use the following checklist to prepare for your stay, then confirm accommodation and other arrangements directly with your chosen providers.',
    ],
    sections: [
      {
        heading: '1. Confirm your travel dates and priorities',
        paragraphs: [
          'Begin by identifying your arrival and departure dates, the reason for your visit and the activities or appointments you need to fit into your schedule. If your plans include meetings, decide where and when you need to be present so you can consider travel time between activities.',
          'Leave some flexibility in your schedule where possible. Travel plans, meeting times and personal arrangements can change, so it helps to know which parts of your itinerary are fixed and which can be adjusted.',
        ],
        bullets: [
          'Write down your travel dates and essential appointments.',
          'Confirm the address of any meeting or event.',
          'Allow time for transport between activities.',
          'Keep important booking confirmations together.',
        ],
      },
      {
        heading: '2. Organise your accommodation early',
        paragraphs: [
          'Once your dates are known, contact accommodation providers to ask about availability, rates and booking conditions. Give them the correct dates and number of guests so the information you receive applies to your trip.',
          'If you need breakfast, parking, internet access or another service, ask whether it is available and whether it is included in your rate. Do not assume that a service is included without confirmation.',
        ],
      },
      {
        heading: '3. Prepare for your arrival',
        paragraphs: [
          'Before setting off, check the hotel address, contact number and route. If you are travelling from outside Kenya, contact the hotel in advance to confirm the check-in process, required identification and booking details.',
          'For international trips, also check current entry requirements, transport options and travel advice through the relevant official sources for your nationality and circumstances. A hotel can help with its own booking information, but it cannot replace official travel guidance.',
        ],
      },
      {
        heading: '4. Build an itinerary that fits your visit',
        paragraphs: [
          'Your itinerary should reflect what you actually want to do. Business travellers may need to prioritise appointments and time for preparation. Leisure visitors might allow more time for exploring the area, having meals and resting between activities.',
          'If you plan to visit attractions outside your hotel, check opening arrangements, travel time, transport options and any booking requirements directly with the relevant attraction or service provider. Avoid building your schedule around unconfirmed times.',
        ],
      },
      {
        heading: '5. Keep useful contacts close',
        paragraphs: [
          'Save your hotel contact number, booking confirmation and transport details before departure. If your arrival time changes, contact your accommodation provider to ask whether any adjustment is needed.',
          'La Quita Hotel & Suites is located in Pipeline, Nakuru. You can contact our team before your trip to enquire about accommodation, bed and breakfast, restaurant and lounge services, or meetings and conferences.',
        ],
      },
      {
        heading: 'Start planning with La Quita',
        paragraphs: [
          'A useful enquiry includes the dates you plan to visit, the number of guests and the services you would like to ask about. Our team can then respond with current information and explain the next steps for your enquiry.',
        ],
      },
    ],
    serviceLabel: 'Contact the hotel',
    serviceHref: '/contact',
    callToAction:
      'Hello La Quita Hotel & Suites. I am planning a visit to Nakuru and would like information about your services and accommodation.',
  },

  {
    slug: 'what-to-ask-before-booking-bed-and-breakfast-in-nakuru',
    title: 'What to Ask Before Booking Bed and Breakfast in Nakuru',
    category: 'Booking Advice',
    excerpt:
      'Understand what a bed and breakfast rate includes, how to compare packages and which details to confirm before you book.',
    description:
      'Booking bed and breakfast in Nakuru? Learn what to ask about breakfast, room rates, occupancy, check-in, payment and cancellation conditions.',
    image: '/images/laquita-room.jpg',
    imageAlt: 'Accommodation image featured by La Quita Hotel & Suites',
    introduction: [
      'Bed and breakfast can be a convenient option for travellers who want to arrange their room and morning meal together. However, packages do not always include the same things, so it is important to establish exactly what is being offered.',
      'Before booking bed and breakfast in Nakuru, ask a few practical questions about the price, breakfast arrangements, occupancy and booking conditions. Clear information makes it easier to compare options and avoid surprises.',
    ],
    sections: [
      {
        heading: '1. Is breakfast included in the quoted price?',
        paragraphs: [
          'Start by asking whether breakfast is included in the room rate or offered as an additional option. If it is included, ask what the package covers and whether there are any conditions or differences between room rates.',
          'If breakfast is important to your schedule, ask about the available service times and whether an arrangement can be made around an early departure. The hotel needs to confirm its current arrangements before you rely on them.',
        ],
      },
      {
        heading: '2. What is the total price for your dates?',
        paragraphs: [
          'Rates may vary depending on the dates, room type, number of guests and package selected. Ask for the price that applies to your actual stay rather than relying on an old advertisement or a rate quoted for another date.',
          'Check whether taxes, meals, extra guests or other services affect the total. Ask the hotel to explain the complete price and any additional charges before you confirm.',
        ],
        bullets: [
          'Your check-in and check-out dates',
          'Number of guests and room occupancy',
          'What is included in the selected package',
          'Any deposits or additional charges',
        ],
      },
      {
        heading: '3. What room and facilities are available?',
        paragraphs: [
          'Ask about the room type, occupancy and facilities relevant to your visit. If you need internet access, parking or another particular amenity, verify that it is available and clarify any relevant conditions.',
          'If you are booking from abroad, request current photos of the room if you need to inspect its layout or appearance. Make sure the images and the written description refer to the room or category you are considering.',
        ],
      },
      {
        heading: '4. How does the booking and cancellation process work?',
        paragraphs: [
          'Before sending money or making non-refundable travel arrangements, establish how the hotel confirms reservations, what payment methods it accepts and whether a deposit is required.',
          'Ask about cancellation, changes to dates, late arrival and any identification required at check-in. Keep written confirmation of the booking and its applicable conditions.',
        ],
      },
      {
        heading: '5. What should international visitors confirm?',
        paragraphs: [
          'International guests should make sure the booking details are clear before leaving home. Confirm the hotel address, arrival procedure, payment arrangements and how to contact the hotel if travel is delayed.',
          'For any immigration or entry requirements, consult the official government sources relevant to your nationality. Your hotel can clarify its reservation and check-in procedures but should not be treated as the source for all border-entry rules.',
        ],
      },
      {
        heading: 'Ask La Quita about bed and breakfast',
        paragraphs: [
          'If you are considering bed and breakfast at La Quita Hotel & Suites in Pipeline, Nakuru, send your preferred dates and number of guests through WhatsApp. Ask the team to confirm the current package, rate, availability and booking conditions before making a reservation.',
        ],
      },
    ],
    serviceLabel: 'Ask about bed and breakfast',
    serviceHref: '/accommodation',
    callToAction:
      'Hello La Quita Hotel & Suites. I would like to enquire about bed and breakfast in Nakuru. Please share current prices, availability and what is included.',
  },

  {
    slug: 'planning-a-meeting-or-seminar-in-nakuru',
    title: 'Planning a Meeting or Seminar in Nakuru: A Venue Checklist',
    category: 'Business Travel',
    excerpt:
      'Organising a business meeting, workshop or seminar? Use this checklist to plan your requirements and ask the right questions before selecting a venue.',
    description:
      'Planning a meeting, workshop or seminar in Nakuru, Kenya? Learn what to confirm about venue capacity, layout, equipment, catering, costs and booking terms.',
    image: '/images/laquita-conference.jpg',
    imageAlt: 'Illustrative conference-space visual for La Quita Hotel & Suites',
    imageNote:
      'This conference image is an illustrative rendering, not a verified photograph of the actual venue. Request current photographs and confirm the available facilities with the hotel.',
    introduction: [
      'A well-organised meeting starts with a clear understanding of the event. Before choosing a venue in Nakuru, define what the gathering needs to achieve, how many people will attend and which practical facilities are essential.',
      'A venue checklist helps you compare options more fairly and request the details an organiser needs before committing to a date. Confirm capacities, equipment, packages and prices directly with the venue rather than assuming they are included.',
    ],
    sections: [
      {
        heading: '1. Define the meeting format and attendance',
        paragraphs: [
          'A small discussion, classroom-style training session and presentation may need different layouts. Estimate the number of attendees and identify whether participants will need tables, presentation visibility, space for group work or another specific arrangement.',
          'When making an enquiry, explain the type of event and the intended seating plan. Ask the venue to confirm its actual capacity for that arrangement; a room’s maximum standing capacity may not suit your preferred meeting layout.',
        ],
        bullets: [
          'Event type and intended outcome',
          'Estimated number of attendees',
          'Preferred seating and room arrangement',
          'Start time, finish time and setup requirements',
        ],
      },
      {
        heading: '2. Ask about equipment and connectivity',
        paragraphs: [
          'Prepare a list of the equipment your event requires. This may include presentation equipment, power access, a suitable display, sound support or internet connectivity, depending on the event.',
          'Do not assume specific equipment or internet performance is included. Ask the venue to confirm availability, any extra charges and whether you can test essential equipment before the meeting begins.',
        ],
      },
      {
        heading: '3. Clarify catering and breaks',
        paragraphs: [
          'For a longer seminar or training day, you may want to enquire about meal and refreshment arrangements. Confirm what is available, the price per person if applicable, service timings and any arrangements for attendees with dietary requirements.',
          'If the venue offers several options, request a written summary so you can compare the total event cost rather than only the room-hire charge.',
        ],
      },
      {
        heading: '4. Get a clear quotation',
        paragraphs: [
          'A useful quotation should explain the date, duration, venue arrangement, included facilities and any extra charges. Ask about the deposit, payment terms, cancellation policy and what happens if the group size changes.',
          'If your organisation requires procurement approval, ask for the information needed to assess the proposal before you confirm the booking.',
        ],
      },
      {
        heading: '5. Plan for delegates travelling from abroad',
        paragraphs: [
          'If attendees are coming to Nakuru from outside Kenya, provide clear information about the venue location, local start times and the schedule. Confirm the exact address and discuss accommodation enquiries separately if delegates require overnight stays.',
          'Share the confirmed event information with participants before they travel. That should include the meeting location, arrival time, contact person and any practical details the venue has confirmed.',
        ],
      },
      {
        heading: 'Enquire about meetings at La Quita',
        paragraphs: [
          'La Quita Hotel & Suites welcomes enquiries about meetings, seminars, workshops and conferences in Pipeline, Nakuru. Tell the team your preferred date, estimated attendance, event format, equipment needs and any catering or accommodation requirements.',
          'The hotel should confirm actual venue capacity, facilities, current prices and availability. Conference visuals on this website may be illustrative renderings, so request current photographs or arrange to see the actual space before making your decision.',
        ],
      },
    ],
    serviceLabel: 'Enquire about conferences',
    serviceHref: '/conferences',
    callToAction:
      'Hello La Quita Hotel & Suites. I am planning a meeting or seminar in Nakuru. Please share the venue capacity, available facilities, packages and rates.',
  },
];
