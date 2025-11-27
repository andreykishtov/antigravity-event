# Session Guide: How to Be a Better AI Developer
**Duration:** 1 Hour
**Goal:** Teach developers how to leverage AI agents effectively, manage context, and adopt "Vibe Coding" principles to build products rapidly.

## Session Overview
This session is based on real-world learnings from the "Antigravity" project. It moves beyond basic prompting into "Agentic Workflows" where the developer acts as an architect and the AI as the builder.

## Timeline (60 Minutes)

### 1. Introduction: The Era of Vibe Coding (10 Minutes)
*   **Objective:** Define the mindset shift from "writing code" to "guiding agents".
*   **Key Talking Points:**
    *   **What is Vibe Coding?** It's about speed and vision. Going from a "photo of a whiteboard UI sketch" idea to a live service in hours.
    *   **The Promise:** Rapid prototyping (e.g., Production-ready React App + Database Schema in 4 hours).
    *   **The Reality:** It's not just magic; it requires a new set of skills—specifically, **Context Management**.
*   **Activity:** Ask the audience: "How many of you have had an AI chat go off the rails after 20 messages?" (Segues into Context Rot).

### 2. The Core Problem: Context Rot & Blindness (10 Minutes)
*   **Objective:** Explain why AI projects fail as they grow and how to prevent it.
*   **Key Concepts:**
    *   **Context Blindness:** The biggest risk. LLMs don't "know" your whole project unless you tell them.
    *   **Context Rot:** Errors enter history and compound.
    *   **The Solution:**
        *   **Pruning:** Cleaning up the context.
        *   **Summarization:** Keeping a 200-token summary of the current state.
        *   **Explicit Tech Design:** "Tech design is the most important part."

### 3. The Methodology: Agentic Workflow (20 Minutes)
*   **Objective:** Show the practical steps to manage an AI project.
*   **The "Holy Trinity" of Files:**
    1.  **`plan.md`**: The roadmap. Milestones. What are we building?
    2.  **`tracking.md`**: The current state. What did we just do? What is the agent doing now?
    3.  **`gemini.md` / System Instructions**: The rules of engagement (e.g., "Always update tracking.md").
*   **Best Practices:**
    *   **Single Source of Truth:** Write every change in a Markdown file.
    *   **Prompting for Design:** Don't just prompt for code; prompt for the *design* of the code first.
    *   **Simplicity:** Quote Rich Hickey ("Simple Made Easy"). Abstraction and separation of concerns are even more critical when AI is writing the code.

### 4. Tools & Tactics (15 Minutes)
*   **Objective:** actionable tips they can use immediately.
*   **Tactics:**
    *   **`.geminiignore`**: Don't let the AI read garbage.
    *   **`/compress`**: Use tools to summarize history when it gets too long.
    *   **Checkpoints:** Save your state before a big refactor.
    *   **The Loop:** Task -> Development -> Deployment (verify in browser/MCPs).
*   **Live Walkthrough (Optional if time permits):**
    *   Show a `plan.md` file.
    *   Show a `tracking.md` update after a task.

### 5. Q&A and Wrap Up (5 Minutes)
*   **Final Thought:** "We are moving from 'Man in the Loop' to 'Man as the Architect'. Remember: **Clear inputs, clear outputs.**"
*   **Call to Action:** Start your next feature by writing a `plan.md` before writing a single line of code.

## Preparation Checklist
- [ ] Review `presentation.md` slides.
- [ ] Have an example IDE open with `plan.md` and `tracking.md`.
- [ ] Prepare a "horror story" example of context rot (e.g., AI hallucinating a library that doesn't exist because of old context).
