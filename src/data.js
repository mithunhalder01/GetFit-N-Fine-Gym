// ── GYM CONFIG ────────────────────────────────────────────────────────────────
export const GYM = {
  name: "Get Fit N Fine Gym",
  tagline: "Forge Your Legend",
  website: "https://ironpeak.in",
  phone: "+91 7303670724",
  email: "hello@ironpeak.in",
  address: "Plot 47, Sector 18, Noida, UP — 201301",
  hours: { weekday: "5:00 AM – 11:00 PM", sunday: "7:00 AM – 8:00 PM" },
  instagram: "https://instagram.com/ironpeak",
  facebook: "https://facebook.com/ironpeak",
  youtube: "https://youtube.com",
  whatsapp: "917303670724",
};

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=80",
  gym1: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1600&q=80",
  gym2: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1600&q=80",
  gym3: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80",
  gym4: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1600&q=80",
};

// ── PROGRAMS ──────────────────────────────────────────────────────────────────
export const PROGRAMS = [
  { id: 1, icon: "strength", title: "Strength Training", desc: "Periodized lifting programs for raw power. Olympic barbells, free weights, and power racks.", level: "All Levels", duration: "60 min", days: "Mon, Wed, Fri" },
  { id: 2, icon: "hiit", title: "HIIT & Cardio", desc: "High-intensity interval sessions that torch fat, build endurance, and spike your metabolism.", level: "Intermediate", duration: "45 min", days: "Tue, Thu, Sat" },
  { id: 3, icon: "crossfit", title: "CrossFit WODs", desc: "Daily workout of the day combining gymnastics, weightlifting, and metabolic conditioning.", level: "Advanced", duration: "50 min", days: "Mon–Sat" },
  { id: 4, icon: "yoga", title: "Yoga & Mobility", desc: "Flexibility, breath control, and recovery sessions to keep your body functional long-term.", level: "All Levels", duration: "60 min", days: "Daily" },
  { id: 5, icon: "boxing", title: "Boxing & MMA", desc: "Technical striking, footwork, and conditioning under certified combat sports coaches.", level: "Beginner Friendly", duration: "60 min", days: "Tue, Thu, Sat" },
  { id: 6, icon: "functional", title: "Functional Fitness", desc: "Movement-based training for real-world performance, core stability, and athletic longevity.", level: "All Levels", duration: "45 min", days: "Mon–Sat" },
  { id: 7, icon: "cycling", title: "Cycling / Spin", desc: "High-energy indoor cycling sessions to build cardiovascular strength and lower body power.", level: "All Levels", duration: "45 min", days: "Mon, Wed, Fri" },
  { id: 8, icon: "zumba", title: "Zumba / Dance Fit", desc: "Fun, high-energy dance workouts that burn calories while keeping you smiling.", level: "All Levels", duration: "45 min", days: "Tue, Thu" },
];

// ── SCHEDULE ──────────────────────────────────────────────────────────────────
export const SCHEDULE = [
  { time: "06:00", name: "Morning HIIT", trainer: "Rohan Mehta", duration: "45 min", level: "Beginner", days: ["Mon", "Wed", "Fri"] },
  { time: "07:30", name: "Strength & Power", trainer: "Arjun Singh", duration: "60 min", level: "Advanced", days: ["Mon", "Tue", "Thu"] },
  { time: "09:00", name: "Yoga Flow", trainer: "Priya Nair", duration: "60 min", level: "All Levels", days: ["Tue", "Thu", "Sat"] },
  { time: "10:00", name: "Zumba Dance Fit", trainer: "Kavya Sharma", duration: "45 min", level: "All Levels", days: ["Tue", "Thu"] },
  { time: "11:00", name: "CrossFit WOD", trainer: "Vikram Das", duration: "50 min", level: "Advanced", days: ["Mon", "Wed", "Fri"] },
  { time: "17:00", name: "Boxing Basics", trainer: "Kabir Khan", duration: "60 min", level: "Beginner", days: ["Tue", "Thu", "Sat"] },
  { time: "18:00", name: "Spin / Cycling", trainer: "Rohan Mehta", duration: "45 min", level: "All Levels", days: ["Mon", "Wed", "Fri"] },
  { time: "19:00", name: "Functional Fitness", trainer: "Arjun Singh", duration: "45 min", level: "All Levels", days: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
  { time: "20:00", name: "Night HIIT", trainer: "Vikram Das", duration: "45 min", level: "Intermediate", days: ["Mon", "Wed", "Fri"] },
];

// ── TRAINERS ──────────────────────────────────────────────────────────────────
export const TRAINERS = [
  { id: 1, initials: "RM", name: "Rohan Mehta", role: "Head Coach · HIIT", exp: "10 Years", cert: "NSCA-CSCS", specialties: ["HIIT", "Fat Loss", "Endurance"], bio: "NSCA-certified strength and conditioning specialist with 10 years of competitive athletic coaching experience. Specializes in body recomposition and high-intensity training.", color: "from-yellow-500 to-orange-500", image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b72?auto=format&fit=crop&w=1200&q=80" },
  { id: 2, initials: "AS", name: "Arjun Singh", role: "Strength & Powerlifting", exp: "12 Years", cert: "IPF Coach L2", specialties: ["Powerlifting", "Strength", "Periodisation"], bio: "Former national-level powerlifter and 3× state champion. Expert in periodization, progressive overload, and strength programming.", color: "from-blue-500 to-indigo-600", image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=1200&q=80" },
  { id: 3, initials: "PN", name: "Priya Nair", role: "Yoga & Mobility", exp: "8 Years", cert: "RYT-500", specialties: ["Yoga", "Mobility", "Recovery"], bio: "500-hour certified yoga instructor. Expert in functional movement, injury prevention, and building athletic longevity.", color: "from-teal-500 to-green-500", image: "https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=1200&q=80" },
  { id: 4, initials: "KK", name: "Kabir Khan", role: "Boxing & MMA Coach", exp: "9 Years", cert: "WBC Certified", specialties: ["Boxing", "MMA", "Combat Conditioning"], bio: "Professional boxer and certified MMA coach. 8+ years teaching combat sports from beginner to competitive level.", color: "from-red-500 to-pink-500", image: "https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80" },
  { id: 5, initials: "VD", name: "Vikram Das", role: "CrossFit · Functional", exp: "7 Years", cert: "CrossFit L2", specialties: ["CrossFit", "Olympic Lifting", "WODs"], bio: "CrossFit Level 2 certified coach specializing in Olympic lifting and programming high-intensity functional fitness workouts.", color: "from-purple-500 to-violet-600", image: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0b4?auto=format&fit=crop&w=1200&q=80" },
  { id: 6, initials: "KS", name: "Kavya Sharma", role: "Zumba & Dance Fitness", exp: "6 Years", cert: "ZUMBA Licensed", specialties: ["Zumba", "Dance Fit", "Cardio"], bio: "Licensed Zumba instructor bringing high energy and fun to every class. Specialist in dance cardio for all fitness levels.", color: "from-pink-500 to-rose-500", image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80" },
];

// ── PLANS ─────────────────────────────────────────────────────────────────────
export const PLANS = [
  {
    name: "Starter", price: 1499, period: "month", featured: false,
    features: ["Gym floor access", "2 group classes/week", "Locker room access", "Basic fitness assessment", "Mobile app access"],
    notIncluded: ["Personal training", "Nutrition coaching", "24/7 access"],
  },
  {
    name: "Pro", price: 2999, period: "month", featured: true,
    features: ["Unlimited gym access", "Unlimited group classes", "2 PT sessions/month", "Nutrition consultation", "24/7 gym access", "Progress tracking app", "Priority class booking"],
    notIncluded: ["Custom meal plan"],
  },
  {
    name: "Elite", price: 5999, period: "month", featured: false,
    features: ["Everything in Pro", "8 PT sessions/month", "Custom meal plan", "Recovery zone access", "Body composition scans", "Priority booking", "Guest passes (2/month)", "Dedicated locker"],
    notIncluded: [],
  },
];

// ── TESTIMONIALS ──────────────────────────────────────────────────────────────
export const TESTIMONIALS = [
  { initials: "AK", name: "Ankit Kumar", since: "2023", rating: 5, text: "Lost 18 kg in 5 months. The trainers here are genuinely invested in your progress. Best decision I ever made for my health." },
  { initials: "SD", name: "Sneha Desai", since: "2022", rating: 5, text: "CrossFit WODs completely changed my fitness level. I'm stronger at 35 than I was at 25. The community keeps you accountable." },
  { initials: "RV", name: "Rahul Verma", since: "2024", rating: 5, text: "Priya's yoga classes fixed my chronic back pain in 3 months. This place isn't just a gym — it's a complete wellness solution." },
  { initials: "NJ", name: "Neha Joshi", since: "2023", rating: 5, text: "The boxing classes with Kabir are amazing! Never thought I'd enjoy working out this much. Lost 12 kgs and gained so much confidence." },
  { initials: "MS", name: "Manish Singh", since: "2022", rating: 5, text: "Arjun's strength programming got me to squat 150kg in 8 months. The coaching level here is genuinely world-class." },
  { initials: "PS", name: "Pooja Sharma", since: "2024", rating: 5, text: "Kavya's Zumba classes are the highlight of my week! Fun, effective, and the whole vibe of this gym is so positive." },
];

// ── BLOG POSTS ────────────────────────────────────────────────────────────────
export const BLOGS = [
  { id: 1, category: "Nutrition", title: "The Ultimate Guide to Pre-Workout Meals", excerpt: "What you eat before training directly impacts your performance. Here's exactly what to eat and when.", readTime: "5 min", date: "Mar 10, 2025", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=80" },
  { id: 2, category: "Training", title: "5 Signs You're Overtraining (And How to Fix It)", excerpt: "More isn't always better. Learn the warning signs your body sends when it needs rest.", readTime: "4 min", date: "Feb 28, 2025", image: "https://images.unsplash.com/photo-1517838277536-f5f99be50174?auto=format&fit=crop&w=1600&q=80" },
  { id: 3, category: "Lifestyle", title: "How to Build a Fitness Habit That Actually Sticks", excerpt: "Motivation fades. Discipline builds. Here's the psychology behind making gym a non-negotiable.", readTime: "6 min", date: "Feb 15, 2025", image: "https://images.unsplash.com/photo-1518611012118-f0c5f1d22bd4?auto=format&fit=crop&w=1600&q=80" },
  { id: 4, category: "Nutrition", title: "Protein 101: How Much Do You Actually Need?", excerpt: "Cut through the noise. A science-backed breakdown of protein requirements for different goals.", readTime: "5 min", date: "Feb 5, 2025", image: "https://images.unsplash.com/photo-1524594154908-edd6659fbb3d?auto=format&fit=crop&w=1600&q=80" },
  { id: 5, category: "Training", title: "Beginner's Full Body Workout — No Equipment Needed", excerpt: "Starting your fitness journey? This 4-week program builds the foundation for long-term progress.", readTime: "7 min", date: "Jan 20, 2025", image: "https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1600&q=80" },
  { id: 6, category: "Recovery", title: "Sleep and Muscle Growth: The Connection You're Ignoring", excerpt: "Your muscles don't grow in the gym — they grow while you sleep. Here's how to optimize recovery.", readTime: "4 min", date: "Jan 10, 2025", image: "https://images.unsplash.com/photo-1542990253-f07f5a1ce40b?auto=format&fit=crop&w=1600&q=80" },
];

// ── FESTIVAL TEMPLATES ────────────────────────────────────────────────────────
export const FESTIVAL_TEMPLATES = [
  {
    id: "diwali", name: "Diwali", icon: "sparkles", date: "October",
    color: "from-orange-500 to-yellow-400",
    message: (gym, member) => `Happy Diwali, ${member}!\n\nWishing you and your family a festival full of light, joy, and good health.\n\nKeep showing up and keep progressing.\n\n— ${gym}`,
  },
  {
    id: "holi", name: "Holi", icon: "sparkles", date: "March",
    color: "from-pink-500 to-purple-500",
    message: (gym, member) => `Happy Holi, ${member}!\n\nHave a wonderful celebration. Stay safe, stay healthy.\n\nSee you in the gym soon.\n\n— ${gym}`,
  },
  {
    id: "newyear", name: "New Year", icon: "sparkles", date: "January 1",
    color: "from-blue-500 to-indigo-500",
    message: (gym, member) => `Happy New Year, ${member}!\n\nNew year, new goals. We're with you every rep of the way.\n\nLet's make 2026 your strongest year yet.\n\n— ${gym}`,
  },
  {
    id: "eid", name: "Eid Mubarak", icon: "sparkles", date: "Variable",
    color: "from-green-500 to-teal-500",
    message: (gym, member) => `Eid Mubarak, ${member}!\n\nWishing you and your loved ones peace, joy, and good health.\n\nTake care and we'll see you back soon.\n\n— ${gym}`,
  },
  {
    id: "independence", name: "Independence Day", icon: "sparkles", date: "August 15",
    color: "from-orange-500 to-green-500",
    message: (gym, member) => `Happy Independence Day, ${member}!\n\nBe free from excuses. Be strong. Be consistent.\n\n— ${gym}`,
  },
  {
    id: "birthday", name: "Birthday Wish", icon: "sparkles", date: "Member's birthday",
    color: "from-yellow-400 to-pink-500",
    message: (gym, member) => `Happy Birthday, ${member}!\n\nWishing you an amazing year of strength and good health.\n\nYour birthday gift: a free PT session this month. Book at the front desk.\n\n— ${gym}`,
  },
  {
    id: "feereminder", name: "Fee Reminder", icon: "sparkles", date: "Monthly",
    color: "from-gray-500 to-gray-600",
    message: (gym, member) => `Hi ${member}\n\nThis is a friendly reminder that your ${gym} membership fee is due.\n\nPlease pay at the front desk or reply to this message for help.\n\nThank you for being part of our community.\n\n— ${gym}`,
  },
  {
    id: "custom", name: "Custom Message", icon: "sparkles", date: "Anytime",
    color: "from-gray-700 to-gray-900",
    message: (gym, member) => `Hi ${member}\n\n[Your custom message here]\n\nKeep going.\n\n— ${gym}`,
  },
];

// ── DEFAULT MEMBERS (sample data) ─────────────────────────────────────────────
export const DEFAULT_MEMBERS = [
  { id: 1, name: "Amit Kumar", phone: "9811234567", plan: "Pro", joinDate: "2024-01-15", feeAmount: 2999, feeDueDate: "2025-04-15", birthday: "1992-03-20", attendance: [], notes: "", active: true },
  { id: 2, name: "Priya Sharma", phone: "9822345678", plan: "Starter", joinDate: "2024-02-01", feeAmount: 1499, feeDueDate: "2025-03-20", birthday: "1995-07-14", attendance: [], notes: "", active: true },
  { id: 3, name: "Rohit Verma", phone: "9833456789", plan: "Elite", joinDate: "2023-11-10", feeAmount: 5999, feeDueDate: "2025-04-10", birthday: "1988-11-03", attendance: [], notes: "Competes in powerlifting", active: true },
  { id: 4, name: "Sneha Patel", phone: "9844567890", plan: "Pro", joinDate: "2024-03-05", feeAmount: 2999, feeDueDate: "2025-03-25", birthday: "1998-01-28", attendance: [], notes: "", active: true },
  { id: 5, name: "Karan Singh", phone: "9855678901", plan: "Starter", joinDate: "2024-04-20", feeAmount: 1499, feeDueDate: "2025-04-20", birthday: "1996-06-15", attendance: [], notes: "", active: true },
  { id: 6, name: "Anjali Gupta", phone: "9866789012", plan: "Pro", joinDate: "2023-12-01", feeAmount: 2999, feeDueDate: "2025-04-01", birthday: "1993-09-22", attendance: [], notes: "Morning batch", active: true },
  { id: 7, name: "Vivek Mishra", phone: "9877890123", plan: "Elite", joinDate: "2023-08-15", feeAmount: 5999, feeDueDate: "2025-03-28", birthday: "1985-12-10", attendance: [], notes: "", active: true },
  { id: 8, name: "Neha Joshi", phone: "9888901234", plan: "Starter", joinDate: "2024-05-10", feeAmount: 1499, feeDueDate: "2025-05-10", birthday: "2000-04-05", attendance: [], notes: "New to gym", active: true },
  { id: 9, name: "Deepak Tiwari", phone: "9899012345", plan: "Pro", joinDate: "2024-01-25", feeAmount: 2999, feeDueDate: "2025-04-25", birthday: "1991-08-19", attendance: [], notes: "", active: true },
  { id: 10, name: "Pooja Rawat", phone: "9800123456", plan: "Pro", joinDate: "2024-02-14", feeAmount: 2999, feeDueDate: "2025-03-14", birthday: "1994-02-14", attendance: [], notes: "Yoga batch", active: true },
];

// ── MEMBER STORAGE ────────────────────────────────────────────────────────────
export const getMembers = () => {
  const stored = localStorage.getItem("gym_members");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("gym_members", JSON.stringify(DEFAULT_MEMBERS));
  return DEFAULT_MEMBERS;
};

export const saveMembers = (members) => {
  localStorage.setItem("gym_members", JSON.stringify(members));
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
export const formatPhone = (p) => p.replace(/\D/g, "");

export const isBirthdayToday = (birthday) => {
  if (!birthday) return false;
  const today = new Date();
  const b = new Date(birthday);
  return b.getDate() === today.getDate() && b.getMonth() === today.getMonth();
};

export const isFeeOverdue = (dueDate) => {
  if (!dueDate) return false;
  return new Date(dueDate) < new Date();
};

export const isFeeDueSoon = (dueDate, days = 7) => {
  if (!dueDate) return false;
  const due = new Date(dueDate);
  const today = new Date();
  const diff = (due - today) / (1000 * 60 * 60 * 24);
  return diff >= 0 && diff <= days;
};

export const whatsappLink = (phone, message) => {
  const num = formatPhone(phone);
  const text = encodeURIComponent(message);
  return `https://wa.me/91${num}?text=${text}`;
};

export const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
