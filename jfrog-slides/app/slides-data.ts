export type Slide = {
  id: number;
  title: string;
  subtitle?: string;
  content?: {
    type: 'list' | 'text' | 'quote';
    items?: string[] | { text: string; subitems?: string[] }[];
    text?: string;
  }[];
};

export const slides: Slide[] = [
  {
    id: 0,
    title: "How to Be a Better AI Developer",
    subtitle: "From Vibe Coding to Agentic Architect",
    content: []
  },
  {
    id: 1,
    title: "The Shift",
    subtitle: "What is \"Vibe Coding\"?",
    content: [
      {
        type: 'list',
        items: [
          { 
            text: "**Speed:** Idea -> Product in days, not months.",
            subitems: []
          },
          { 
            text: "**Example:**",
            subitems: [
              "Vision: A photo of a whiteboard UI sketch.",
              "Result: Production-ready React App + Database Schema (4 hours)."
            ]
          },
          { 
            text: "**The Goal:** Focus on *what* to build, not just *how* to type the syntax.",
            subitems: []
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "The Enemy",
    subtitle: "Context Blindness & Context Rot",
    content: [
      {
        type: 'list',
        items: [
          { 
            text: "**The Risk:** LLMs have limited memory and attention.",
            subitems: []
          },
          { 
            text: "**The Symptom:** \"Double Code,\" hallucinations, forgetting previous instructions.",
            subitems: []
          },
          { 
            text: "**The Cause:**",
            subitems: [
              "Error enters history -> AI repeats error.",
              "Too much noise (irrelevant files)."
            ]
          },
          { 
            text: "**The Reality:** You are not just a coder; you are a **Context Manager**.",
            subitems: []
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "The Golden Rules",
    subtitle: "Learnings from the Trenches",
    content: [
      {
        type: 'list',
        items: [
          { text: "1. **Tech Design is King:** Everything must be explicit. If it's not in the prompt/spec, it doesn't exist." },
          { text: "2. **Single Source of Truth:** Use Markdown files (`.md`) to track *everything*." },
          { 
            text: "3. **Simplicity:** \"Simple Made Easy\" (Rich Hickey).",
            subitems: [
              "Separation of Concerns is vital.",
              "Monoliths can confuse agents; clean abstractions help them focus."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "The Agentic Workflow",
    subtitle: "The \"Brain\" of Your Project",
    content: [
      { type: 'text', text: "Don't just chat. **Structure the chat.**" },
      {
        type: 'list',
        items: [
          { 
            text: "**`plan.md`**: The Map.",
            subitems: ["Milestones.", "High-level objectives."]
          },
          { 
            text: "**`tracking.md`**: The GPS.",
            subitems: ["Current status.", "\"What did we just finish?\"", "\"What is next?\""]
          },
          { 
            text: "**`gemini.md` (System Context)**: The Rules.",
            subitems: ["\"Always update tracking.md.\"", "\"Don't use external libraries without asking.\""]
          }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Practical Tactics",
    subtitle: "Tools for the AI Developer",
    content: [
      {
        type: 'list',
        items: [
          { 
            text: "**Context Pruning:**",
            subitems: [
              "Use `/compress` or summary tools.",
              "Keep a 200-token \"current state\" summary."
            ]
          },
          { 
            text: "**File Management:**",
            subitems: [
              "`.geminiignore`: Hide the noise (node_modules, dist, etc.).",
              "One centralized file for agent instructions."
            ]
          },
          { 
            text: "**The Feedback Loop:**",
            subitems: [
              "Task -> Dev -> Deployment -> Verification.",
              "Don't trust; verify (run the code)."
            ]
          }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "The Future",
    subtitle: "Multi-Agent Systems (SOC-MAS)",
    content: [
      {
        type: 'list',
        items: [
          { text: "**A2A (Agent to Agent):** Agents talking to agents." },
          { 
            text: "**Roles:**",
            subitems: [
              "Architect Agent (Planning)",
              "Builder Agent (Coding)",
              "Reviewer Agent (Quality)"
            ]
          },
          { text: "**Your Role:** The Orchestrator." }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Summary",
    subtitle: "How to Start Today",
    content: [
      {
        type: 'list',
        items: [
          { text: "1. Create a `plan.md` for your current task." },
          { text: "2. Create a `tracking.md` to log your AI interactions." },
          { text: "3. Treat Context as a precious resource. Keep it clean." }
        ]
      },
      {
        type: 'quote',
        text: "\"Clear inputs, clear outputs.\""
      }
    ]
  }
];

