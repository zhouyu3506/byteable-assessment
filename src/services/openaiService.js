import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function generateFollowUpTasks(caseData) {

  const prompt = `
You are a legal assistant helping manage a law firm's CRM.

Case title: ${caseData.title}
Client: ${caseData.client}
Stage: ${caseData.stage}
Value: ${caseData.value}

Generate 3 short follow-up tasks for the attorney.
Return as a JSON array of strings.
Example:
["Email client update", "Review documents", "Schedule consultation"]
`;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are a helpful legal CRM assistant."
      },
      {
        role: "user",
        content: prompt
      }
    ],
    temperature: 0.3
  });

  const text = response.choices[0].message.content;

  try {
    return JSON.parse(text);
  } catch {
    return ["Follow up with client"];
  }
}
