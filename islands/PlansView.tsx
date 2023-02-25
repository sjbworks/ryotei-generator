import { useState, useEffect, useRef } from "preact/hooks";
import Plan, { PlanProps } from "../components/Plan.tsx";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import { tw } from "twind";
import FloatingActionButton from "../components/FloatingActionButton.tsx";
import { signal } from "@preact/signals";
import { format } from "date-fns";
import html2canvas from "html2canvas";

export default function PlansViewProps() {
  const didMountRef = useRef(false);
  const ref = useRef<HTMLElement | null>(null);
  const initialPlans = JSON.parse(`${sessionStorage.getItem("plans")}`) || [];
  const signalPlans =
    signal<Pick<PlanProps, "dateTime" | "text">[]>(initialPlans);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [hidden, setHidden] = useState<string>("");
  const onClickSaveButton = (plan: Pick<PlanProps, "dateTime" | "text">) => {
    signalPlans.value = [...signalPlans.value, plan];
    sessionStorage.setItem("plans", JSON.stringify(signalPlans.value));
    setIsFormOpen(false);
  };
  const onClickFloatingActionButton = () => {
    isFormOpen ? setIsFormOpen(false) : setIsFormOpen(true);
  };
  const onClickClearButton = () => {
    sessionStorage.clear();
    signalPlans.value = [];
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

  useEffect(
    () => (isFormOpen ? setHidden("") : setHidden(tw`hidden`)),
    [isFormOpen]
  );

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    }
  }, []);

  // TODO: sticky footer
  return (
    <div class={tw`flex flex-col px-5 mx-auto max-w-screen-md min-h-screen`}>
      <Header
        onClickClearButton={onClickClearButton}
        onClickScreenShotButton={() => exportAsImage(ref.current)}
      />
      <main class={tw`flex flex-col flex-grow min-h-max`} ref={ref}>
        <div class={tw`mt-10`}>
          {sortPlans.map((props, index) => {
            const classProps = arrayDivider[index]
              ? "border-solid border-t-2 pt-2"
              : "";
            return <Plan {...props} index={index} className={classProps} />;
          })}
        </div>
      </main>
      <footer class={tw`sticky right-0 bottom-0 text-right mt-3 w-100`}>
        <Form
          onClickSaveButton={onClickSaveButton}
          className={tw`mt-5`}
          hidden={hidden}
        />
        <FloatingActionButton
          className={tw`my-3`}
          onClickFloatingActionButton={onClickFloatingActionButton}
        />
      </footer>
    </div>
  );
}
