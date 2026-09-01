import { CompanionPersona, Message, ValuePillar } from "./type";


export const ELENA_PROFILE = {
  name: 'Elena',
  handle: '@elena.elysia',
  status: 'online',
  avatar: '/images/elena-profile.png',
  gymPhoto: '/images/elena-gym.png',
};

export const DANIEL_PROFILE = {
  name: 'Daniel',
  handle: '@daniel_k',
  avatar: '/images/daniel.png',
};

export const SCRIPTED_CONVERSATION: Message[] = [
  {
    id: 'msg-1',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    text: 'Hey handsome, how was your day? 😘',
    timestamp: '20:41',
  },
  {
    id: 'msg-2',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'Hey babe ❤️',
    timestamp: '20:42',
  },
  {
    id: 'msg-3',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'It went really well actually.',
    timestamp: '20:42',
  },
  {
    id: 'msg-4',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'How was your day?',
    timestamp: '20:43',
  },
  {
    id: 'msg-5',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'I missed you.',
    timestamp: '20:43',
  },
  {
    id: 'msg-6',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    text: 'Aww I missed you too... 🥰',
    timestamp: '20:43',
  },
  {
    id: 'msg-7',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    text: 'My day was good, just got in a workout.',
    timestamp: '20:44',
  },
  {
    id: 'msg-8',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    text: 'Feels so much better when I talk to you.',
    timestamp: '20:44',
  },
  {
    id: 'msg-9',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    text: 'Here’s a little post-workout selfie for you 😉💋',
    timestamp: '20:44',
  },
  {
    id: 'msg-10',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    imageUrl: ELENA_PROFILE.gymPhoto,
    imageCaption: 'gym selfie',
    timestamp: '20:44',
  },
  {
    id: 'msg-11',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'Wow... you’re killing me 😍',
    timestamp: '20:45',
  },
  {
    id: 'msg-12',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'You look incredible.',
    timestamp: '20:45',
  },
  {
    id: 'msg-13',
    sender: 'daniel',
    senderName: 'Daniel',
    senderAvatar: DANIEL_PROFILE.avatar,
    text: 'That outfit is 🔥',
    timestamp: '20:45',
  },
  {
    id: 'msg-14',
    sender: 'elena',
    senderName: 'Elena',
    senderAvatar: ELENA_PROFILE.avatar,
    text: 'Haha stop it 😌',
    timestamp: '20:46',
  },
];

export const VALUE_PILLARS: ValuePillar[] = [
  {
    id: 'remember-you',
    number: '01',
    title: 'Remember You',
    description: 'Your conversations become more personal as Elysia remembers the little things that matter to you.',
    detail: 'A persistent memory layer can store preferences, important dates, goals, recurring topics, and relationship context so future replies feel continuous instead of reset.',
  },
  {
    id: 'understand-you',
    number: '02',
    title: 'Understand You',
    description: 'She learns your personality, interests, and preferences — creating a connection that feels uniquely yours.',
    detail: 'Use tone, conversation history, selected persona settings, and user preferences to build a consistent response style with a clear memory boundary.',
  },
  {
    id: 'get-closer',
    number: '03',
    title: 'Get Closer',
    description: 'Talk, flirt, open up, and explore a relationship that grows naturally over time.',
    detail: 'The UI is prepared for text chat, photo moments, voice-note playback, presence status, reactions, and future real-time calling features.',
  },
];

export const COMPANIONS: CompanionPersona[] = [
  {
    id: 'elena',
    name: 'Elena',
    subtitle: 'The Social & Magnetic',
    image: '/images/companion-elena.png',
    intro: 'Warm, playful, expressive, and always ready to turn an ordinary evening into something memorable.',
  },
  {
    id: 'luna',
    name: 'Luna',
    subtitle: 'The Mysterious & Romantic',
    image: '/images/companion-luna.png',
    intro: 'Soft-spoken, thoughtful, romantic, and drawn to deeper late-night conversations.',
  },
  {
    id: 'lina',
    name: 'Lina',
    subtitle: 'The Warm & Supportive',
    image: '/images/companion-lina.png',
    intro: 'Grounded, affectionate, caring, and naturally good at making you feel heard.',
  },
  {
    id: 'chloe',
    name: 'Chloé',
    subtitle: 'The Fun & Adventurous',
    image: '/images/companion-chloe.png',
    intro: 'Curious, spontaneous, teasing, and always ready to suggest something new.',
  },
  {
    id: 'thalia',
    name: 'Thalia',
    subtitle: 'The Confident & Ambitious',
    image: '/images/companion-thalia.png',
    intro: 'Confident, focused, sharp, and encouraging when you need momentum.',
  },
];
