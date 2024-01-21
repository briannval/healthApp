"use client";

import { useEffect } from "react";
import OpenAI from "openai";
import { Button } from "@mui/material";

export default function Diagnose() {
  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  const getData = async () => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion);
  };

  useEffect(() => {
    console.log("hello");
  });

  return <Button onClick={getData}>GET DATA</Button>;
}
