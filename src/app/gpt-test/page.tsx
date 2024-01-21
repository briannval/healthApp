"use client";

import { useState, useEffect } from "react";
import OpenAI from "openai";

//TODO: MOVE THIS VALUE TO ENV
const openai = new OpenAI({"apiKey": "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", dangerouslyAllowBrowser: true});

async function main( msg ) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a personal trainer. You give advice to your client in 50 words or less." },
               { role: "user",   content: msg }],
    model: "gpt-3.5-turbo",
  });

  document.getElementById("gpt-response").innerHTML = (completion.choices[0].message.content);
}

function generatePrompt(sleep, exercise, score, extra){
  let prompt = "Here is a report of my health habits for today: ";
  prompt += "I slept for " + sleep + " hours, and I did";
  if( !exercise ){ prompt += " not";}
  prompt += " exercise today." + " On a scale of 1-5, with 5 being the best, today I would give myself a rating of: ";
  prompt += score;
  prompt += ". Other information about my wellness today includes: ";
  prompt += extra;
  return prompt;
}

const Trigger = (props) => {
  const [disabled,setDisabled] = useState(false);

  const call_api = async () => {
      setDisabled(true);
      await main( generatePrompt( 1, true, 3, "I had a fever and headache and couldn't sleep well") );
      setDisabled(false);
  }

  return (
    <>
      <button disabled={disabled} onClick={call_api}>
        {props.children}
      </button>
    </>
  );
}

export default function GPT() {
  return (
    <>
      <p id ="gpt-response"> (response goes here) </p>
      <Trigger> Press Me! </Trigger>
    </>
  );
}