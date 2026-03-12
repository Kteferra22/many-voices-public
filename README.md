# Many Voices

Many Voices is an interactive reflection experience designed to guide users through emotional and spiritual reflection using journaling prompts, scripture, and thoughtful responses.

Rather than replacing reflection with automated AI answers, the system is designed to **slow the user down and guide meaningful personal reflection**.

The project explores how technology can support thoughtful introspection while integrating biblical wisdom and reflective prompts.

---

# The Problem

Many people turn to journaling apps or AI tools when navigating personal struggles, life decisions, or emotional challenges.

However, most tools fall into one of two extremes:

• **Productivity journaling tools** that focus on task tracking
• **AI chat tools** that generate answers instead of encouraging reflection

This often results in:

• shallow journaling experiences
• reduced personal introspection
• over-reliance on automated responses

There is an opportunity to design a digital experience that **guides reflection rather than replaces it**.

---

# The Solution

Many Voices provides a structured reflection journey designed to encourage deeper thought.

The experience guides the user through a calm and focused process:

1. Reflection prompt
2. Scripture guidance
3. Personal journaling response
4. AI-assisted reflective feedback
5. Final recap encouraging continued reflection

Instead of generating answers for the user, the system helps the user **process their own thoughts and emotions**.

---

# Key Features

• Guided reflection prompts
• Scripture retrieval using Bible API
• Personal journaling interaction
• AI-assisted reflection responses
• Calm experience pacing
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

Framer Motion powers animated transitions between reflection stages to create a calm and guided experience.

---

### APIs

• Bible API for scripture retrieval
• OpenAI API for reflection assistance

These APIs provide biblical context and reflective feedback while preserving the user's own voice in the reflection process.

---

### Backend

• Supabase

Supabase provides backend infrastructure including:

• reflection entry storage
• database access
• backend services
• serverless architecture

---

### Deployment

• Vercel

---

# Engineering Challenges

### Designing a reflective digital experience

Most digital tools optimize for **speed and productivity**, but this experience intentionally slows the user down.

This required careful design of:

• screen pacing
• transition timing
• reflection prompts
• emotional tone of the interface

The goal was to create a **guided reflection experience rather than a productivity tool**.

---

### Balancing AI assistance with personal reflection

One of the biggest design challenges was ensuring that AI **did not replace the user’s reflection**.

Instead of providing direct answers, AI is used to:

• offer thoughtful prompts
• provide biblical context
• encourage deeper thinking

The user remains the central voice in the reflection process.

---

# Research & Development

Earlier versions of Many Voices explored a **global awareness component** designed to help users see their personal experiences within the broader context of the world.

This included experimental features such as:

• 3D globe visualization
• geolocation-based awareness
• global events integration

While visually compelling, the globe rendering and event system introduced significant performance overhead and slowed the overall user experience.

To maintain a smooth and focused reflection flow, these features were removed from the current version of the application.

However, the architecture and experimentation remain part of the project’s research and development history and may be revisited in future iterations.

---

# Experience Flow

Reflection Prompt
↓
Scripture Guidance
↓
Personal Reflection
↓
AI Reflective Response
↓
Reflection Recap

---

# Live Demo

https://many-voices.vercel.app

---

# Author

Kidus Teferra
