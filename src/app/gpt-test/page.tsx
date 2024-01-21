"use client";

import { useState, useEffect } from "react";

import gptUtil from "@/utils/gptUtil.ts"
import promptUtil from '@/utils/promptUtil.ts'

import Button from "@mui/material/Button";

const Trigger = (props) => {
  const [disabled,setDisabled] = useState(false);

  const call_api = async () => {
      setDisabled(true);
      await gptUtil( promptUtil( 16, false, 2, "I feel so tired still") );
      setDisabled(false);
  }

  return (
    <>
      <Button variant="contained" disabled={disabled} onClick={call_api}>
        {props.children}
      </Button>
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