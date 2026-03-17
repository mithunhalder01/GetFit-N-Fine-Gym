import {
  Activity,
  Bike,
  Brain,
  Camera,
  Dumbbell,
  Flame,
  Flower2,
  GlassWater,
  HeartPulse,
  Medal,
  Music,
  ShowerHead,
  Sparkles,
  Star,
  Swords,
  Zap,
} from "lucide-react";

export function ProgramIcon({ name, className = "w-7 h-7" }) {
  const map = {
    strength: Dumbbell,
    hiit: Flame,
    crossfit: Zap,
    yoga: Flower2,
    boxing: Swords,
    functional: Activity,
    cycling: Bike,
    zumba: Music,
  };
  const Icon = map[name] || Sparkles;
  return <Icon className={className} />;
}

export function FacilityIcon({ name, className = "w-8 h-8" }) {
  const map = {
    floor: Dumbbell,
    cardio: Activity,
    crossfit: Zap,
    yoga: Flower2,
    boxing: Swords,
    locker: ShowerHead,
    recovery: HeartPulse,
    juice: GlassWater,
    wall: Medal,
  };
  const Icon = map[name] || Star;
  return <Icon className={className} />;
}

export function BlogCategoryIcon({ category, className = "w-10 h-10" }) {
  const map = {
    Nutrition: GlassWater,
    Training: Dumbbell,
    Recovery: HeartPulse,
    Lifestyle: Brain,
  };
  const Icon = map[category] || Camera;
  return <Icon className={className} />;
}

