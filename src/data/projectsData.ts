import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-01',
    number: '01',
    title: 'AI PERSONAL ASSISTANT',
    subtitle: 'A persistent, knowledge-grounded executive assistant workstation.',
    difficulty: 'Beginner',
    skills: ['System Prompts', 'Knowledge Base Grounding', 'Context Management', 'Workflow Chains'],
    tools: ['Claude', 'ChatGPT Projects', 'Google Gemini', 'Markdown Notes'],
    description: 'Build a personalized AI executive workstation pre-loaded with your voice guidelines, project directories, decision rubrics, and automated daily synthesis routines.',
    architectureSteps: [
      'Define operative role, negative behavioral constraints, and cognitive style.',
      'Assemble core context modules: User Profile, Active Priorities, and Voice Heuristics.',
      'Construct a weekly review prompt chain that extracts actionable tasks from meeting raw notes.',
      'Test across 10 common edge cases (ambiguous instructions, conflicting dates, priority clashes).'
    ],
    deliverable: 'A portable 3-file system prompt package and a live tested knowledge workspace.',
    extensionChallenge: 'Add automatic tagging of action items by Eisenhower matrix urgency.',
    starterPrompt: `<executive_assistant_directive>
[ROLE] You are my Senior Chief of Staff.
[OBJECTIVE] Process unstructured daily thoughts and meeting notes into prioritized actionable sprint tasks.
[OUTPUT_FORMAT] 
1. 3 Urgent Priorities (Must happen today)
2. Follow-Up Queries (Delegated or blocked)
3. Noise Reduction (Items to postpone or discard)
</executive_assistant_directive>`,
    recommendedDevice: 'Any Device'
  },
  {
    id: 'proj-02',
    number: '02',
    title: 'AI CONTENT MACHINE',
    subtitle: 'Multi-format editorial pipeline: essay → newsletter → visual carousel → scripts.',
    difficulty: 'Intermediate',
    skills: ['Content Repurposing', 'Voice Cloning', 'Prompt Pipelines', 'Visual Art Direction'],
    tools: ['Gemini 2.5 Flash', 'Midjourney', 'Canva Automations', 'Obsidian'],
    description: 'Create an automated content repurposing engine that ingests one long-form core thesis and programmatically outputs 5 distinct publishing assets matching an editorial brand guideline.',
    architectureSteps: [
      'Analyze the core input essay for thematic pillars, quotes, and statistics.',
      'Execute a 4-step transformation pipeline: Twitter/X thread, LinkedIn carousel, video hook scripts, newsletter summary.',
      'Generate complementary visual art direction prompts for each post.',
      'Enforce strict tone checks to eradicate generic buzzwords and cliché openings.'
    ],
    deliverable: 'A repeatable multi-prompt pipeline script producing publication-ready assets.',
    extensionChallenge: 'Integrate automated image generation prompts with fixed color palette hex codes.',
    starterPrompt: `Analyze the provided article:
Step 1: Extract 3 counter-intuitive insights.
Step 2: Convert Insight #1 into a high-tension opening hook (under 140 chars).
Step 3: Draft an 8-slide editorial carousel outline with 25 words per slide.`,
    recommendedDevice: 'Any Device'
  },
  {
    id: 'proj-03',
    number: '03',
    title: 'AI RESEARCH SYSTEM',
    subtitle: 'Deep synthesis, citation tracking, and contradiction detection across papers.',
    difficulty: 'Intermediate',
    skills: ['Document Parsing', 'Semantic Extraction', 'Hallucination Prevention', 'Synthesis Tables'],
    tools: ['Gemini API', 'NotebookLM', 'Python PDF Plumber', 'Perplexity'],
    description: 'Design a structured research assistant capable of cross-referencing multiple 40-page PDF reports, extracting conflicting empirical data, and building an executive briefing matrix.',
    architectureSteps: [
      'Parse multi-page PDFs into chunked semantic sections with page metadata.',
      'Run extraction pass for key claims, quantitative metrics, and methodology caveats.',
      'Cross-compare assertions across documents to flag direct contradictions.',
      'Synthesize into a structured markdown report with pinpoint page citations.'
    ],
    deliverable: 'A synthesis framework and verification rubric that detects discrepancies between sources.',
    extensionChallenge: 'Implement an automatic confidence scoring formula for contested claims.',
    starterPrompt: `You are an academic auditor. For every assertion you extract from Document A and Document B:
1. Provide the exact verbatim quote and page number.
2. Note whether both documents agree, partially differ, or directly contradict each other.
3. If contradictory, isolate the difference in methodology.`,
    recommendedDevice: 'Laptop / Desktop Recommended'
  },
  {
    id: 'proj-04',
    number: '04',
    title: 'AI LEAD GENERATOR',
    subtitle: 'Autonomous prospect discovery, qualification scoring, and personalized outreach.',
    difficulty: 'Intermediate',
    skills: ['Data Scraping', 'Prompt Classification', 'Personalization Engines', 'CRM Sync'],
    tools: ['Make.com', 'Apify', 'Google Sheets API', 'Gemini Flash'],
    description: 'Construct an inbound and outbound lead qualification system that evaluates lead company websites, computes an Ideal Customer Profile (ICP) fit score, and drafts personalized emails.',
    architectureSteps: [
      'Ingest new company domain from webhook or form submission.',
      'Scrape homepage value proposition, team size, and tech stack tags.',
      'Execute LLM scoring rubric to output an ICP Fit Score from 1 to 100 with rationale.',
      'If score > 75, generate 2 custom hook opening lines based on their recent announcements.'
    ],
    deliverable: 'A live webhook-driven pipeline outputting qualified, scored prospects into a CRM.',
    extensionChallenge: 'Add automatic spam-detection and disposable domain filtering.',
    starterPrompt: `Evaluate Company: {{company_name}}
Website Summary: {{scraped_text}}
ICP Rubric: B2B tech company, 10-200 employees, actively shipping software.
Task: Output JSON with:
{ "fitScore": number, "priority": "HIGH" | "MED" | "LOW", "keyHook": string, "rationale": string }`,
    recommendedDevice: 'Laptop / Desktop Recommended'
  },
  {
    id: 'proj-05',
    number: '05',
    title: 'AI CUSTOMER SUPPORT BOT',
    subtitle: 'RAG-powered conversational agent with tool fallback and escalation paths.',
    difficulty: 'Advanced',
    skills: ['Retrieval-Augmented Generation', 'Vector Search', 'Guardrails', 'Human Handoff'],
    tools: ['Supabase pgvector / Pinecone', 'LangChain / Vercel AI SDK', 'TypeScript', 'Node.js'],
    description: 'Build an intelligent support representative that answers technical product questions strictly grounded in your company documentation, refusing hallucinations and escalating edge cases.',
    architectureSteps: [
      'Embed documentation markdown files into vector embeddings.',
      'Implement similarity search with relevance threshold cutoffs (cosine > 0.78).',
      'Inject retrieved documentation context into system prompt with strict refusal instructions.',
      'Detect user frustration signals and trigger an automated human handoff webhook.'
    ],
    deliverable: 'A deployable Node/React support widget connected to vector documentation.',
    extensionChallenge: 'Add automated ticket creation in Linear or Jira when resolution fails.',
    starterPrompt: `Answer the user question strictly using the provided context chunks below.
If the context does not contain the answer, say "I do not have sufficient documentation on this topic" and trigger human transfer.
Context:
{{retrieved_chunks}}`,
    sampleCode: `// Vector Search Query Example
const { data: matches } = await supabase.rpc('match_docs', {
  query_embedding: queryVector,
  match_threshold: 0.78,
  match_count: 4,
});`,
    recommendedDevice: 'Laptop / Desktop Recommended'
  },
  {
    id: 'proj-06',
    number: '06',
    title: 'AI AUTOMATION WORKFLOW',
    subtitle: 'Self-healing, multi-step business process orchestration across tools.',
    difficulty: 'Advanced',
    skills: ['Webhook Orchestration', 'Error Handling', 'JSON Schema Validation', 'State Tracking'],
    tools: ['n8n / Make', 'REST APIs', 'PostgreSQL', 'Gemini 2.5 Flash'],
    description: 'Build an autonomous multi-step workflow that monitors customer emails, categorizes urgency, extracts attached invoices into accounting records, and posts summaries to Slack.',
    architectureSteps: [
      'Listen for new email webhooks with attachment detection.',
      'Run multimodal OCR on invoice PDF to extract supplier, tax ID, line items, and total.',
      'Validate JSON schema format and check totals against company expense limits.',
      'Disburse to database and trigger Slack confirmation with 1-click approval buttons.'
    ],
    deliverable: 'An end-to-end production automation scenario with full error recovery routes.',
    extensionChallenge: 'Implement automatic currency exchange conversion via open rates API.',
    starterPrompt: `You are an automated invoice parsing and verification engine.
Input: Multimodal OCR text of commercial invoice.
Task: Extract structured invoice data and return ONLY a valid JSON object strictly matching this schema:
{
  "vendor": { "name": string, "taxId": string, "country": string },
  "invoiceNumber": string,
  "issueDate": "YYYY-MM-DD",
  "lineItems": [{ "description": string, "quantity": number, "unitPrice": number, "total": number }],
  "currency": string,
  "subtotal": number,
  "taxAmount": number,
  "totalDue": number
}
If any critical field cannot be determined, set "flaggedForManualReview": true with reason.`,
    recommendedDevice: 'Laptop / Desktop Recommended'
  },
  {
    id: 'proj-07',
    number: '07',
    title: 'MULTI-TOOL AI AGENT',
    subtitle: 'Autonomous problem-solving agent with dynamic tool calling and memory.',
    difficulty: 'Advanced',
    skills: ['Agent ReAct Loops', 'Function Calling', 'State Machines', 'Safety Boundaries'],
    tools: ['@google/genai SDK', 'TypeScript', 'Cheerio Web Scraper', 'Node.js'],
    description: 'Build a fully autonomous AI agent that can plan multi-step missions, call tools to search documentation, query databases, execute code calculations, and self-correct when errors occur.',
    architectureSteps: [
      'Register tools with strict JSON schema declarations (SearchDocs, RunMath, QueryDB).',
      'Implement recursive ReAct reasoning loop with step budget and timeout safeguards.',
      'Maintain running scratchpad of intermediate observations.',
      'Synthesize final result upon agent self-termination.'
    ],
    deliverable: 'A CLI or web-based autonomous agent engine with visible step-by-step reasoning logs.',
    extensionChallenge: 'Add a human-in-the-loop confirmation step for destructive tool calls.',
    starterPrompt: `You are an autonomous engineering research agent.
You have access to the following tools:
- search_docs(query: string): searches technical API specifications
- calculate_expression(expr: string): evaluates mathematical formulas
- query_db(table: string, filter: string): queries relational inventory

Use the ReAct protocol:
Thought: analyze current state and determine next step
Action: call tool with parameters
Observation: result from tool call
... (repeat until mission goal is fulfilled)
Final Answer: comprehensive verified solution.`,
    sampleCode: `// ReAct Loop Step Definition
const tools = [
  { name: 'search_database', description: 'Query structured customer logs' },
  { name: 'fetch_web_url', description: 'Fetch and parse clean text from any URL' }
];`,
    recommendedDevice: 'Laptop / Desktop Recommended'
  },
  {
    id: 'proj-08',
    number: '08',
    title: 'AI-POWERED WEB APP',
    subtitle: 'Full-stack production application built with React, Node, and generative AI.',
    difficulty: 'Advanced',
    skills: ['React 19', 'Express / Node Backend', 'Streaming SSE', 'Database Persistence'],
    tools: ['Vite', 'Tailwind CSS', 'Gemini SDK', 'Cloud Run'],
    description: 'Create and ship a polished, production-ready full-stack AI web application (such as an intelligent resume optimizer or legal contract auditor) with streaming responses, user auth, and export features.',
    architectureSteps: [
      'Design clean, accessible single-page interface with responsive layout.',
      'Implement Express server routes proxying model requests to protect API keys.',
      'Stream chunked responses via Server-Sent Events for instant perceived speed.',
      'Package in Docker container and deploy to Cloud Run with live HTTPS domain.'
    ],
    deliverable: 'A live, publicly hosted web application repository with active users.',
    extensionChallenge: 'Add PDF export with client-side formatting and watermarks.',
    starterPrompt: `You are a specialized legal clause audit engine.
Analyze the supplied commercial agreement text for:
1. Unlimited liability or indemnification traps
2. Non-standard termination without cause penalties
3. Uncapped intellectual property assignment transfers
4. Governing jurisdiction anomalies
For every risk found, output: Risk Category, Severity (CRITICAL/MODERATE/LOW), Quoted Excerpt, and Suggested Neutral Redline Replacement.`,
    recommendedDevice: 'Laptop / Desktop Recommended'
  }
];
