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
  const DATETIME_FORMAT = "yyyy/MM/dd";
  return (
    <li class={tw`flex flex-row gap-2 w-full font-sans text-base`} key={index}>
      <span class={tw`whitespace-nowrap`}>
        {format(new Date(dateTime), DATETIME_FORMAT)}
      </span>
      <span class={tw`whitespace-nowrap`}>
        {format(new Date(dateTime), "HH:mm")}
      </span>
      <span>{text}</span>
    </li>
  );
}
