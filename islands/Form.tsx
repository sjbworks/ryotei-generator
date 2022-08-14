/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { format } from "date-fns";

export default function Form() {
  const [plan, setPlan] = useState({
    dateTime: "",
    text: "",
  });
  const handleChangeDateTime = (e: Event) =>
    setPlan({ ...plan, dateTime: (e.target as HTMLInputElement).value });
  const handleChangeText = (e: Event) =>
    setPlan({ ...plan, text: (e.target as HTMLInputElement).value });
  const handleClickSaveButton = () => console.log(plan);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex flex-col gap-2 w-full`}>
      <input
        type="datetime-local"
        value={plan.dateTime}
        onInput={handleChangeDateTime}
      />
      <input type="text" value={plan.text} onInput={handleChangeText} />
      <button onClick={handleClickSaveButton} class={btn}>
        保存
      </button>
    </div>
  );
}
