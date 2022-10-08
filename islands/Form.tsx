/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { PlanProps } from "./Plan.tsx";

interface FormProps {
  onClickSaveButton: (plans: PlanProps[]) => void;
  plans: PlanProps[];
}

export default function Form({ onClickSaveButton, plans }: FormProps) {
  const [plan, setPlan] = useState<PlanProps>({
    dateTime: "",
    text: "",
  });
  const handleChangeDateTime = (e: Event) =>
    setPlan({ ...plan, dateTime: (e.target as HTMLInputElement).value });
  const handleChangeText = (e: Event) =>
    setPlan({ ...plan, text: (e.target as HTMLInputElement).value });

  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex flex-col gap-2 w-full`}>
      <input
        type="datetime-local"
        value={plan.dateTime}
        onInput={handleChangeDateTime}
      />
      <input
        type="text"
        value={plan.text}
        onInput={handleChangeText}
        placeholder={"内容を入力してください"}
      />
      <button onClick={() => onClickSaveButton([...plans, plan])} class={btn}>
        保存
      </button>
    </div>
  );
}
