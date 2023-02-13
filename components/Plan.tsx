import { tw } from "twind";
import { format } from "date-fns";

export interface PlanProps {
  dateTime: string;
  text: string;
  index: number;
  className?: string;
}

export default function Plan({ dateTime, text, index, className }: PlanProps) {
  const DATE_FORMAT = "yyyy/MM/dd";
  const TIME_FORMAT = "HH:mm";
  return (
    <div
      class={tw`flex flex-row gap-2 w-full font-sans text-base mt-2 ${className}`} // border-t-2
      key={index}
    >
      <div class={tw`w-1/4`}>
        <div class={tw`flex flex-col p-2`}>
          <span class={tw`whitespace-nowrap inline-block font-medium`}>
            {format(new Date(dateTime), DATE_FORMAT)}
          </span>
          <span class={tw`whitespace-nowrap inline-block font-medium`}>
            {format(new Date(dateTime), TIME_FORMAT)}
          </span>
        </div>
      </div>
      {/* border-l-2 border-gray-200 */}
      <div class={tw`p-2 w-3/4`}>{text}</div>
    </div>
  );
}
