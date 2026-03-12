# Many Voices — System Architecture

Many Voices is a reflective journaling experience that blends structured prompts, scripture, and AI-generated recap journeys.

The system is designed to guide users through a moment of reflection, collect meaningful input, and generate a narrative recap that helps users process thoughts through a faith-centered lens.

The architecture prioritizes:

• Simple guided UX
• Serverless AI processing
• Mobile-first performance
• Emotionally paced storytelling experiences

---

# System Overview

The application consists of three primary layers:

User Interface (React + Motion)
↓
Reflection Engine (Prompt Flow + State Logic)
↓
Serverless Generation (Supabase Edge Functions)

This structure allows the system to remain lightweight while still generating meaningful AI responses.

---

# Frontend Architecture

Frontend is built using:

• React
• TypeScript
• Framer Motion (experience transitions)
• TailwindCSS (UI styling)

The frontend handles:

• reflection prompts
• journaling input
• scripture selection
• recap experience viewer

Key design goal:

**Slow the user's experience down intentionally.**

Animations and pacing are designed to create a reflective atmosphere rather than a fast productivity flow.

---

# Reflection Engine

The reflection engine guides the user through a structured thought process.

Flow:

Select reflection mode
↓
Answer guided prompts
↓
Choose scripture preference
↓
Generate reflection recap

Reflection modes include:

• reflection
• prayer
• gratitude
• emotional processing

Each mode loads a unique prompt sequence that encourages deeper reflection.

---

# Journey Generation Pipeline

After the user completes the reflection prompts:

1. Responses are sent to a Supabase Edge Function
2. The serverless function generates a recap narrative
3. Structured "slides" are returned
4. The frontend renders the recap experience

Example pipeline:

User Reflection Answers
↓
Supabase Edge Function
↓
Recap Generation Logic
↓
Structured Slide Output
↓
Animated Recap Viewer

This allows the experience to feel like a **guided reflection journey rather than a simple text response.**

---

# Recap Experience System

The recap viewer presents generated reflections through an animated slide experience.

The viewer supports:

• autoplay pacing
• manual navigation
• pause controls
• scripture slides
• reflection summary card

Slides advance automatically every few seconds to simulate a guided meditation-like rhythm.

---

# State Management

Application state is managed through:

• React component state
• navigation state
• session storage for guest recap sessions

Guest recap data is temporarily stored so the reflection experience can continue without requiring an account.

---

# Backend Infrastructure

Backend services use:

• Supabase Edge Functions
• Supabase database and authentication

Edge functions allow reflection generation to run server-side without maintaining a dedicated backend server.

Benefits:

• scalable
• low operational overhead
• fast iteration

---

# Research & Development (Experimental Features)

During development several features were explored but are currently not active in production.

These include:

## Global Awareness

Originally the system included:

• globe visualization
• geolocation-based context
• world event awareness

However this approach significantly slowed the application and complicated the reflection flow.

The concept remains part of **ongoing research** but was removed to preserve performance and focus on the journaling experience.

## External Event APIs

Global event feeds were explored to incorporate real-world awareness into reflections.

These were ultimately removed in favor of a simpler reflection model centered on personal journaling.

---

# Design Philosophy

Many Voices is intentionally designed to be:

• slow
• reflective
• emotionally supportive

The architecture favors simplicity and user focus over feature complexity.

The goal is not to build a traditional productivity tool, but a **quiet digital space for reflection and spiritual processing.**

---

# Current Development Status

The system is currently in **active development**.

Future exploration areas include:

• deeper scripture integration
• personalized reflection journeys
• improved recap storytelling
• optional global awareness features

The foundation architecture is intentionally lightweight so new reflective experiences can be layered on without increasing system complexity.
