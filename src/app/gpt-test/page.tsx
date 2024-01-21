"use client";

import { useState, useEffect } from "react";
import OpenAI from "openai";

const openai = new OpenAI({"apiKey": "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", dangerouslyAllowBrowser: true});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a personal trainer. You give advice to your client in 50 words or less." },
               { role: "user", content: "In the last week, I have slept [3, 4, 12, 7, 1, 3, 8] hours. I have eaten two meals a day every day. I have excercied five times. I have walked an average of 4000 steps per day."}],
    model: "gpt-3.5-turbo",
  });

  document.getElementById("gpt-response").innerHTML = (completion.choices[0].message.content);
}

const Trigger = () => {
   const [disabled,setDisabled] = useState(false);

   const call_api = async () => {
       setDisabled(true);
       console.log("Disabling button.");
       await main();
       setDisabled(false);
       console.log("Re-enabling button.");
   }

   return <button disabled={disabled} onClick={call_api}/>
 
}

export default function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  // useEffect(() => {
  //   main();
  // }, [count]);
  //<button onClick={() => setCount((c) => c + 1)}>+</button>
  //<p>Calculation: {calculation}</p>

  return (
    <>
      <p>Count: {count}</p>
      <p id ="gpt-response"> Stuff goes here </p>
      <Trigger />
    </>
  );
}