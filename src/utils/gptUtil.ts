import OpenAI from "openai";

const openai = new OpenAI({"apiKey": "OPENAI_KEY_GOES_HERE", dangerouslyAllowBrowser: true});

export default async function runGPT(msg) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a personal trainer. You give advice to your client in 50 words or less." },
               { role: "user",   content: msg }],
    model: "gpt-3.5-turbo",
  });

  document.getElementById("gpt-response").innerHTML = (completion.choices[0].message.content);
}
