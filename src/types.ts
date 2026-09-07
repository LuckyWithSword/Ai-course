export type ColorScheme = 'cream-red' | 'blue' | 'green' | 'cream' | 'red' | 'black';

export interface LessonContent {
  sectionTitle: string;
  body: string;
  promptSnippet?: string;
  codeSnippet?: string;
  keyTakeaways: string[];
}

export interface Lesson {
  id: string;
  moduleId: string;
  number: string;
  title: string;
  duration: string;
  type: 'concept' | 'hands-on' | 'code' | 'prompt' | 'workflow';
  summary: string;
  content: LessonContent[];
  practicalTask: string;
  xpReward?: number;
}

export interface Module {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  colorScheme: ColorScheme;
  topics: string[];
  lessons: Lesson[];
  estimatedHours: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Mastery';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skills: string[];
  tools: string[];
  description: string;
  architectureSteps: string[];
  deliverable: string;
  extensionChallenge: string;
  starterPrompt: string;
  sampleCode?: string;
  recommendedDevice: 'Any Device' | 'Laptop / Desktop Recommended';
}

export interface Challenge {
  id: string;
  number: string;
  title: string;
  xp?: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeEstimate: string;
  objective: string;
  scenario: string;
  criteria: string[];
  starterTemplate: string;
  badgeName: string;
}

export interface RankLevel {
  level: number;
  title: string;
  minXP: number;
  badgeSymbol: string;
  description: string;
  unlockedPerks: string[];
}

export interface Badge {
  id: string;
  name: string;
  symbol: string;
  category: string;
  description: string;
  unlockedAtXP: number;
}

export interface ResourceItem {
  id: string;
  category: 'PROMPTS' | 'TEMPLATES' | 'CHEAT SHEETS' | 'TOOLS' | 'AUTOMATION' | 'CODING' | 'AI AGENTS';
  title: string;
  description: string;
  tags: string[];
  content: string;
  actionLabel?: string;
}

export interface LeaderboardUser {
  rank: number;
  name: string;
  xp: number;
  levelTitle: string;
  completedProjects: number;
  badgeSymbol: string;
}

export interface StudentState {
  name?: string;
  isEnrolled?: boolean;
  level?: number;
  xp?: number;
  completedLessons: string[];
  completedProjects: string[];
  completedChallenges: string[];
  streakDays: number;
  currentLessonId?: string;
  bookmarkedResources?: string[];
  unlockedBadgeIds?: string[];
}
