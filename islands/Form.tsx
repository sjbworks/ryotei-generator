import { Signal } from "@preact/signals";
import { useState, useEffect } from "preact/hooks";
import { tw } from "twind";
import { PlanProps } from "../components/Plan.tsx";

interface FormProps {
  onClickSaveButton: (plan: Pick<PlanProps, "dateTime" | "text">) => void;
  className: string;
  hidden: string;
}

export default function Form({
  onClickSaveButton,
  className,
  hidden,
}: FormProps) {
  const btn = tw`px-3 py-1 mt-1 rounded-md focus:outline-none ease-in-out duration-300 bg-orange hover:bg-darkOrange outline-0`;
  const errorClassName = tw`p-3 w-full rounded-md bg-warmGray-50 ease-in border(2 solid rose-500) bg-white`;
  const normallyClassName = tw`p-3 w-full rounded-md bg-warmGray-50 ease-in border(2 solid warmGray-500) bg-white`;
  const [plan, setPlan] = useState<Pick<PlanProps, "dateTime" | "text">>({
    dateTime: "",
    text: "",
  });
  const [isDateTimeError, setIsDateTimeError] = useState(false);
  const [isTextError, setIsTextError] = useState(false);
  const [dateTimeBorderClassName, setDateTimeBorderClassName] =
    useState(normallyClassName);
  const [textBorderClassName, setTextBorderClassName] =
    useState(normallyClassName);

  const handleChangeDateTime = (e: Event) =>
    setPlan({ ...plan, dateTime: (e.target as HTMLInputElement).value });
  const handleChangeText = (e: Event) =>
    setPlan({ ...plan, text: (e.target as HTMLInputElement).value });
  const handleClickSaveButton = () => {
    if (!plan.dateTime || !plan.text) {
      !plan.dateTime && setIsDateTimeError(true);
      !plan.text && setIsTextError(true);
      return;
    }
    setIsDateTimeError(false);
    setIsTextError(false);
    onClickSaveButton(plan);
  };

  useEffect(() => {
    isDateTimeError
      ? setDateTimeBorderClassName(errorClassName)
      : setDateTimeBorderClassName(normallyClassName);
  }, [isDateTimeError]);
  useEffect(() => {
    isTextError
      ? setTextBorderClassName(errorClassName)
      : setTextBorderClassName(normallyClassName);
  }, [isTextError]);

  return (
    <div
      class={tw`p-5 flex flex-col gap-2 w-full bg-white rounded-lg border-2 border-black ${hidden} ${className}`}
    >
      <label class={tw`w-full`}>
        <input
          type="datetime-local"
          value={plan.dateTime}
          class={dateTimeBorderClassName}
          onInput={handleChangeDateTime}
        />
      </label>
      {isDateTimeError && (
        <span class={tw`text-rose-600 text-sm`}>日時を入力して下さい</span>
      )}
      <label class={tw`w-full`}>
        <input
          type="text"
          class={textBorderClassName}
          value={plan.text}
          onInput={handleChangeText}
          placeholder={"内容を入力してください"}
        />
      </label>
      {isTextError && (
        <span class={tw`text-rose-600 text-sm`}>内容を入力して下さい</span>
      )}
      <button onClick={handleClickSaveButton} class={btn}>
        保存
      </button>
    </div>
  );
}
