# Many Voices — System Architecture

## Overview

Many Voices is a guided reflection platform that combines structured journaling prompts with AI-generated recap experiences.

The system collects user reflections, processes them through a serverless generation pipeline, and presents the output through a paced narrative experience.

The architecture prioritizes:

* lightweight infrastructure
* serverless execution
* responsive mobile UX
* scalable reflection generation

---

# High-Level Architecture

```
Client Application (React)
        │
        │ Reflection Inputs
        ▼
Reflection Engine (Frontend State + Prompt Logic)
        │
        │ Structured Response Payload
        ▼
Supabase Edge Function
        │
        │ AI Processing
        ▼
Recap Generation Pipeline
        │
        │ Structured Slide Data
        ▼
Recap Experience Viewer
```

The client controls the reflection experience while the backend handles recap generation.

---

# Client Layer

### Technologies

* React
* TypeScript
* TailwindCSS
* Framer Motion

### Responsibilities

The client application manages the reflection experience including:

* prompt sequencing
* journaling input collection
* scripture selection
* recap playback interface

The client does **not perform AI generation**.
Instead, it prepares structured input and sends it to the backend pipeline.

---

# Reflection Engine

The reflection engine coordinates the journaling flow.

Core responsibilities:

* load prompt sets
* manage reflection modes
* collect user answers
* prepare structured reflection payload

### Reflection Modes

The engine supports multiple reflection modes:

* reflection
* prayer
* gratitude
* emotional processing

Each mode loads a predefined sequence of prompts designed to guide deeper reflection.

Example flow:

```
Select Reflection Mode
        ↓
Prompt Sequence
        ↓
Scripture Preference
        ↓
Submit Reflection
```

The output of this stage is a **structured reflection payload**.

---

# Serverless Processing Layer

### Infrastructure

The backend uses **Supabase Edge Functions**.

Responsibilities:

* receive reflection payload
* generate recap narrative
* return structured slide content

Benefits of serverless architecture:

* no server maintenance
* automatic scaling
* low operational complexity

Example request structure:

```
{
  mode: "reflection",
  answers: [ ... ],
  scripture_mode: "suggest"
}
```

The edge function returns a structured object containing recap slides.

---

# Recap Generation Pipeline

The recap pipeline converts reflection answers into a narrative experience.

Pipeline stages:

```
User Reflection Input
        ↓
Reflection Processing
        ↓
Narrative Recap Generation
        ↓
Slide Structuring
        ↓
Client Playback
```

Slides can include:

* scripture passages
* reflection insights
* narrative recap text
* closing reflection summary

This structure allows the client to render a guided storytelling experience.

---

# Recap Experience Viewer

The recap viewer presents reflection output through animated slides.

Responsibilities:

* autoplay slide progression
* user navigation controls
* pause/resume functionality
* reflection summary rendering

Slides advance automatically at a controlled pace to create a reflective experience.

Example playback cycle:

```
Intro Slide
↓
Reflection Slides
↓
Scripture Slide
↓
Insight Slides
↓
Reflection Summary Card
```

---

# State Management

Application state is handled within the client using:

* React state
* component state
* session storage

Guest users can generate a reflection journey without authentication.
Temporary recap data is stored locally during the session.

---

# Research & Experimental Systems

During development several experimental systems were explored.

## Global Awareness Layer

An earlier prototype included a global awareness system that attempted to incorporate:

* geolocation context
* global event feeds
* world map visualization

Architecture concept:

```
Geolocation API
        ↓
Global Event Feed
        ↓
Reflection Context Layer
```

However this significantly increased application complexity and performance cost.

The feature is currently disabled while the core reflection experience is refined.

---

# Deployment Model

The system follows a simple deployment model:

```
Client (Vercel / Static Hosting)
        │
        ▼
Supabase Platform
        │
        ├ Edge Functions
        ├ Authentication
        └ Database
```

This architecture keeps infrastructure minimal while supporting future expansion.

---

# Scalability Considerations

The current design allows the platform to scale without major architectural changes.

Key scalability characteristics:

* stateless backend functions
* serverless compute
* minimal persistent infrastructure

Future enhancements may include:

* personalized reflection history
* AI-assisted scripture recommendations
* expanded narrative generation pipelines

---

# Architectural Philosophy

The system is intentionally designed to remain simple.

Rather than introducing complex infrastructure, the architecture focuses on:

* clarity
* emotional pacing
* maintainable serverless services

This allows the platform to evolve while keeping the user experience calm and focused.
