import { RankLevel, Badge, Challenge, LeaderboardUser } from '../types';

export const RANK_LEVELS: RankLevel[] = [
  {
    level: 1,
    title: 'EXPLORER',
    minXP: 0,
    badgeSymbol: '◈',
    description: 'Mastery of foundational neural mechanics, token economies, and model taxonomy.',
    unlockedPerks: ['Foundation curriculum access', 'Prompt visualizer tool', 'Community forum read privileges']
  },
  {
    level: 2,
    title: 'PROMPT ENGINEER',
    minXP: 350,
    badgeSymbol: '◆',
    description: 'Proficiency in few-shot exemplars, structured JSON schemas, and chain-of-thought protocols.',
    unlockedPerks: ['Prompt Vault full archive access', 'JSON Schema validator', 'Intermediate challenges unlocked']
  },
  {
    level: 3,
    title: 'AI CREATOR',
    minXP: 850,
    badgeSymbol: '▲',
    description: 'End-to-end multi-format content generation: text, imagery, video, audio pipelines.',
    unlockedPerks: ['Editorial template blueprints', 'Midjourney prompt matrices', 'Creative review channel']
  },
  {
    level: 4,
    title: 'AI OPERATOR',
    minXP: 1600,
    badgeSymbol: '⬡',
    description: 'Event-driven webhooks, automation pipelines, and autonomous business workflows.',
    unlockedPerks: ['Automation blueprint library', 'Webhook sandbox environment', 'Freelance proposal templates']
  },
  {
    level: 5,
    title: 'AI BUILDER',
    minXP: 2600,
    badgeSymbol: '◬',
    description: 'Full-stack software engineering with AI: APIs, vector databases, and deployed applications.',
    unlockedPerks: ['Full-stack code starter kits', 'Cloud Run deployment guides', 'Builder badge verification']
  },
  {
    level: 6,
    title: 'AI ARCHITECT',
    minXP: 4000,
    badgeSymbol: '✦',
    description: 'Autonomous multi-agent architectures, enterprise systems, and capstone defense.',
    unlockedPerks: ['Official Cryptographic Certificate', 'Capstone showcase listing', 'Alumni network access']
  }
];

export const BADGES_DATA: Badge[] = [
  {
    id: 'badge-token',
    name: 'Token Precisionist',
    symbol: '◈',
    category: 'Foundations',
    description: 'Completed Module 01 and calibrated prompt tokens within 5% error margin.',
    unlockedAtXP: 100
  },
  {
    id: 'badge-schema',
    name: 'Strict Schema Guard',
    symbol: '◆',
    category: 'Prompting',
    description: 'Engineered a 100% compliant zero-shot JSON extraction schema without regex post-processing.',
    unlockedAtXP: 400
  },
  {
    id: 'badge-visual',
    name: 'Art Director',
    symbol: '▲',
    category: 'Creative',
    description: 'Generated a coherent 4-piece editorial visual series maintaining strict color and camera direction.',
    unlockedAtXP: 950
  },
  {
    id: 'badge-pipeline',
    name: 'Pipeline Machinist',
    symbol: '⬡',
    category: 'Automation',
    description: 'Successfully deployed an autonomous multi-stage webhook flow with automated error recovery.',
    unlockedAtXP: 1800
  },
  {
    id: 'badge-react',
    name: 'ReAct Engineer',
    symbol: '◬',
    category: 'Agents',
    description: 'Constructed an autonomous agent ReAct loop with multi-tool calling and budget guards.',
    unlockedAtXP: 2800
  },
  {
    id: 'badge-architect',
    name: 'Master Architect',
    symbol: '✦',
    category: 'Mastery',
    description: 'Defended and deployed a complete end-to-end commercial AI business capstone system.',
    unlockedAtXP: 4200
  }
];

export const CHALLENGES_DATA: Challenge[] = [
  {
    id: 'ch-01',
    number: '01',
    title: 'TOKEN BUDGET SQUEEZE',
    xp: 35,
    difficulty: 'Beginner',
    timeEstimate: '20 min',
    objective: 'Compress a verbose 850-word policy brief into a strict 120-token structured briefing with zero loss of critical operational constraints.',
    scenario: 'An autonomous agent has a narrow context buffer left in its execution loop. You must condense an incoming user payload into an ultra-dense prompt payload.',
    criteria: [
      'Total token count must remain strictly <= 120 tokens.',
      'Must retain all 4 compliance mandates and numerical thresholds.',
      'Must format output as pipe-delimited key-values.'
    ],
    starterTemplate: `SYSTEM: Token Compression Protocol v2
INPUT_TEXT: [Paste unformatted policy here]
TARGET_SCHEMA: KEY|VALUE|THRESHOLD`,
    badgeName: 'Token Precisionist'
  },
  {
    id: 'ch-03',
    number: '03',
    title: 'ZERO-LEAKAGE JSON EXTRACTION',
    xp: 45,
    difficulty: 'Intermediate',
    timeEstimate: '30 min',
    objective: 'Create a few-shot prompt that converts chaotic customer support emails into a strictly validated JSON structure without conversational fluff.',
    scenario: 'Incoming raw emails from disgruntled users contain conflicting dates, emotional complaints, and vague requests. Format them into a reliable backend ticket.',
    criteria: [
      'Zero preamble or postamble (no "Here is the JSON:" or backticks).',
      'Categorize sentiment, priority (1-5), and required routing department.',
      'Extract any mentioned invoice numbers or order dates accurately.'
    ],
    starterTemplate: `[TASK] Convert the following raw email into strict JSON.
[OUTPUT_SCHEMA]
{
  "ticket_id": string,
  "sentiment": "irate" | "neutral" | "urgent",
  "department": "billing" | "technical" | "general",
  "summary": string
}`,
    badgeName: 'Strict Schema Guard'
  },
  {
    id: 'ch-07',
    number: '07',
    title: 'BUILD A LEAD MACHINE',
    xp: 48,
    difficulty: 'Advanced',
    timeEstimate: '45 min',
    objective: 'Architect an automated workflow that receives a company URL, extracts ICP data, computes a fit score, and drafts an personalized outreach email.',
    scenario: 'A B2B agency receives 200 web form submissions daily. Manually reading each website takes 40 hours a week. Build a 4-step autonomous triage pipeline.',
    criteria: [
      'Define clear webhook input schema.',
      'Implement scoring logic that scores 0-100 based on employee count & tech stack.',
      'Produce an outreach email referencing a specific initiative found on their site.',
      'Route leads with score < 60 to an automated polite decline list.'
    ],
    starterTemplate: `WORKFLOW PIPELINE DEFINITION:
1. WEBHOOK_RECEIVE(lead_payload)
2. SCRAPE_METADATA(company_domain)
3. LLM_EVALUATE_ICP(scraped_text, rubric)
4. CONDITIONAL_BRANCH:
   - IF score >= 75 -> GENERATE_PITCH & SLACK_ALERT
   - ELSE -> LOG_ARCHIVE`,
    badgeName: 'Pipeline Machinist'
  },
  {
    id: 'ch-08',
    number: '08',
    title: 'MULTI-AGENT COORDINATOR',
    xp: 65,
    difficulty: 'Advanced',
    timeEstimate: '60 min',
    objective: 'Implement a two-agent architecture: a Researcher Agent that gathers market facts, and an Auditor Agent that cross-checks the facts against source documents.',
    scenario: 'Frontier models tend to agree with their own hypotheses. Implement adversarial verification between two specialized model instances.',
    criteria: [
      'Agent 1 must output claims with cited URLs or document chunk IDs.',
      'Agent 2 must independently verify each claim, flagging ungrounded assertions.',
      'Synthesis terminates only when all disputed points are resolved or marked contested.'
    ],
    starterTemplate: `AGENT_A (Researcher): "Find 3 market growth projections for edge computing in 2026."
AGENT_B (Auditor): "Verify each citation. If report is behind paywall or unverified, reject assertion."`,
    badgeName: 'ReAct Engineer'
  }
];

export const LEADERBOARD_USERS: LeaderboardUser[] = [
  { rank: 1, name: 'Arjun K. (Kolkata)', xp: 4420, levelTitle: 'AI ARCHITECT', completedProjects: 8, badgeSymbol: '✦' },
  { rank: 2, name: 'Devika M. (Bengaluru)', xp: 4180, levelTitle: 'AI ARCHITECT', completedProjects: 8, badgeSymbol: '✦' },
  { rank: 3, name: 'Siddharth R. (Mumbai)', xp: 3890, levelTitle: 'AI BUILDER', completedProjects: 7, badgeSymbol: '◬' },
  { rank: 4, name: 'Meera N. (Pune)', xp: 3410, levelTitle: 'AI BUILDER', completedProjects: 6, badgeSymbol: '◬' },
  { rank: 5, name: 'Rohan G. (Hyderabad)', xp: 2980, levelTitle: 'AI BUILDER', completedProjects: 6, badgeSymbol: '◬' },
  { rank: 6, name: 'Ananya S. (Delhi)', xp: 2450, levelTitle: 'AI OPERATOR', completedProjects: 5, badgeSymbol: '⬡' },
  { rank: 7, name: 'Kabir V. (Chennai)', xp: 1980, levelTitle: 'AI OPERATOR', completedProjects: 4, badgeSymbol: '⬡' },
  { rank: 8, name: 'Vikram T. (Jaipur)', xp: 1540, levelTitle: 'AI CREATOR', completedProjects: 3, badgeSymbol: '▲' },
  { rank: 9, name: 'Pooja B. (Ahmedabad)', xp: 1120, levelTitle: 'AI CREATOR', completedProjects: 3, badgeSymbol: '▲' },
  { rank: 10, name: 'Tanmay J. (Chandigarh)', xp: 780, levelTitle: 'PROMPT ENGINEER', completedProjects: 2, badgeSymbol: '◆' }
];
