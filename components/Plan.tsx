import { tw } from "twind";
import { format } from "date-fns";

export interface PlanRowProps {
  dateTime: string;
  text: string;
  index: number;
  className?: string;
}

export default function Plan({
  dateTime,
  text,
  index,
  className,
}: PlanRowProps) {
  const DATE_FORMAT = "yyyy/MM/dd";
  const TIME_FORMAT = "HH:mm";
  return (
    <div
      class={tw`flex flex-row gap-2 w-full font-sans text-base mt-2 ${className}`}
      key={index}
    >
      <div>
        <div class={tw`flex flex-col p-2`}>
          <span class={tw`whitespace-nowrap inline-block font-medium`}>
            {format(new Date(dateTime), DATE_FORMAT)}
          </span>
          <span class={tw`whitespace-nowrap inline-block font-medium`}>
            {format(new Date(dateTime), TIME_FORMAT)}
          </span>
        </div>
      </div>
      <div class={tw`p-2`}>{text}</div>
    </div>
  );
}
