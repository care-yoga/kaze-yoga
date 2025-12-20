
import { Instructor, YogaClass, DailySchedule } from './types';
import React from 'react';
import { Leaf, Sun, Moon, Heart, Wind } from 'lucide-react';

/**
 * ============================================================
 * 【編集エリア】ここを書き換えるだけでサイト全体に反映されます
 * ============================================================
 */

// 1. 予約用 GoogleフォームのURL
export const GOOGLE_FORM_URL = "https://forms.gle/qqgSzXNSrVGtpWMo6";

// 2. SNSリンクのURL設定
export const SOCIAL_URLS = {
  INSTAGRAM: "https://www.instagram.com/kaze_yoga_kokokara_care/",
  FACEBOOK: "",
  TWITTER: ""
};

// 3. ロゴ画像URL (Google Driveの画像IDを使用)
export const LOGO_IMAGE_URL = "https://drive.google.com/thumbnail?id=1KBg8fVB5mmZVdLv8KoBOg2bwv89UAXMY&sz=w500";

/**
 * ============================================================
 * 以下はコンテンツの詳細設定です
 * ============================================================
 */

export const INSTRUCTORS: Instructor[] = [
  {
    id: '1',
    name: 'KAZUKI',
    role: '風ヨガサークル代表',
    bio: '金曜の夜、心と体を癒すリラックスヨガを中心に活動しています。理学療法士の知見を活かし、無理なく続けられる、心地よい時間を提供します。',
    imageUrl: 'https://drive.google.com/thumbnail?id=1C9P999RfU-p11z0npaZkeIsvY8mXvd9E&sz=w1000',
    qualifications: ['理学療法士', '全米ヨガアライアンスRYT200']
  }
];

export const CLASSES: (YogaClass & { icon: React.ReactNode })[] = [
  {
    id: 'relax',
    title: 'リラックスヨガ',
    description: '金曜の夜、1週間の疲れを癒やすためのクラスです。深い呼吸とともに、ゆっくりと体を伸ばします。',
    intensity: 1,
    duration: '60分',
    icon: <Moon className="w-6 h-6 text-indigo-400" />
  },
  {
    id: 'body-care',
    title: '姿勢・肩こり改善',
    description: 'デスクワークや家事で固まった肩・首周りを丁寧にほぐします。正しい姿勢を意識して、スッキリとした体へ。',
    intensity: 1,
    duration: '60分',
    icon: <Heart className="w-6 h-6 text-rose-400" />
  },
  {
    id: 'breeze',
    title: '風フロー',
    description: '心身の巡りを良くする、優しい動きのフロースタイル。初心者の方でも安心してご参加いただけます。',
    intensity: 2,
    duration: '60分',
    icon: <Wind className="w-6 h-6 text-breeze-400" />
  }
];

export const WEEKLY_SCHEDULE: DailySchedule[] = [
  { day: '月曜日', classes: [] },
  { day: '火曜日', classes: [] },
  { day: '水曜日', classes: [] },
  { day: '木曜日', classes: [] },
  {
    day: '金曜日',
    classes: [
      { time: '19:00', className: 'リラックスヨガ', instructor: 'KAZUKI' }
    ]
  },
  { day: '土曜日', classes: [] },
  { day: '日曜日', classes: [] }
];
