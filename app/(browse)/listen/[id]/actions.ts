"use server";
import { createAudioFileFromText } from "@/utils/elevenlabs/text_to_speech_file";

export const createAudioFromText = async (text: string) => {
  const result = await createAudioFileFromText(text);
  console.log(result);
};
