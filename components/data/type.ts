export type Sender = 'elena' | 'daniel';

export interface Message {
  id: string;
  sender: Sender;
  senderName: string;
  senderAvatar: string;
  text?: string;
  imageUrl?: string;
  imageCaption?: string;
  audioDuration?: string;
  audioWaveform?: number[];
  audioTranscript?: string;
  timestamp: string;
  reaction?: string;
}

export interface ValuePillar {
  id: 'remember-you' | 'understand-you' | 'get-closer';
  number: string;
  title: string;
  description: string;
  detail: string;
}

export interface CompanionPersona {
  id: string;
  name: string;
  subtitle: string;
  image: string;
  intro: string;
}
