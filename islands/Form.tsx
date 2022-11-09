/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { PlanProps } from "./Plan.tsx";

interface FormProps {
  onClickSaveButton: (plans: Pick<PlanProps, "dateTime" | "text">[]) => void;
  plans: Pick<PlanProps, "dateTime" | "text">[];
  className: string;
  hidden: string;
}

export default function Form({
  onClickSaveButton,
  plans,
  className,
  hidden,
}: FormProps) {
  const [plan, setPlan] = useState<Pick<PlanProps, "dateTime" | "text">>({
    dateTime: "",
    text: "",
  });
  const [isDateTimeError, setIsDateTimeError] = useState(false);
  const [isTextError, setIsTextError] = useState(false);
  const handleChangeDateTime = (e: Event) =>
    setPlan({ ...plan, dateTime: (e.target as HTMLInputElement).value });
  const handleChangeText = (e: Event) =>
    setPlan({ ...plan, text: (e.target as HTMLInputElement).value });
  const handleClickSaveButton = () => {
    if (!plan.dateTime || !plan.text) {
      console.log(plan.dateTime);
      console.log(plan.text);
      return;
    }
    !plan.dateTime && setIsDateTimeError(true);
    !plan.text && setIsTextError(true);
    onClickSaveButton([...plans, plan]);
  };
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  // TODO: state management
  const dateTimeBorderClassName = isDateTimeError
    ? tw`(2 solid border-red-500)`
    : tw`border(2 solid warmGray-500)`;
  const textErrorClassName = isTextError
    ? tw`(2 solid border-red-500)`
    : tw`border(2 solid warmGray-500)`;
  return (
    <div
      class={tw`p-3 flex flex-col gap-2 w-full rounded-t-md bg-warmGray-200 ${hidden} ${className}`}
    >
      <label>
        <input
          type="datetime-local"
          value={plan.dateTime}
          class={tw`p-3 rounded-md bg-warmGray-50 ease-in ${dateTimeBorderClassName}`}
          onInput={handleChangeDateTime}
        />
      </label>
      <label>
        <input
          type="text"
          class={tw`p-3 rounded-md bg-warmGray-50 ease-in ${textErrorClassName}`}
          value={plan.text}
          onInput={handleChangeText}
          placeholder={"内容を入力してください"}
        />
      </label>
      <button onClick={handleClickSaveButton} class={btn}>
        保存
      </button>
    </div>
  );
}
