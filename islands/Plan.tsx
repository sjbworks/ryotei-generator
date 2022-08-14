/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { format } from "date-fns";

interface PlanProps {
  dateTime: string;
  text: string;
}

export default function Plan({ dateTime, text }: PlanProps) {
  return (
    <div class={tw`flex flex-col gap-2 w-full`}>
      <div>{dateTime}</div>
      <div>{text}</div>
    </div>
  );
}
