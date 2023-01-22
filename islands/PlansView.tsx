/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "../components/Plan.tsx";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import { tw } from "twind";
import FloatingActionButton from "../components/FloatingActionButton.tsx";
import { signal } from "@preact/signals";
import { format } from "date-fns";

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
    console.log(signalPlans);
  };
  const onClickFloatingActionButton = () => {
    isFormOpen ? setIsFormOpen(false) : setIsFormOpen(true);
  };
  const onClickClearButton = () => {
    sessionStorage.clear();
    signalPlans.value = [];
  };

  useEffect(
    () => (isFormOpen ? setHidden("") : setHidden(tw`hidden`)),
    [isFormOpen]
  );

  return (
    <div class={tw`flex flex-col min-h-screen`}>
      <Header onClickClearButton={onClickClearButton} />
      <main class={tw`flex flex-col flex-grow`}>
        <div class={tw`mt-10`}>
          {/* <thead class={tw`bg-gray-200`}>
            <tr class={tw`text-lg`}>
              <th class={tw`w-1/4`}></th>
              <th class={tw`border-l-2 border-white`}></th>
            </tr>
          </thead> */}
          {/* <tbody> */}
          {signalPlans.value
            ?.sort((a, b) => {
              const aDate = new Date(a.dateTime);
              const bDate = new Date(b.dateTime);
              return aDate.getTime() - bDate.getTime();
            })
            .map((props, index) => {
              return <Plan {...props} index={index} />;
            })}
          {/* </tbody> */}
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
