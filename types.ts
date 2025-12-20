export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  qualifications?: string[];
}

export interface YogaClass {
  id: string;
  title: string;
  description: string;
  intensity: 1 | 2 | 3; // 1: Low, 2: Medium, 3: High
  duration: string;
  image?: string;
}

export interface ScheduleItem {
  time: string;
  className: string;
  instructor: string;
}

export interface DailySchedule {
  day: string;
  classes: ScheduleItem[];
}