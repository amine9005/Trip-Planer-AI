import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, ThinkingLevel } from "@google/genai";
import {
  Trip_Planner_AI_Prompt,
  TRIP_PLANNER_FINAL_PROMPT,
} from "@/helpers/prompts";

const ai = new GoogleGenAI({});
export async function POST(req: NextRequest) {
  const { messages, isFinal } = await req.json();

  // console.log("messages: ", messages);
  const prompt =
    (!isFinal ? Trip_Planner_AI_Prompt : TRIP_PLANNER_FINAL_PROMPT) +
    JSON.stringify(messages);
  // console.log("prompt: ", prompt;
  try {
    const interaction = await ai.interactions.create({
      model: "gemini-3.1-flash-lite",
      input: prompt,
    });

    return NextResponse.json(
      { message: interaction.output_text ?? "" },
      { status: 200 },
    );
  } catch (e) {
    console.log("error in google ai ", e);

    try {
      const response = await ai.models.generateContent({
        model: "gemma-4-26b-a4b-it",
        contents: prompt,
        config: {
          thinkingConfig: {
            thinkingLevel: ThinkingLevel.HIGH,
          },
        },
      });
      return NextResponse.json(
        { message: response.text ?? "" },
        { status: 200 },
      );
    } catch (e) {
      console.log("error in google ai ", e);

      try {
        const interaction = await ai.interactions.create({
          model: "gemma-4-31b-it",
          input: prompt,
        });
        return NextResponse.json(
          { message: interaction.output_text ?? "" },
          { status: 200 },
        );
      } catch (e) {
        console.log("error in google ai ", e);

        return NextResponse.json({ error: e }, { status: 500 });
      }
    }
  }
}
