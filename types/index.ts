export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
  registrationUrl?: string;
}

export interface Program {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  impact: string;
  needs: string[];
}
