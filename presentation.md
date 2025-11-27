# Presentation: How to Be a Better AI Developer
## From Vibe Coding to Agentic Architect

---

## Slide 1: The Shift
### What is "Vibe Coding"?
*   **Speed:** Idea -> Product in days, not months.
*   **Example:** 
    *   Vision: A simple WhatsApp message.
    *   Result: DB & Live Service (3 days), UI (1 day), Workflow (2 days).
*   **The Goal:** Focus on *what* to build, not just *how* to type the syntax.

---

## Slide 2: The Enemy
### Context Blindness & Context Rot
*   **The Risk:** LLMs have limited memory and attention.
*   **The Symptom:** "Double Code," hallucinations, forgetting previous instructions.
*   **The Cause:** 
    *   Error enters history -> AI repeats error.
    *   Too much noise (irrelevant files).
*   **The Reality:** You are not just a coder; you are a **Context Manager**.

---

## Slide 3: The Golden Rules
### Learnings from the Trenches
1.  **Tech Design is King:** Everything must be explicit. If it's not in the prompt/spec, it doesn't exist.
2.  **Single Source of Truth:** Use Markdown files (`.md`) to track *everything*.
3.  **Simplicity:** "Simple Made Easy" (Rich Hickey). 
    *   Separation of Concerns is vital.
    *   Monoliths can confuse agents; clean abstractions help them focus.

---

## Slide 4: The Agentic Workflow
### The "Brain" of Your Project
Don't just chat. **Structure the chat.**

*   **`plan.md`**: The Map.
    *   Milestones.
    *   High-level objectives.
*   **`tracking.md`**: The GPS.
    *   Current status.
    *   "What did we just finish?"
    *   "What is next?"
*   **`gemini.md` (System Context)**: The Rules.
    *   "Always update tracking.md."
    *   "Don't use external libraries without asking."

---

## Slide 5: Practical Tactics
### Tools for the AI Developer
*   **Context Pruning:**
    *   Use `/compress` or summary tools.
    *   Keep a 200-token "current state" summary.
*   **File Management:**
    *   `.geminiignore`: Hide the noise (node_modules, dist, etc.).
    *   One centralized file for agent instructions.
*   **The Feedback Loop:**
    *   Task -> Dev -> Deployment -> Verification.
    *   Don't trust; verify (run the code).

---

## Slide 6: The Future
### Multi-Agent Systems (SOC-MAS)
*   **A2A (Agent to Agent):** Agents talking to agents.
*   **Roles:**
    *   Architect Agent (Planning)
    *   Builder Agent (Coding)
    *   Reviewer Agent (Quality)
*   **Your Role:** The Orchestrator.

---

## Slide 7: Summary
### How to Start Today
1.  Create a `plan.md` for your current task.
2.  Create a `tracking.md` to log your AI interactions.
3.  Treat Context as a precious resource. Keep it clean.

> "Less tokens is better than creation."

---
