import { openai } from '@ai-sdk/openai';
import { streamText, Message } from 'ai';
import { NextResponse } from 'next/server';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages }: { messages: Message[] } = await req.json();

    // Check if the user has provided an OpenAI API key
    if (!process.env.OPENAI_API_KEY) {
      return simulateStreamingFallback(messages);
    }

    const result = await streamText({
      model: openai('gpt-4-turbo'),
      system: \`You are the IntelliAttend Enterprise AI Assistant.
You are a highly advanced, professional, and friendly product expert. 
Your goal is to guide users through the IntelliAttend platform, answer their questions, and help them find exactly what they need.
You must use Markdown for formatting (bold text, bullet points, tables, and links where appropriate).
If the user asks a vague question, ask follow-up questions to clarify.
If you do not know the answer, do not say "I don't know". Instead, say "I couldn't find an exact answer, but based on IntelliAttend's capabilities..." and provide a highly educated guess or direct them to the Help Center.

Knowledge Scope:
- Faculty: Portals, one-tap attendance, assignments, grading.
- Students: Mobile app, real-time attendance, timetables, push notifications.
- SmartBoard: Instant presentation publishing, cloud sync.
- Admin: Predictive analytics, compliance reports, permissions.
- Pricing: Starter, Professional, Enterprise tiers (available at /#pricing).
- Demos: Users can book a demo at /book-demo.
- Support: Users can visit the Help Center at /support or email support@intelliattend.ai.
\`,
      messages,
      temperature: 0.7,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error('Chat API Error:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

// Function to simulate a streaming AI response when no API key is present
function simulateStreamingFallback(messages: Message[]) {
  const encoder = new TextEncoder();
  const customStream = new ReadableStream({
    async start(controller) {
      const lastUserMessage = messages[messages.length - 1]?.content.toLowerCase() || "";
      
      let fallbackText = "I am operating in **Mock Enterprise Mode** because an \`OPENAI_API_KEY\` was not found in the environment variables.\n\nHowever, I can still assist you! What would you like to know about IntelliAttend? For example, you can ask about our **SmartBoards**, **Faculty Dashboard**, or **Pricing**.";

      if (lastUserMessage.includes("pricing")) {
        fallbackText = "Our pricing is divided into three flexible tiers:\n\n1. **Starter**\n2. **Professional**\n3. **Enterprise**\n\nYou can view all the details on our [Pricing Page](/#pricing).";
      } else if (lastUserMessage.includes("faculty") || lastUserMessage.includes("teacher")) {
        fallbackText = "As a **Faculty member**, you get access to a dedicated portal where you can:\n- Take attendance with one tap\n- Sync with SmartBoards\n- Grade assignments\n\nWould you like to [Book a Demo](/book-demo) to see it in action?";
      }

      // Convert the text into Vercel AI SDK compatible chunks (0:chunk)
      const chunks = fallbackText.split(" ");
      for (let i = 0; i < chunks.length; i++) {
        // Vercel AI SDK expects format: 0:"word "
        const text = chunks[i] + (i < chunks.length - 1 ? " " : "");
        controller.enqueue(encoder.encode(\`0:\${JSON.stringify(text)}\\n\`));
        await new Promise((resolve) => setTimeout(resolve, 50)); // 50ms delay per word
      }
      controller.close();
    },
  });

  return new NextResponse(customStream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
