import { ResourceItem } from '../types';

export const RESOURCES_DATA: ResourceItem[] = [
  // PROMPTS
  {
    id: 'res-pr-01',
    category: 'PROMPTS',
    title: 'The Master Role & Constraint Scaffolding',
    description: 'System directive that eliminates AI conversational boilerplate and forces high-density answers.',
    tags: ['System Prompts', 'Productivity', 'Universal'],
    content: `[IDENTITY] Senior Engineering Lead & Systems Architect.
[DIRECTIVE] Provide direct, dense, mathematically and structurally verified solutions.
[FORMATTING] 
- Lead with code/architecture. 
- Avoid polite opening greetings or closing summaries. 
- Flag unstated edge cases with numbered bullet points.`
  },
  {
    id: 'res-pr-02',
    category: 'PROMPTS',
    title: 'Strict JSON Schema Extractor with Few-Shot Exemplars',
    description: 'Extract unstructured text into validated typed JSON fields without markdown fencing or commentary.',
    tags: ['JSON', 'Structured Output', 'APIs'],
    content: `You are a deterministic parsing engine.
Input Text: "{{USER_INPUT}}"
Schema Definition:
{
  "entity": string,
  "confidence": number, // 0.00 to 1.00
  "action_required": boolean,
  "next_step": string
}
RULE: Return ONLY the JSON object. Zero markdown, zero explanatory text.`
  },
  {
    id: 'res-pr-03',
    category: 'PROMPTS',
    title: 'Executive Meeting Transcript Synthesizer',
    description: 'Turn a 45-minute noisy transcript into Eisenhower-prioritized action items with assigned owners.',
    tags: ['Executive', 'Meetings', 'Workflow'],
    content: `Analyze the following meeting transcript.
Produce three distinct outputs:
1. DECISIONS MADE (Irrevocable choices agreed upon)
2. ACTION MATRIX (Owner | Task | Explicit Deadline | Dependencies)
3. UNRESOLVED TENSIONS (Points where consensus was not reached)`
  },
  {
    id: 'res-pr-04',
    category: 'PROMPTS',
    title: 'High-Conversion Technical Proposal Pitch',
    description: 'Transform client requirements into an outcome-based 3-tier commercial proposal.',
    tags: ['Business', 'Proposals', 'Sales'],
    content: `Client Problem: {{CLIENT_PROBLEM}}
Estimated Current Cost of Inaction: {{COST_INCURRED}}
Deliverable: Generate a 3-tier proposal (Core / Automated / Enterprise Transformation) detailing exact deliverables, timeline, risk mitigation, and milestone investment.`
  },

  // TEMPLATES
  {
    id: 'res-tm-01',
    category: 'TEMPLATES',
    title: 'Client AI Feasibility & Audit Rubric',
    description: 'A 5-part evaluation framework to assess whether a client problem requires an LLM, a heuristic rule, or a database query.',
    tags: ['Audit', 'Client Work', 'Consulting'],
    content: `## AI Feasibility Rubric
1. Task Complexity: Is it probabilistic or deterministic? (If deterministic, use code).
2. Error Tolerance: Can the workflow tolerate 2% error with fallback human review?
3. Data Grounding: Are source documents structured, clean, and accessible?
4. Latency Requirement: Is <500ms required (Flash model) or is asynchronous processing acceptable?
5. Unit Economics: Token cost per transaction vs human manual labor cost.`
  },
  {
    id: 'res-tm-02',
    category: 'TEMPLATES',
    title: 'Commercial AI Automation Scope of Work (SOW)',
    description: 'Standard contractual scope template protecting developers from prompt drift and client scope creep.',
    tags: ['Legal', 'Contracts', 'Freelancing'],
    content: `SCOPE OF WORK: AI PIPELINE INTEGRATION
- In-Scope: Development of webhook listener, LLM prompt engineering, Supabase vector integration, up to 3 revision cycles.
- Out-of-Scope: Manual document scanning, third-party API downtime compensation, custom on-prem hardware deployment.
- Acceptance Criteria: Pipeline satisfies 92%+ schema adherence across 100 test exemplars.`
  },

  // CHEAT SHEETS
  {
    id: 'res-cs-01',
    category: 'CHEAT SHEETS',
    title: 'Frontier LLM Token & Cost Reference Matrix',
    description: 'Comparative benchmark of token economics, context horizons, and optimal routing use cases.',
    tags: ['Economics', 'Models', 'Benchmarks'],
    content: `| Model Tier | Latency | Input / 1M | Output / 1M | Sweet Spot |
|---|---|---|---|---|
| Gemini 2.5 Flash | <300ms | $0.075 | $0.30 | Fast classification, webhooks, triage |
| Gemini 2.5 Pro | 1.2s - 3s | $1.25 | $5.00 | Deep code, multi-doc reasoning, synthesis |
| Claude 3.5 Sonnet | 1.5s - 4s | $3.00 | $15.00 | Nuanced editorial prose, code refactoring |
| Open Llama 3.1 8B | Local | Free | Free | Zero-data-leakage on-device operations |`
  },
  {
    id: 'res-cs-02',
    category: 'CHEAT SHEETS',
    title: 'ReAct Agent Pattern Decision Tree',
    description: 'When to deploy autonomous agents vs when a sequential prompt chain or deterministic script is superior.',
    tags: ['Architecture', 'Agents', 'Decision'],
    content: `Decision Flow:
1. Is the sequence of steps known in advance?
   -> YES: Use a deterministic Directed Acyclic Graph (DAG) or Workflow (Make/n8n/Node). DO NOT use an agent.
   -> NO: Proceed to 2.
2. Does the system need to decide which tool to call based on environmental feedback?
   -> YES: Deploy ReAct Loop with step timeout and budget guard.
3. Will an incorrect tool call cause catastrophic damage (e.g. wipe database)?
   -> YES: Add Human-In-The-Loop (HITL) gate before tool execution.`
  },

  // TOOLS
  {
    id: 'res-tl-01',
    category: 'TOOLS',
    title: 'Curated AI Stack: Classified by Job-To-Be-Done',
    description: 'Hand-tested ecosystem directory organized by functional utility rather than hype.',
    tags: ['Directory', 'Software', 'Ecosystem'],
    content: `• Prompt Evaluation & Observability: LangSmith, Helicone, Promptfoo
• Vector Storage: Supabase pgvector, Pinecone, Qdrant
• No-Code Automation: n8n (Self-hosted), Make.com, Activepieces
• Code Assistants: Cursor, Claude Code, GitHub Copilot
• Multimodal Audio & Voice: ElevenLabs, Deepgram, Whisper.cpp
• Document Parsing: Unstructured.io, LlamaParse, pdfplumber`
  },

  // AUTOMATION
  {
    id: 'res-au-01',
    category: 'AUTOMATION',
    title: 'Webhook -> LLM -> Database Self-Healing Pattern',
    description: 'Production architecture blueprint with exponential backoff and dead-letter queues.',
    tags: ['Webhooks', 'Resilience', 'Backend'],
    content: `1. Inbound Webhook receives event payload.
2. Verify HMAC SHA-256 signature to reject spoofed requests.
3. Store raw payload in staging database table with status 'PENDING'.
4. Invoke LLM with 8-second timeout.
5. If timeout occurs: Retry with exponential backoff (attempt 1: 1s, attempt 2: 4s).
6. On 3rd failure: Move to 'DEAD_LETTER' queue and notify engineer via webhook.`
  },

  // CODING
  {
    id: 'res-co-01',
    category: 'CODING',
    title: 'Production Express + @google/genai Server Blueprint',
    description: 'Minimal server-side Node.js proxy protecting your GEMINI_API_KEY with streaming responses.',
    tags: ['TypeScript', 'Express', 'Gemini SDK'],
    content: `import { GoogleGenAI } from '@google/genai';
import express from 'express';

const app = express();
app.use(express.json());

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

app.post('/api/generate', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });
    res.json({ output: response.text });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});`
  },

  // AI AGENTS
  {
    id: 'res-ag-01',
    category: 'AI AGENTS',
    title: 'ReAct Agent Tool Schema Definition (TypeScript)',
    description: 'Clean typed schemas for registering tools with modern function-calling models.',
    tags: ['TypeScript', 'Function Calling', 'Agents'],
    content: `export interface AgentTool {
  name: string;
  description: string;
  parameters: {
    type: 'OBJECT';
    properties: Record<string, { type: string; description: string }>;
    required: string[];
  };
  execute: (args: any) => Promise<string>;
}

export const webSearchTool: AgentTool = {
  name: 'web_search',
  description: 'Search the live web for verified documentation citations',
  parameters: {
    type: 'OBJECT',
    properties: {
      query: { type: 'STRING', description: 'Target search query string' }
    },
    required: ['query']
  },
  execute: async ({ query }) => {
    /* Implementation */
    return 'Search result snippet...';
  }
};`
  }
];
