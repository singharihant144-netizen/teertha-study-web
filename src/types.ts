export interface StudentProfile {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  targetExam: 'MHT-CET' | 'JEE' | 'NEET' | 'HSC Board' | 'General Counseling';
  joinedAt: string;
}

export interface Lecture {
  id: string;
  title: string;
  subject: 'Chemistry' | 'Physics' | 'Mathematics' | 'Biology' | 'Counseling';
  category: 'mht-cet' | 'hsc-board' | 'counseling' | 'pyq';
  youtubeId: string;
  duration: string;
  views?: string;
  chapter: string;
  hasNotes: boolean;
  notesTitle?: string;
  notesSize?: string;
  notesDownloadUrl?: string;
}

export interface StudyMaterial {
  id: string;
  title: string;
  subject: string;
  category: string;
  chapter: string;
  fileSize: string;
  pages: number;
  downloadCount: number;
  badge?: string;
  downloadUrl: string;
}

export interface Batch {
  id: string;
  title: string;
  tagline: string;
  targetYear: string;
  badge: string;
  totalLectures: number;
  totalNotes: number;
  isFree: boolean;
}
