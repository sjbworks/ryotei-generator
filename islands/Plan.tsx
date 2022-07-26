/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import { format } from "date-fns";

export interface PlanProps {
  dateTime: string;
  text: string;
  index: number;
}

export default function Plan({ dateTime, text, index }: PlanProps) {
  const DATE_FORMAT = "yyyy/MM/dd";
  const TIME_FORMAT = "HH:mm";
  return (
    <tr
      class={tw`gap-2 w-full font-sans text-base mt-2 border-t-2`}
      key={index}
    >
      <td class={tw`w-1/4`}>
        <div class={tw`flex flex-col p-1`}>
          <span class={tw`whitespace-nowrap inline-block font-medium`}>
            {format(new Date(dateTime), DATE_FORMAT)}
          </span>
          <span class={tw`whitespace-nowrap inline-block font-medium`}>
            {format(new Date(dateTime), TIME_FORMAT)}
          </span>
        </div>
      </td>
      <td class={tw`p-1 w-3/4 border-l-2 border-gray-200`}>{text}</td>
    </tr>
  );
}
