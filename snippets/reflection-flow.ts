/**
 * Reflection Flow Logic
 *
 * Demonstrates how the Many Voices experience guides
 * users through structured reflection prompts before
 * generating a recap.
 *
 * The system dynamically adapts questions based on
 * the selected reflection mode.
 */

const modeQuestions: Record<string, string[]> = {
  reflection: [
    "What moment from today stands out to you?",
    "What emotions were present in that moment?",
    "What might God be teaching you through it?",
  ],
  prayer: [
    "What is weighing on your heart today?",
    "What would you like to ask God for?",
    "Is there someone you want to pray for?",
  ],
  gratitude: [
    "What blessing from today are you thankful for?",
    "Who made a positive impact on your day?",
    "What small moment brought you joy?",
  ],
  processing: [
    "What hurt are you carrying right now?",
    "What do you wish could change?",
    "What would healing look like?",
  ],
};

export function getQuestions(mode: string) {
  return modeQuestions[mode] || modeQuestions.reflection;
}
