```mermaid
graph TD
    subgraph Antigravity_Event
        AE[Antigravity Event] --> MP[Meta Prompting]
        AE --> C[Composability]
        AE --> SA[Sub Agents]
        AE --> DA[Deep Agents]
        DA --> PT[Planning Tools]
        DA --> SA_Ref[Sub Agents]
        DA --> FS[File System]
        DA --> ODA[Other Deep Agents]
    end

    subgraph Vibe_Coding_Creation
        Vision --> WhatsApp
        WhatsApp --> TechDesign[Tech Design / Agent Builder Event]
        TechDesign --> DB_Service[Database & Live Service (3 days)]
        DB_Service --> UI[UI (1 day)]
        UI --> Workflow[Workflow (2 days)]
        Workflow --> AgentBuilder[Agent Builder (1 week)]
        AgentBuilder --> Wapi[Wapi Infra Tool for Voice]
        Wapi --> HomePage[Home Page & Transcription Events]
    end

    subgraph Vibe_Coding_Analysis
        Bad[Whats Bad] --> ContextBlindness[Context Blindness]
        ContextBlindness --> DoubleCode[Double Code]
        
        Good[Whats Good] --> NewFeatures[New Features]
        Good --> ProductQA[Product QA Session]
        Good --> Refactoring[Code Base Refactoring]
        Good --> MockData[Mock Data Generation]
        Good --> Prototyping[Product Prototyping]
    end

    subgraph Learnings
        L1[Tech Design is Most Important]
        L2[Prompting for Tech Design]
        L3[Write Prompts in Jiras]
        L4[Ask LLM to Ask Questions]
        L5[One Centralized File for Agents]
        L6[Write Changes in MD File]
        L7[Manage Document & Summary]
        L8[Not Too Much Context]
    end

    subgraph Agenting_Workflow
        Task --> Development
        Development --> Deployment
        
        TrelloMCP[Trello MCP] --> FigmaURL[Trello URL for Figma]
        FigmaURL --> BrowserCheck[Check if Works in Browser]
        
        Walkthrough --> Jules[https://jules.google/]
        
        GeminiCLI[Run Gemini CLI] --> GitHubActivity[GitHub Activity]
        GitHubActivity --> CodeReviewMD[MD Files on How to Do Code Review]
        CodeReviewMD --> Answers[Return Answers]
        
        AgentSummary[Ask Agent for Summary] --> PR[Send as Part of PR]
    end
```
