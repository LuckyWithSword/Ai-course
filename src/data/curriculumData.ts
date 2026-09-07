import { Module } from '../types';

export const CURRICULUM_MODULES: Module[] = [
  {
    id: 'mod-01',
    number: '01',
    title: 'AI FOUNDATIONS',
    tagline: 'Deconstruct generative models, architectures, and mechanical boundaries.',
    description: 'Learn how large language models think, calculate probabilities, manage token context, and bridge human language with neural computation.',
    colorScheme: 'cream-red',
    estimatedHours: 6,
    difficulty: 'Beginner',
    topics: [
      'Generative AI vs Classical ML',
      'LLM Mechanics & Probabilistic Next-Tokens',
      'Tokens, Embeddings & Context Windows',
      'Hallucination Sources & Grounding',
      'Multimodal Latents (Audio, Vision, Code)',
      'Model Selection Taxonomy (Flash vs Pro vs Open Weights)',
      'Ethics, Privacy, Guardrails & Copyright'
    ],
    lessons: [
      {
        id: 'les-01-01',
        moduleId: 'mod-01',
        number: '01.1',
        title: 'The Mechanical Anatomy of an LLM',
        duration: '22 min',
        type: 'concept',
        xpReward: 50,
        summary: 'Understand tokens, attention heads, and probabilistic text synthesis without math jargon.',
        content: [
          {
            sectionTitle: 'Next-Token Prediction & Probability Vectors',
            body: 'Large language models do not search a database of sentences; they compute relative likelihoods across an 80,000+ token vocabulary based on high-dimensional attention over the context window.',
            keyTakeaways: [
              'Tokens correspond to ~3-4 characters of English text or code symbols.',
              'Temperature adjusts randomness; lower values yield deterministic answers.',
              'Context windows determine the memory horizon of your session.'
            ]
          },
          {
            sectionTitle: 'Context Windows & Degradation',
            body: 'While modern frontier models boast 1M+ token context windows, attention retention curves show that information placed in the absolute beginning or exact middle is subject to "needle in a haystack" decay.',
            promptSnippet: `System: You are an analytical AI engineer.
Task: Explain token compression mechanics in under 120 words using an architectural analogy.
Constraint: Zero buzzwords. Include one concrete example of tokenization.`,
            keyTakeaways: [
              'Place reference schemas and critical constraints near the end of prompt contexts.',
              'Structure inputs with clear XML or markdown section boundaries.'
            ]
          }
        ],
        practicalTask: 'Inspect token counts of a 500-word excerpt using a token visualizer and calibrate a prompt to stay below 400 tokens.'
      },
      {
        id: 'les-01-02',
        moduleId: 'mod-01',
        number: '01.2',
        title: 'Model Selection: Frontier vs Reasoning vs Fast Local',
        duration: '28 min',
        type: 'hands-on',
        xpReward: 60,
        summary: 'Framework for choosing between high-throughput flash models, deep reasoning models, and local quantized weights.',
        content: [
          {
            sectionTitle: 'The Latency vs Reasoning Matrix',
            body: 'Deploying high-compute reasoning models for simple classifications is an anti-pattern that burns budget and adds 10x latency. Learn the tiered routing approach.',
            keyTakeaways: [
              'Routing: Fast Flash tier for classification and filtering (<200ms).',
              'Deep tier for code architecture, mathematical proofs, and logic schemas.',
              'Quantized local models (e.g., Llama 3 8B) for zero-data-leakage privacy.'
            ]
          }
        ],
        practicalTask: 'Create an evaluation table scoring 3 frontier models on response speed, price per 1M tokens, and schema adherence.'
      }
    ]
  },
  {
    id: 'mod-02',
    number: '02',
    title: 'MASTERING AI ASSISTANTS',
    tagline: 'Turn conversational assistants into persistent operational workstations.',
    description: 'Master advanced custom instructions, knowledge attachments, data synthesis, visual reasoning, and repeatable day-to-day productivity loops.',
    colorScheme: 'blue',
    estimatedHours: 8,
    difficulty: 'Beginner',
    topics: [
      'Advanced Custom Instructions & Personas',
      'Knowledge Base Grounding with Documents & PDFs',
      'Spreadsheet & Raw Data Analysis with Code Execution',
      'Multimodal Visual Reasoning & Diagram Extraction',
      'Personal Executive Assistant Systems',
      'Reusable Productivity Loops & Reusable Snippets'
    ],
    lessons: [
      {
        id: 'les-02-01',
        moduleId: 'mod-02',
        number: '02.1',
        title: 'Engineering Custom System Directives',
        duration: '25 min',
        type: 'prompt',
        xpReward: 65,
        summary: 'Architect permanent instructions that eliminate conversational fluff and enforce rigorous outputs.',
        content: [
          {
            sectionTitle: 'Permanent System Directive Template',
            body: 'Every conversational interaction inherits default agreeable behaviors unless explicitly overwritten with an operative role definition.',
            promptSnippet: `[ROLE] Senior Technical Editor & System Architect.
[STYLE] Terse, factual, dense. No preamble, no postamble.
[CONSTRAINTS] Never apologize. Flag contradictory premises immediately. Provide production-ready code with typescript types.`,
            keyTakeaways: [
              'Specify role, domain constraints, negative constraints, and output schema.',
              'Use bracketed delimiters to avoid style drift across extended threads.'
            ]
          }
        ],
        practicalTask: 'Write and test a 3-part Custom Instruction block for your primary AI assistant that cuts verbosity by 50%.'
      },
      {
        id: 'les-02-02',
        moduleId: 'mod-02',
        number: '02.2',
        title: 'Analytical Data Extraction from PDFs & Sheets',
        duration: '35 min',
        type: 'hands-on',
        xpReward: 70,
        summary: 'Extract structured tables, cross-correlate balance sheets, and plot trend anomalies.',
        content: [
          {
            sectionTitle: 'Prompting Code Interpreters for Deterministic Math',
            body: 'LLMs are notoriously erratic with arithmetic calculations. Forcing the assistant to invoke an internal Python sandbox guarantees 100% calculation accuracy.',
            keyTakeaways: [
              'Instruct the assistant: "Always write and execute Python code to verify all math before outputting numbers."',
              'Extract CSV tables using explicit pipe markdown or JSON structures.'
            ]
          }
        ],
        practicalTask: 'Upload an unformatted financial report and generate a clean pivot table and summary graph using Python execution.'
      }
    ]
  },
  {
    id: 'mod-03',
    number: '03',
    title: 'PROMPT ENGINEERING',
    tagline: 'The mechanics of high-precision inputs, zero-shot chains, and prompt debugging.',
    description: 'Deconstruct prompt syntax from basics to advanced few-shot prompting, structured JSON schema enforcement, iterative evaluation, and prompt unit testing.',
    colorScheme: 'green',
    estimatedHours: 10,
    difficulty: 'Intermediate',
    topics: [
      'Prompt Grammar: Role, Context, Task, Constraints, Output',
      'Zero-Shot vs Few-Shot Exemplars',
      'Structured Outputs (Strict JSON Schemas & Pydantic)',
      'Chain-of-Thought (CoT) & Tree-of-Thought Reasoning',
      'Prompt Debugging & Regression Testing',
      'Controlling Tone, Density, and Formatting Rules',
      'Reusable Master Prompt Libraries'
    ],
    lessons: [
      {
        id: 'les-03-01',
        moduleId: 'mod-03',
        number: '03.1',
        title: 'Structured Output Engineering & JSON Schemas',
        duration: '32 min',
        type: 'code',
        xpReward: 80,
        summary: 'Force language models into mathematically validated JSON schemas for backend interoperability.',
        content: [
          {
            sectionTitle: 'Why Unstructured Text Breaks Production',
            body: 'If your application parses strings with regular expressions, unexpected conversational chatter will crash your pipeline. Strict schema enforcement forces compliance.',
            codeSnippet: `// TypeScript Interface for strict LLM Response
interface ArticleAnalysis {
  sentiment: 'positive' | 'neutral' | 'critical';
  confidenceScore: number; // 0.0 to 1.0
  keyEntities: Array<{ name: string; category: string }>;
  executiveSummary: string;
  actionableInsights: string[];
}`,
            keyTakeaways: [
              'Use response_schema parameter or structured prompt delimiters.',
              'Provide 2 high-quality few-shot examples with extreme edge cases.'
            ]
          }
        ],
        practicalTask: 'Write a few-shot prompt that converts raw client email messages into a typed ticket object with zero extraneous text.'
      },
      {
        id: 'les-03-02',
        moduleId: 'mod-03',
        number: '03.2',
        title: 'Chain-of-Thought & Systematic Prompt Debugging',
        duration: '30 min',
        type: 'prompt',
        xpReward: 85,
        summary: 'Debug failing prompts by eliciting scratchpad reasoning steps before producing the final answer.',
        content: [
          {
            sectionTitle: 'The Step-by-Step Scratchpad Pattern',
            body: 'When answering multi-layered questions, requesting the answer upfront leads to hallucination. Eliciting an explicit `<thought>` scratchpad allows the model to attend to its own reasoning trail.',
            promptSnippet: `<instructions>
1. Decompose the user premise into atomic facts.
2. In <scratchpad>, critique each fact for logical consistency.
3. In <verdict>, output only the verified synthesis.
</instructions>`,
            keyTakeaways: [
              'Decompose complex questions into intermediate verifiable sub-steps.',
              'Filter out the scratchpad in client responses when displaying clean results.'
            ]
          }
        ],
        practicalTask: 'Take a prompt that frequently produces contradictory outputs and introduce a scratchpad protocol that raises accuracy to 95%+.'
      }
    ]
  },
  {
    id: 'mod-04',
    number: '04',
    title: 'AI FOR STUDY & RESEARCH',
    tagline: 'Accelerate synthesis, fact-checking, literature reviews, and memory synthesis.',
    description: 'Transform how you consume complex academic papers, analyze conflicting source materials, extract structured notes, and build personal knowledge graphs.',
    colorScheme: 'cream',
    estimatedHours: 8,
    difficulty: 'Intermediate',
    topics: [
      'Multi-Document Synthesis & Contradiction Detection',
      'PDF Text & Visual Diagram Extraction Pipelines',
      'Source Comparison & Citation Verification',
      'AI-Assisted Note Architectures (Zettelkasten & Obsidian)',
      'Personalized Spaced Repetition Flashcards & Quizzes',
      'End-to-End Research -> Synthesis -> Report Generation'
    ],
    lessons: [
      {
        id: 'les-04-01',
        moduleId: 'mod-04',
        number: '04.1',
        title: 'Synthesizing Conflicting Academic Papers',
        duration: '26 min',
        type: 'workflow',
        xpReward: 70,
        summary: 'Run automated comparative analysis across two competing perspectives to extract consensus vs disagreements.',
        content: [
          {
            sectionTitle: 'Comparative Research Matrix',
            body: 'Feed excerpts from paper A and paper B into a dual-column comparative rubric to isolate methodology variations, sample sizes, and contested claims.',
            keyTakeaways: [
              'Always demand exact quoted textual anchors before allowing the model to summarize.',
              'Highlight unresolved empirical discrepancies.'
            ]
          }
        ],
        practicalTask: 'Extract contrasting positions from two research abstracts and generate a 1-page synthesis briefing.'
      }
    ]
  },
  {
    id: 'mod-05',
    number: '05',
    title: 'AI CONTENT CREATION',
    tagline: 'Multi-format creative production: editorial text, generative images, audio, and video.',
    description: 'Deploy generative models for high-impact writing, consistent image styles, visual posters, text-to-speech narrations, and short-form video generation pipelines.',
    colorScheme: 'red',
    estimatedHours: 12,
    difficulty: 'Intermediate',
    topics: [
      'Editorial Copywriting: Narrative Hooks & Story Structures',
      'Generative Image Art Direction & Consistent Styles',
      'Seed Locking, Aspect Ratios & Prompt Iteration',
      'Visual Posters, Banners & Editorial Graphics',
      'Text-to-Video & Synthetic B-Roll Creation',
      'Neural Voice Generation & Voiceover Master Chains',
      'Content Repurposing: 1 Pillar Essay -> 10 Derivative Assets'
    ],
    lessons: [
      {
        id: 'les-05-01',
        moduleId: 'mod-05',
        number: '05.1',
        title: 'Art Directing Image Generation via Typography & Lighting',
        duration: '35 min',
        type: 'hands-on',
        xpReward: 90,
        summary: 'Direct visual generators with precise cinematography, lens types, lighting ratios, and color palettes.',
        content: [
          {
            sectionTitle: 'The Vocabulary of High-End Visual Prompting',
            body: 'Replace vague superlatives ("photorealistic, 8k, masterpiece") with concrete technical descriptors: camera focal length, film stock, lighting key, and composition balance.',
            promptSnippet: `Medium: 35mm film photograph
Subject: Minimalist architectural model constructed from untreated card stock and raw pine
Lighting: Low-angle afternoon sun, deep geometric hard shadows, warm highlights
Color Palette: Ochre, burnt umber, raw linen
Framing: Dutch angle, macro depth of field, f/2.8`,
            keyTakeaways: [
              'Describe lighting, physical materials, and spatial relationships explicitly.',
              'Maintain consistent visual motifs across an entire brand asset library.'
            ]
          }
        ],
        practicalTask: 'Generate a 4-image visual campaign maintaining character and aesthetic continuity across different camera angles.'
      }
    ]
  },
  {
    id: 'mod-06',
    number: '06',
    title: 'AI FOR BUSINESS',
    tagline: 'Competitor intel, customer personas, automated proposals, and workflow acceleration.',
    description: 'Drive real enterprise value: analyze market niches, write compelling RFP proposals, generate personalized sales copy, build knowledge bases, and automate reports.',
    colorScheme: 'blue',
    estimatedHours: 10,
    difficulty: 'Intermediate',
    topics: [
      'Niche Market Research & Competitor Gap Analysis',
      'Customer Persona Synthesis from Qualitative Interviews',
      'High-Conversion Sales Copy & Strategic Proposals',
      'Automated RFP & Client Proposal Generators',
      'Internal Knowledge Systems & Employee Query Bots',
      'Executive Dashboards & Automated Performance Reports'
    ],
    lessons: [
      {
        id: 'les-06-01',
        moduleId: 'mod-06',
        number: '06.1',
        title: 'Automated Client RFP & Proposal Generator',
        duration: '30 min',
        type: 'workflow',
        xpReward: 85,
        summary: 'Build a system that ingests client brief requirements and drafts a 3-tier scoped commercial proposal.',
        content: [
          {
            sectionTitle: 'The Scope-Deliverables-Timeline Scaffold',
            body: 'Convert unstructured client onboarding notes into a formal scope of work with milestone timelines, deliverable boundaries, and risk buffers.',
            keyTakeaways: [
              'Clearly define what is explicitly OUT of scope to prevent project creep.',
              'Calculate milestone pricing with transparent line items.'
            ]
          }
        ],
        practicalTask: 'Transform a raw 3-paragraph client email into a formatted 4-page commercial proposal.'
      }
    ]
  },
  {
    id: 'mod-07',
    number: '07',
    title: 'AI AUTOMATION',
    tagline: 'Connect APIs, webhooks, JSON pipelines, and autonomous event triggers.',
    description: 'Move beyond chat windows. Connect LLMs to tools like Make, Zapier, n8n, and custom webhooks to build self-healing, automated backend business operations.',
    colorScheme: 'green',
    estimatedHours: 14,
    difficulty: 'Advanced',
    topics: [
      'Webhooks, REST APIs & Event-Driven Triggers',
      'Connecting LLM Endpoints to Workflow Automation Engines',
      'Data Transformation with JSON & Regular Expressions',
      'Building a Lead Qualification & Routing Pipeline',
      'Autonomous Content Publishing & Quality Checking',
      'Error Handling, Rate Limiting & Retry Backoffs'
    ],
    lessons: [
      {
        id: 'les-07-01',
        moduleId: 'mod-07',
        number: '07.1',
        title: 'Architecting an Event-Driven Webhook Pipeline',
        duration: '40 min',
        type: 'code',
        xpReward: 100,
        summary: 'Set up an automated webhook listener that receives inbound customer data, evaluates it with an LLM, and dispatches actions.',
        content: [
          {
            sectionTitle: 'The Ingest -> Filter -> Enrich -> Act Loop',
            body: 'Every production automation pipeline consists of four stages: webhook ingestion, JSON schema validation, LLM enrichment, and external API dispatch.',
            codeSnippet: `// Webhook Handler Blueprint
export async function handleInboundLead(leadData: LeadPayload) {
  // 1. Fast Validation
  if (!leadData.email || !leadData.companySize) return { status: 'invalid' };
  
  // 2. LLM Scoring
  const score = await evaluateLeadFit(leadData);
  
  // 3. Conditional Dispatch
  if (score.priority === 'HIGH') {
    await dispatchToSlack(leadData, score.rationale);
    await triggerCalendarInvite(leadData.email);
  }
}`,
            keyTakeaways: [
              'Always validate payload signatures and handle network timeouts.',
              'Save intermediate states to prevent double-processing.'
            ]
          }
        ],
        practicalTask: 'Deploy an automated workflow that parses inbound form leads and routes high-tier prospects to a prioritized alert.'
      }
    ]
  },
  {
    id: 'mod-08',
    number: '08',
    title: 'AI AGENTS',
    tagline: 'Autonomous multi-step agents: tools, function calling, memory, and RAG architectures.',
    description: 'Transition from passive query-response models to proactive agents capable of goal planning, invoking web search tools, executing database queries, and managing state.',
    colorScheme: 'black',
    estimatedHours: 16,
    difficulty: 'Advanced',
    topics: [
      'Chatbot vs Assistant vs Autonomous Agent',
      'ReAct (Reason + Act) Loop Architecture',
      'Function Calling & Tool Use Specifications',
      'Vector Databases & Retrieval-Augmented Generation (RAG)',
      'Short-term Memory vs Long-term Vector Memory',
      'Multi-Agent Coordination & Swarm Patterns',
      'Guardrails, Infinite Loop Detection & Budget Caps'
    ],
    lessons: [
      {
        id: 'les-08-01',
        moduleId: 'mod-08',
        number: '08.1',
        title: 'Implementing the ReAct Execution Loop',
        duration: '45 min',
        type: 'code',
        xpReward: 120,
        summary: 'Build the foundational Reason + Act loop that powers modern autonomous agent architectures.',
        content: [
          {
            sectionTitle: 'Thought, Action, Observation Loop',
            body: 'An agent decides what to do by cycling through internal reasoning (Thought), tool execution (Action), and environment feedback (Observation) until the goal predicate is satisfied.',
            codeSnippet: `// The Core Agent Loop
while (stepCount < MAX_STEPS && !isGoalComplete) {
  const thought = await model.generateThought(context);
  const toolCall = await model.selectTool(thought, availableTools);
  
  if (toolCall.name === 'FINISH') break;
  
  const observation = await executeTool(toolCall);
  context.append({ thought, toolCall, observation });
  stepCount++;
}`,
            keyTakeaways: [
              'Enforce a strict step count limit to prevent endless tool loops.',
              'Provide tool descriptions with crystal-clear parameter types and error semantics.'
            ]
          }
        ],
        practicalTask: 'Construct a 2-tool agent that can search web docs and calculate currency conversions autonomously.'
      }
    ]
  },
  {
    id: 'mod-09',
    number: '09',
    title: 'BUILD WITH AI',
    tagline: 'Frontend, backend, SDK integration, vector search, and production deployment.',
    description: 'Learn modern software engineering with AI: leverage coding assistants, integrate Gemini API SDKs, build React/Node applications, manage Git repositories, and ship live apps.',
    colorScheme: 'blue',
    estimatedHours: 18,
    difficulty: 'Advanced',
    topics: [
      'Full-Stack Architecture: Frontend, Backend API, Database',
      'Integrating @google/genai and Model SDKs',
      'AI-Assisted Coding Workflows (Cursor, Copilot, Antigravity)',
      'Vector Search & Semantic Retrieval in React/Node',
      'Authentication, API Key Security & Server-Side Proxying',
      'Git, GitHub, CI/CD & Cloud Run Container Deployment'
    ],
    lessons: [
      {
        id: 'les-09-01',
        moduleId: 'mod-09',
        number: '09.1',
        title: 'Secure Full-Stack LLM Architecture with Node.js',
        duration: '40 min',
        type: 'code',
        xpReward: 110,
        summary: 'Protect API keys and prevent client-side exploitation using server-side proxy routes and rate limits.',
        content: [
          {
            sectionTitle: 'Never Expose Secrets in Client Bundles',
            body: 'Any environment variable exposed to the browser can be extracted in seconds. All model requests must pass through an authenticated server-side controller.',
            codeSnippet: `// server/routes/ai.ts
import { GoogleGenAI } from '@google/genai';
import express from 'express';

const router = express.Router();
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post('/api/analyze', async (req, res) => {
  const { prompt } = req.body;
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: prompt,
  });
  res.json({ output: response.text });
});`,
            keyTakeaways: [
              'Bind model calls to server routes with rate limiting and origin checks.',
              'Stream responses using Server-Sent Events (SSE) for responsive UI feedback.'
            ]
          }
        ],
        practicalTask: 'Create an Express endpoint that securely wraps an AI call and returns typed JSON to a React frontend.'
      }
    ]
  },
  {
    id: 'mod-10',
    number: '10',
    title: 'AI MONEY & FREELANCING',
    tagline: 'Turn AI mastery into commercial income: client acquisition, proposals, and delivery.',
    description: 'Monetize your capabilities: identify high-margin business bottlenecks, pitch AI automation retainers, package AI chatbot services, close clients, and scale a lean consultancy.',
    colorScheme: 'red',
    estimatedHours: 12,
    difficulty: 'Intermediate',
    topics: [
      'High-Value Business Problems vs Toy AI Trinkets',
      'Packaging AI Automation Services as Monthly Retainers',
      'Building Custom Knowledge Base Bots for Local Businesses',
      'Cold Outreach Scripts, Portfolio Design & Proof-of-Work',
      'Pricing Math: Value-Based Pricing vs Hourly Traps',
      'Client Onboarding, SLAs, Quality Control & Retainer Retention'
    ],
    lessons: [
      {
        id: 'les-10-01',
        moduleId: 'mod-10',
        number: '10.1',
        title: 'Value-Based Pricing for AI Solutions',
        duration: '30 min',
        type: 'workflow',
        xpReward: 95,
        summary: 'Price client implementations based on the hours saved or revenue generated, not the time you spent writing prompts.',
        content: [
          {
            sectionTitle: 'The $10,000 ROI Equation',
            body: 'If an AI automation pipeline saves a 5-person sales team 15 hours per week of manual data entry, you are saving the business $45,000 annually. Charging $8,000 for implementation is an immediate no-brainer.',
            keyTakeaways: [
              'Anchor on the business outcome, never on the underlying model API cost.',
              'Bundle recurring monthly maintenance retainers ($500-$2,500/mo).'
            ]
          }
        ],
        practicalTask: 'Draft a 1-page proposal for a boutique real estate firm detailing an automated lead responder with 3 pricing tiers.'
      }
    ]
  },
  {
    id: 'mod-11',
    number: '11',
    title: 'REAL-WORLD PROJECTS',
    tagline: '8 production-grade portfolio builds from personal agents to SaaS prototypes.',
    description: 'Deep dive into 8 comprehensive real-world applications. Each build includes architecture diagrams, source code blueprints, deployment guides, and extension challenges.',
    colorScheme: 'green',
    estimatedHours: 24,
    difficulty: 'Advanced',
    topics: [
      'Project 01 — AI Personal Assistant Workstation',
      'Project 02 — Multi-Format AI Content Machine',
      'Project 03 — Deep AI Research & Synthesis System',
      'Project 04 — Autonomous AI Lead Generator & Qualifier',
      'Project 05 — Intelligent Customer Support Bot with RAG',
      'Project 06 — Cross-Application Automation Workflow',
      'Project 07 — Multi-Tool Autonomous AI Agent',
      'Project 08 — Full-Stack AI-Powered Web Application'
    ],
    lessons: [
      {
        id: 'les-11-01',
        moduleId: 'mod-11',
        number: '11.1',
        title: 'Portfolio Architecture & Code Delivery Standards',
        duration: '35 min',
        type: 'hands-on',
        xpReward: 100,
        summary: 'Structure your project repositories, documentation, and live demo links to stand out to enterprise clients and hiring teams.',
        content: [
          {
            sectionTitle: 'The Proof-of-Work Standard',
            body: 'A portfolio project without a live interactive URL or a clean GitHub README with architectural diagrams gets skipped. Learn the 5 pillars of an undeniable project showcase.',
            keyTakeaways: [
              'Include an interactive demo or high-speed Loom walkthrough video.',
              'Provide measurable benchmarks (e.g. 84% reduction in processing time).'
            ]
          }
        ],
        practicalTask: 'Setup a standardized project repository template with architecture schemas and configuration docs.'
      }
    ]
  },
  {
    id: 'mod-12',
    number: '12',
    title: 'FINAL CAPSTONE: BUILD YOUR AI SYSTEM',
    tagline: 'The ultimate synthesis: Research → AI → Automation → Application → Deployment → Business.',
    description: 'Your graduation milestone. Design, build, deploy, and commercialize a complete end-to-end AI system that solves a tangible business problem.',
    colorScheme: 'black',
    estimatedHours: 30,
    difficulty: 'Mastery',
    topics: [
      'Problem Discovery & Commercial Feasibility Audit',
      'System Architecture: Data Pipeline & Model Topology',
      'Automation Engine & Tool Integration',
      'Frontend Application & User Experience Layer',
      'Production Deployment & Monitoring Infrastructure',
      'Business Go-to-Market & Portfolio Verification'
    ],
    lessons: [
      {
        id: 'les-12-01',
        moduleId: 'mod-12',
        number: '12.1',
        title: 'Capstone System Architecture & Defense',
        duration: '50 min',
        type: 'workflow',
        xpReward: 250,
        summary: 'Submit your end-to-end AI system blueprint, code repository, and live deployment for graduation certification.',
        content: [
          {
            sectionTitle: 'The 6-Stage Capstone Progression',
            body: 'Combine all course disciplines into one production artifact: Research analysis, AI core intelligence, backend automation triggers, user-facing interface, cloud hosting, and business monetization model.',
            keyTakeaways: [
              'Graduate from learner to verified AI Architect.',
              'Receive the cryptographic digital certificate and permanent showcase entry.'
            ]
          }
        ],
        practicalTask: 'Deploy your complete capstone application to cloud infrastructure with live healthcheck verification.'
      }
    ]
  }
];
