# Session Guide: How to Be a Better AI Developer
**Duration:** 1 Hour
**Goal:** Teach developers how to leverage AI agents effectively, manage context, and adopt "Vibe Coding" principles to build products rapidly.

## Session Overview
This session is based on real-world learnings from the "Antigravity" project. It moves beyond basic prompting into "Agentic Workflows" where the developer acts as an architect and the AI as the builder.

## Timeline (60 Minutes)

### Slide 1: The Shift (10 Minutes)
*   **Subtitle:** What is "Vibe Coding"?
*   **Objective:** Define the mindset shift from "writing code" to "guiding agents".
*   **Key Talking Points:**
    *   **Speed:** Idea -> Product in days, not months.
    *   **Example:** Vision: A photo of a whiteboard UI sketch. Result: Production-ready React App + Database Schema (4 hours).
    *   **The Goal:** Focus on *what* to build, not just *how* to type the syntax.
*   **Activity:** Ask the audience: "How many of you have had an AI chat go off the rails after 20 messages?" (Segues into Context Rot).

### Slide 2: The Enemy (10 Minutes)
*   **Subtitle:** Context Blindness & Context Rot
*   **Objective:** Explain why AI projects fail as they grow and how to prevent it.
*   **Key Concepts:**
    *   **The Risk:** LLMs have limited memory and attention (Context Blindness).
    *   **The Symptom:** "Double Code," hallucinations, forgetting previous instructions.
    *   **The Cause:** Error enters history -> AI repeats error. Too much noise (irrelevant files).
    *   **The Reality:** You are not just a coder; you are a **Context Manager**.

### Slide 3: The Golden Rules (10 Minutes)
*   **Subtitle:** Learnings from the Trenches
*   **Objective:** Establish the fundamental principles of working with AI.
*   **Key Points:**
    1.  **Tech Design is King:** Everything must be explicit. If it's not in the prompt/spec, it doesn't exist.
    2.  **Single Source of Truth:** Use Markdown files (`.md`) to track *everything*.
    3.  **Simplicity:** "Simple Made Easy" (Rich Hickey). Separation of Concerns is vital. Monoliths confuse agents; clean abstractions help them focus.

### Slide 4: The Agentic Workflow (10 Minutes)
*   **Subtitle:** The "Brain" of Your Project
*   **Objective:** Show the practical steps/files to manage an AI project.
*   **The "Holy Trinity" of Files:**
    *   **`plan.md`**: The Map (Milestones, High-level objectives).
    *   **`tracking.md`**: The GPS (Current status, "What did we just finish?", "What is next?").
    *   **`gemini.md` (System Context)**: The Rules (e.g., "Always update tracking.md").

### Slide 5: Practical Tactics (10 Minutes)
*   **Subtitle:** Tools for the AI Developer
*   **Objective:** Actionable tips they can use immediately.
*   **Tactics:**
    *   **Context Pruning:** Use `/compress` or summary tools. Keep a 200-token "current state" summary.
    *   **File Management:** `.geminiignore` (Hide the noise). One centralized file for agent instructions.
    *   **The Feedback Loop:** Task -> Dev -> Deployment -> Verification. Don't trust; verify.

### Slide 6: The Future (5 Minutes)
*   **Subtitle:** Multi-Agent Systems (SOC-MAS)
*   **Objective:** Briefly touch on where this is going.
*   **Key Concepts:**
    *   **A2A (Agent to Agent):** Agents talking to agents.
    *   **Roles:** Architect Agent (Planning), Builder Agent (Coding), Reviewer Agent (Quality).
    *   **Your Role:** The Orchestrator.

### Slide 7: Summary (5 Minutes)
*   **Subtitle:** How to Start Today
*   **Objective:** Final wrap up and Q&A.
*   **Key Takeaways:**
    1.  Create a `plan.md` for your current task.
    2.  Create a `tracking.md` to log your AI interactions.
    3.  Treat Context as a precious resource. Keep it clean.
*   **Final Thought:** "Clear inputs, clear outputs."

## Preparation Checklist
- [ ] Review `presentation.md` slides.
- [ ] Have an example IDE open with `plan.md` and `tracking.md`.
- [ ] Prepare a "horror story" example of context rot (e.g., AI hallucinating a library that doesn't exist because of old context).
