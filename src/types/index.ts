export interface Entry {
  date: number;
  month: string;
  text: string;
  points: number;
}

export interface Stats {
  totalHours: number;
  totalPoints: number;
  topics: string[];
}

export interface UserProfile {
  email: string;
  initials: string;
  points: number;
}