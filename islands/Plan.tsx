/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { format } from "date-fns";

export interface PlanProps {
  dateTime: string;
  text: string;
  index: number;
}

export default function Plan({ dateTime, text, index }: PlanProps) {
  const DATETIME_FORMAT = "yyyy/MM/dd HH:mm";
  return (
    <li class={tw`flex flex-row gap-2 w-full`} key={index}>
      <span>{format(new Date(dateTime), DATETIME_FORMAT)}</span>
      <span>{text}</span>
    </li>
  );
}
