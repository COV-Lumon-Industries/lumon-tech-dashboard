import { openai } from "@ai-sdk/openai";
import { createServerFn } from "@tanstack/react-start";
import { streamText } from "ai";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are a helpful assistant for a store that sells guitars.

You can use the following tools to help the user:

- getGuitars: Get all guitars from the database
- recommendGuitar: Recommend a guitar to the user
`;

export const genAIResponse = createServerFn({ method: "POST", response: "raw" })
  .validator(
    (d: {
      messages: Array<Message>;
      systemPrompt?: { value: string; enabled: boolean };
    }) => d
  )
  .handler(async ({ data }) => {
    const messages = data.messages
      .filter(
        (msg) =>
          msg.content.trim() !== "" &&
          !msg.content.startsWith("Sorry, I encountered an error")
      )
      .map((msg) => ({
        role: msg.role,
        content: msg.content.trim(),
      }));

    try {
      const result = streamText({
        model: openai("gpt-4o"),
        messages,
        system: SYSTEM_PROMPT,
        maxSteps: 10,
      });

      return result.toDataStreamResponse();
    } catch (error) {
      console.error("Error in genAIResponse:", error);
      const errorObj =
        error instanceof Error && error.message.includes("rate limit")
          ? { error: "Rate limit exceeded. Please try again in a moment." }
          : {
              error:
                error instanceof Error
                  ? error.message
                  : "Failed to get AI response",
            };

      return new Response(JSON.stringify(errorObj), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  });
