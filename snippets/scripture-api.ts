/**
 * Scripture / Journey Generation API
 *
 * Handles generation of the reflection recap
 * using a Supabase Edge Function.
 *
 * The backend processes user reflections and
 * returns a structured recap experience.
 */

import { supabase } from "@/integrations/supabase/client";

export async function generateJourneyRecap(
  mode: string,
  answers: string[],
  scriptureMode: string,
  scriptureRef?: string
) {
  const { data, error } = await supabase.functions.invoke("generate-journey-recap", {
    body: {
      mode,
      answers,
      scripture_mode: scriptureMode,
      scripture_ref: scriptureRef ?? null,
    },
  });

  if (error) {
    console.error(error);
    throw new Error("Journey generation failed");
  }

  return data;
}
