/**
 * Experience State Controller
 *
 * Controls the autoplay reflection recap
 * experience used in Many Voices.
 *
 * Slides advance automatically but allow
 * user interaction to pause or navigate.
 */

export const AUTOPLAY_INTERVAL = 8000;

export function nextSlide(currentIndex: number, slides: any[]) {
  if (currentIndex < slides.length - 1) {
    return currentIndex + 1;
  }

  return "reflection_card";
}

export function previousSlide(currentIndex: number) {
  return Math.max(0, currentIndex - 1);
}

export function shouldAutoplay(phase: string, paused: boolean) {
  return phase === "slides" && !paused;
}
