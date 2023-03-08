import { useState, useEffect, useRef } from "preact/hooks";
import Plan, { PlanRowProps } from "../components/Plan.tsx";
import Form, { PlanProps } from "./Form.tsx";
import Header from "./Header.tsx";
import { tw } from "twind";
import { signal } from "@preact/signals";
import { format } from "date-fns";
import html2canvas from "html2canvas";

type Status = "VIEW" | "EDIT";

export default function PlansViewProps() {
  const didMountRef = useRef(false);
  const ref = useRef<HTMLElement | null>(null);
  const signalTitle = signal<string>(
    JSON.parse(`${sessionStorage?.getItem("title")}`) || ""
  );
  const [status, setStatus] = useState<Status>("EDIT");
  const [plans, setPlans] = useState<PlanProps[] | []>([]);
  const signalPlans = signal<PlanProps[]>(plans);

  useEffect(() => {
    setPlans(JSON.parse(`${sessionStorage?.getItem("plans")}`));
  }, []);

  const onClickSaveButton = (plan: PlanProps, title: string) => {
    signalPlans.value = [...signalPlans.value, plan];
    signalTitle.value = title;
    sessionStorage.setItem("plans", JSON.stringify(signalPlans.value));
    sessionStorage.setItem("title", JSON.stringify(title));
    setStatus("VIEW");
  };
  const onClickClearButton = () => {
    sessionStorage.clear();
    signalPlans.value = [];
    signalTitle.value = "";
  };
  const sortPlans = signalPlans.value?.sort((a, b) => {
    return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
  });
  const arrayDivider = sortPlans.map(
    (e, i) =>
      sortPlans[i - 1] &&
      format(new Date(e.dateTime), "yyyy/MM/dd") !==
        format(new Date(sortPlans[i - 1].dateTime), "yyyy/MM/dd")
  );

  const exportAsImage = async (element: HTMLElement | null) => {
    if (!element) return;
    const canvas = await html2canvas(element);
    const image = canvas.toDataURL("image/png", 1.0);
    downloadImage(image);
  };

  const downloadImage = (blob: string) => {
    const fakeLink = window.document.createElement("a");
    fakeLink.download = "ryotei";
    fakeLink.href = blob;
    document.body.appendChild(fakeLink);
    fakeLink.click();
    document.body.removeChild(fakeLink);
    fakeLink.remove();
  };

  const handleFooterButton = (value: Status) => {
    setStatus(value);
  };

  const footerButtonClass =
    "flex-1 p-4 hover:bg-gray-300 focus:outline-none ease-in-out duration-300";
  const viewBgColor = status === "VIEW" ? "bg-gray-300" : "";
  const editBgColor = status === "EDIT" ? "bg-gray-300" : "";

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
  }, []);

  return (
    <div class={tw`flex flex-col px-5 mx-auto max-w-screen-md min-h-screen`}>
      <Header
        onClickClearButton={onClickClearButton}
        onClickScreenShotButton={() => exportAsImage(ref.current)}
      />
      <main class={tw`flex flex-col flex-grow min-h-max`} ref={ref}>
        {status === "VIEW" ? (
          <div class={tw`border(2 solid gray-500) rounded-md m-10 p-8`}>
            {/* TODO: コンポーネントに切り出す */}
            <span class={tw`p-2 text-xl font-semibold`}>
              {signalTitle.value}
            </span>
            {sortPlans.map((props, index) => {
              const classProps = arrayDivider[index]
                ? "border-solid border-t-2 pt-2"
                : "";
              return <Plan {...props} index={index} className={classProps} />;
            })}
          </div>
        ) : (
          <Form onClickSaveButton={onClickSaveButton} className={tw`m-10`} />
        )}
      </main>
      <footer class={tw`sticky mt-3 w-100 flex`}>
        <button
          class={tw`${footerButtonClass} ${viewBgColor}`}
          onClick={() => handleFooterButton("VIEW")}
        >
          旅程
        </button>
        <button
          class={tw`${footerButtonClass} ${editBgColor}`}
          onClick={() => handleFooterButton("EDIT")}
        >
          編集
        </button>
      </footer>
    </div>
  );
}
