// Mock data for AgroVision AI

export const supportedCrops = [
  { id: 'rice', name: 'ধান', icon: '🌾' },
  { id: 'wheat', name: 'গম', icon: '🌾' },
  { id: 'tomato', name: 'টমেটো', icon: '🍅' },
  { id: 'potato', name: 'আলু', icon: '🥔' },
  { id: 'corn', name: 'ভুট্টা', icon: '🌽' },
  { id: 'banana', name: 'কলা', icon: '🍌' },
  { id: 'chili', name: 'মরিচ', icon: '🌶️' },
  { id: 'cucumber', name: 'শসা', icon: '🥒' },
  { id: 'mango', name: 'আম', icon: '🥭' },
]

export const mockDiseaseResult = {
  cropName: 'টমেটো',
  diseaseName: 'আর্লি ব্লাইট',
  confidenceScore: 96,
  severity: 'মাঝারি',
  description: 'আর্লি ব্লাইট একটি ছত্রাকজনিত রোগ যা Alternaria solani দ্বারা সৃষ্ট। এটি পাতায় বাদামি রঙের গোলাকার দাগ সৃষ্টি করে যা ধীরে ধীরে বড় হয়।',
  affectedParts: ['পাতা', 'কাণ্ড', 'ফল'],
  recommendedMedicine: 'ম্যানকোজেব',
  organicSolution: 'নিম তেলের স্প্রে',
  spraySchedule: 'প্রতি ৭ দিন পর',
  preventionTips: [
    'ফসল রোটেশন করুন',
    'আক্রান্ত পাতা অপসারণ করুন',
    'সেচ ব্যবস্থাপনা ঠিক রাখুন',
    'রোগ প্রতিরোধী জাত বাছাই করুন',
  ],
  weatherAlert: 'আগামী ৩ দিন বৃষ্টির সম্ভাবনা - স্প্রে করা থেকে বিরত থাকুন',
}

export const mockDashboardStats = {
  totalScans: 156,
  healthyCrops: 89,
  infectedCrops: 67,
  detectionAccuracy: 94.5,
}

export const mockRecentScans = [
  { id: 1, crop: 'টমেটো', disease: 'আর্লি ব্লাইট', date: '১৫ মে, ২০২৬', status: 'infected', confidence: 96 },
  { id: 2, crop: 'ধান', disease: 'সুস্থ', date: '১৪ মে, ২০২৬', status: 'healthy', confidence: 98 },
  { id: 3, crop: 'আলু', disease: 'লেট ব্লাইট', date: '১৩ মে, ২০২৬', status: 'infected', confidence: 92 },
  { id: 4, crop: 'ভুট্টা', disease: 'সুস্থ', date: '১২ মে, ২০২৬', status: 'healthy', confidence: 95 },
  { id: 5, crop: 'মরিচ', disease: 'পাউডারি মিল্ডিউ', date: '১১ মে, ২০২৬', status: 'infected', confidence: 88 },
]

export const mockWeatherData = {
  temperature: 32,
  humidity: 78,
  condition: 'আংশিক মেঘলা',
  rainChance: 40,
  windSpeed: 12,
}

export const mockNotifications = [
  { id: 1, title: 'স্প্রে করার সময়', message: 'আপনার টমেটো ক্ষেতে আজ স্প্রে করার সময়', type: 'reminder', time: '২ ঘন্টা আগে' },
  { id: 2, title: 'নতুন রোগ সতর্কতা', message: 'আপনার এলাকায় ব্লাইট রোগের প্রাদুর্ভাব দেখা দিয়েছে', type: 'warning', time: '৫ ঘন্টা আগে' },
  { id: 3, title: 'বিশ্লেষণ সম্পন্ন', message: 'আপনার আপলোড করা ছবির বিশ্লেষণ সম্পন্ন হয়েছে', type: 'success', time: '১ দিন আগে' },
]

export const mockChatResponses: Record<string, string> = {
  'রোগ': 'আপনার ফসলের রোগ শনাক্ত করতে "নতুন স্ক্যান" বাটনে ক্লিক করুন এবং আক্রান্ত অংশের ছবি আপলোড করুন। আমাদের AI সিস্টেম ৯৫% এর বেশি সঠিকতায় রোগ শনাক্ত করতে পারে।',
  'ওষুধ': 'সঠিক ওষুধ ব্যবহারের জন্য প্রথমে রোগ শনাক্ত করুন। তারপর আমরা আপনাকে সঠিক ওষুধ, ডোজ এবং স্প্রে করার সময়সূচী জানাব।',
  'সেচ': 'সেচ ব্যবস্থাপনার জন্য মাটির আর্দ্রতা পরীক্ষা করুন। সকাল বা সন্ধ্যায় সেচ দিন এবং অতিরিক্ত পানি জমতে দেবেন না।',
  'মৌসুম': 'বর্তমান মৌসুমে ধান, পাট, আউশ ধান চাষের উপযুক্ত সময়। বর্ষাকালে ছত্রাকজনিত রোগ বেশি হয়, তাই সতর্ক থাকুন।',
  'default': 'আপনার প্রশ্নের জন্য ধন্যবাদ! আমি আপনাকে কৃষি সংক্রান্ত যেকোনো বিষয়ে সাহায্য করতে পারি - রোগ শনাক্তকরণ, ওষুধের পরামর্শ, সেচ ব্যবস্থাপনা, বা মৌসুমি ফসলের পরামর্শ।',
}

export const mockChartData = [
  { month: 'জানু', healthy: 45, infected: 12 },
  { month: 'ফেব', healthy: 52, infected: 18 },
  { month: 'মার্চ', healthy: 48, infected: 22 },
  { month: 'এপ্রি', healthy: 61, infected: 15 },
  { month: 'মে', healthy: 89, infected: 67 },
]

export const mockActivityTimeline = [
  { id: 1, action: 'রোগ স্ক্যান করা হয়েছে', crop: 'টমেটো', time: '১০:৩০ AM' },
  { id: 2, action: 'পরামর্শ দেখা হয়েছে', crop: 'আলু', time: '০৯:১৫ AM' },
  { id: 3, action: 'রিপোর্ট ডাউনলোড', crop: 'ধান', time: 'গতকাল' },
  { id: 4, action: 'নতুন ফসল যোগ করা হয়েছে', crop: 'ভুট্টা', time: '২ দিন আগে' },
]

export const features = [
  {
    title: 'AI রোগ শনাক্তকরণ',
    description: 'উন্নত মেশিন লার্নিং দিয়ে ফসলের রোগ মুহূর্তেই শনাক্ত করুন',
    icon: 'scan',
  },
  {
    title: 'স্মার্ট ওষুধ পরামর্শ',
    description: 'রোগ অনুযায়ী সঠিক ওষুধ ও ডোজের পরামর্শ পান',
    icon: 'pill',
  },
  {
    title: 'জৈব সমাধান',
    description: 'পরিবেশবান্ধব জৈব চিকিৎসা পদ্ধতি জানুন',
    icon: 'leaf',
  },
  {
    title: 'আবহাওয়া সতর্কতা',
    description: 'রোগ প্রাদুর্ভাবের ঝুঁকি সম্পর্কে আগাম সতর্কতা পান',
    icon: 'cloud',
  },
  {
    title: 'বিশেষজ্ঞ পরামর্শ',
    description: 'AI কৃষি সহকারীর কাছ থেকে তাৎক্ষণিক পরামর্শ',
    icon: 'bot',
  },
  {
    title: 'বিশ্লেষণ রিপোর্ট',
    description: 'বিস্তারিত রিপোর্ট ও পরিসংখ্যান দেখুন',
    icon: 'chart',
  },
]

export const howItWorks = [
  { step: 1, title: 'ছবি তুলুন', description: 'আক্রান্ত ফসলের স্পষ্ট ছবি তুলুন' },
  { step: 2, title: 'আপলোড করুন', description: 'ছবিটি আমাদের প্ল্যাটফর্মে আপলোড করুন' },
  { step: 3, title: 'AI বিশ্লেষণ', description: 'AI আপনার ছবি বিশ্লেষণ করবে' },
  { step: 4, title: 'ফলাফল পান', description: 'রোগের বিবরণ ও চিকিৎসা পরামর্শ পান' },
]

export const testimonials = [
  {
    name: 'রহিম উদ্দিন',
    role: 'কৃষক, ময়মনসিংহ',
    content: 'এই অ্যাপ আমার ধান ক্ষেতের রোগ শনাক্ত করে সঠিক সময়ে চিকিৎসা দিতে সাহায্য করেছে। ফলন অনেক বেড়েছে।',
    avatar: 'RU',
  },
  {
    name: 'ফাতেমা বেগম',
    role: 'কৃষক, বগুড়া',
    content: 'আগে রোগ চিনতে পারতাম না, এখন মোবাইলে ছবি তুলে সাথে সাথে জানতে পারি। অনেক সুবিধা।',
    avatar: 'FB',
  },
  {
    name: 'করিম সরদার',
    role: 'কৃষক, রাজশাহী',
    content: 'AI পরামর্শ অনুযায়ী ওষুধ ব্যবহার করে আমার টমেটোর ফলন দ্বিগুণ হয়েছে। চমৎকার একটি সেবা।',
    avatar: 'KS',
  },
]
