/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "../components/Plan.tsx";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import { tw } from "twind";
import FloatingActionButton from "../components/FloatingActionButton.tsx";
import { signal } from "@preact/signals";
import { format, previousDay } from "date-fns";

export interface PlansViewProps {
  className: string;
}

export default function PlansViewProps({ className }: PlansViewProps) {
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

  useEffect(
    () => (isFormOpen ? setHidden("") : setHidden(tw`hidden`)),
    [isFormOpen]
  );

  return (
    <div class={tw`flex flex-col min-h-screen`}>
      <Header onClickClearButton={onClickClearButton} />
      <main class={tw`flex flex-col flex-grow`}>
        <div class={tw`mt-10`}>
          {sortPlans.map((props, index) => {
            const classProps = arrayDivider[index]
              ? "border-solid border-t-2 pt-2"
              : "";
            return <Plan {...props} index={index} className={classProps} />;
          })}
        </div>
      </main>
      <footer class={tw`sticky right-0 bottom-0 text-right mt-3`}>
        <Form
          onClickSaveButton={onClickSaveButton}
          className={tw`mt-5`}
          hidden={hidden}
        />
        <FloatingActionButton
          className={tw`sticky my-3`}
          onClickFloatingActionButton={onClickFloatingActionButton}
        />
      </footer>
    </div>
  );
}
