import { useState, useEffect } from "preact/hooks";
import { tw } from "twind";
import { PlanRowProps } from "../components/Plan.tsx";

export type PlanProps = Pick<PlanRowProps, "dateTime" | "text">;

interface FormProps {
  onClickSaveButton: (plan: PlanProps, title: string) => void;
  className: string;
}

export default function Form({ onClickSaveButton, className }: FormProps) {
  const btn = tw`px-3 py-1 mt-6 rounded-md focus:outline-none ease-in-out duration-300 bg-orange hover:bg-darkOrange outline-0`;
  const errorClassName = tw`p-3 w-full rounded-md bg-warmGray-50 ease-in border(1 solid rose-500)`;
  const normallyClassName = tw`p-3 w-full rounded-md bg-warmGray-50 ease-in border(1 solid gray-300)`;
  const [title, setTitle] = useState<string>("");
  const [plan, setPlan] = useState<Pick<PlanRowProps, "dateTime" | "text">>({
    dateTime: "",
    text: "",
  });
  const [isDateTimeError, setIsDateTimeError] = useState(false);
  const [isTextError, setIsTextError] = useState(false);
  const [isTitleError, setIsTitleError] = useState(false);
  const [titleBorderClassName, setTitleBorderClassName] =
    useState(normallyClassName);
  const [dateTimeBorderClassName, setDateTimeBorderClassName] =
    useState(normallyClassName);
  const [textBorderClassName, setTextBorderClassName] =
    useState(normallyClassName);

  const handleChangeTitle = (e: Event) =>
    setTitle((e.target as HTMLInputElement).value);
  const handleChangeDateTime = (e: Event) =>
    setPlan({ ...plan, dateTime: (e.target as HTMLInputElement).value });
  const handleChangeText = (e: Event) =>
    setPlan({ ...plan, text: (e.target as HTMLInputElement).value });

  const handleClickSaveButton = () => {
    if (!plan.dateTime || !plan.text || !setTitle) {
      !plan.dateTime && setIsDateTimeError(true);
      !plan.text && setIsTextError(true);
      !setTitle && setIsTitleError(true);
      return;
    }
    setIsDateTimeError(false);
    setIsTextError(false);

    onClickSaveButton(plan, title);
  };

  useEffect(() => {
    isTitleError
      ? setTitleBorderClassName(errorClassName)
      : setTitleBorderClassName(normallyClassName);
  }, [isTitleError]);
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
  useEffect(() => {
    setTitle(JSON.parse(`${sessionStorage.getItem("title")}`));
    setPlan({
      dateTime:
        JSON.parse(`${sessionStorage.getItem("plans")}`)?.slice(-1)[0]
          ?.dateTime || "",
      text:
        JSON.parse(`${sessionStorage.getItem("plans")}`)?.slice(-1)[0]?.text ||
        "",
    });
  }, []);

  return (
    <div
      class={tw`p-8 flex flex-col gap-2 bg-white border(2 solid gray-500) rounded-md ${className}`}
    >
      <label class={tw`w-full font-semibold text-base`} for="title">
        タイトル
      </label>
      <input
        type="text"
        value={title}
        class={titleBorderClassName}
        onInput={handleChangeTitle}
        id="title"
      />
      {isTitleError && (
        <span class={tw`text-rose-600 text-sm`}>タイトルを入力して下さい</span>
      )}
      <label class={tw`w-full font-semibold text-base`} for="datetime">
        日時
      </label>
      <input
        type="datetime-local"
        value={plan.dateTime}
        class={dateTimeBorderClassName}
        onInput={handleChangeDateTime}
        id="datetime"
      />
      {isDateTimeError && (
        <span class={tw`text-rose-600 text-sm`}>日時を入力して下さい</span>
      )}
      <label class={tw`w-full font-semibold text-base`} for="content">
        内容
      </label>
      <input
        type="text"
        class={textBorderClassName}
        value={plan.text}
        onInput={handleChangeText}
        placeholder={"内容を入力してください"}
        id="content"
      />
      {isTextError && (
        <span class={tw`text-rose-600 text-sm`}>内容を入力して下さい</span>
      )}
      <button onClick={handleClickSaveButton} class={btn}>
        保存
      </button>
    </div>
  );
}
