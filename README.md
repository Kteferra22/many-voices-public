# Many Voices

Many Voices is an interactive reflection experience designed to guide users through emotional and spiritual reflection using journaling prompts, scripture, and global awareness.

Rather than replacing reflection with automated AI answers, the system is designed to **slow the user down and guide meaningful personal reflection**.

The project explores how technology can support thoughtful introspection while still providing helpful context through scripture and global awareness.

---

# The Problem

Many people turn to journaling apps or AI tools when navigating personal struggles, life decisions, or emotional challenges.

However, most tools fall into one of two extremes:

• **Productivity journaling tools** that focus on task tracking
• **AI chat tools** that generate answers instead of encouraging reflection

This often results in:

• shallow journaling experiences
• reduced personal introspection
• over-reliance on AI responses

There is an opportunity to design a digital experience that **guides reflection rather than replaces it**.

---

# The Solution

Many Voices provides a structured reflection journey designed to encourage deeper thought.

The experience guides the user through a five-step flow:

1. Reflection prompt
2. Scripture guidance
3. Personal reflection
4. Global awareness
5. Final recap and encouragement

Instead of generating answers for the user, the system helps the user **process their own thoughts and emotions**.

---

# Key Features

• Guided reflection prompts
• Scripture retrieval using Bible API
• Personal journaling interaction
• Animated storytelling transitions
• Global awareness context
• Reflection recap experience

---

# Tech Stack

### Frontend

• Lovable
• React
• TypeScript
• Tailwind
• Framer Motion

Lovable was used to accelerate frontend development while maintaining a structured React + TypeScript architecture.

Framer Motion powers the animated transitions between reflection stages to create a calm and guided experience.

---

### APIs

• Bible API for scripture retrieval
• Geolocation API
• Global events API

These APIs provide contextual information that expands the user’s reflection beyond their immediate experience.

---

### Backend

• Supabase

Supabase provides backend infrastructure including:

• user session handling
• reflection entry storage
• database access
• serverless backend functionality

---

### Deployment

• Vercel

---

# Engineering Challenges

### Designing a reflective digital experience

Most digital products optimize for **speed and efficiency**, but this experience intentionally slows the user down.

This required careful design of:

• screen pacing
• transition timing
• reflection prompts
• emotional tone of the interface

The goal was to create a **guided experience rather than a productivity tool**.

---

### Balancing guidance with personal agency

One of the biggest design challenges was ensuring that technology **did not replace personal reflection**.

Instead of providing answers, the system provides:

• thoughtful prompts
• scripture guidance
• broader global perspective

The user remains the central voice in the experience.

---

# Experience Flow

Reflection Prompt
↓
Scripture Guidance
↓
Personal Reflection
↓
Global Awareness
↓
Reflection Recap

---

# Live Demo

https://many-voices.vercel.app

---

# Author

Kidus Teferra
