/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { PlanProps } from "./Plan.tsx";

interface FormProps {
  onClickSaveButton: (plans: PlanProps[]) => void;
  plans: PlanProps[];
  hidden: string;
}

export default function Form({ onClickSaveButton, plans, hidden }: FormProps) {
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
    <div
      class={tw`p-3 flex flex-col gap-2 w-full rounded-t-md bg-warmGray-200 ${hidden}`}
    >
      <label>
        <input
          type="datetime-local"
          value={plan.dateTime}
          class={tw`p-3 rounded-md bg-warmGray-50 ease-in border(2 solid warmGray-500)`}
          onInput={handleChangeDateTime}
        />
      </label>
      <label>
        <input
          type="text"
          class={tw`p-3 rounded-md bg-warmGray-50 ease-in border(2 solid warmGray-500)`}
          value={plan.text}
          onInput={handleChangeText}
          placeholder={"内容を入力してください"}
        />
      </label>
      <button
        onClick={() => {
          console.log(plan);
          onClickSaveButton([...plans, plan]);
        }}
        class={btn}
      >
        保存
      </button>
    </div>
  );
}
