/** @jsx h */
import { h, Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";
import Header from "./Header.tsx";
import { tw } from "twind";
import FloatingActionButton from "./FloatingActionButton.tsx";
import { signal } from "@preact/signals";
export interface PlansViewProps {
  className: string;
}

export default function PlansViewProps({ className }: PlansViewProps) {
  const initialPlans = JSON.parse(`${sessionStorage.getItem("plans")}`) || [];
  // TODO: modify to use only signal for managing plans data
  const [plans, setPlans] =
    useState<Pick<PlanProps, "dateTime" | "text">[]>(initialPlans);
  const signalPlans =
    signal<Pick<PlanProps, "dateTime" | "text">[]>(initialPlans);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [hidden, setHidden] = useState<string>("");
  const onClickSaveButton = (plans: Pick<PlanProps, "dateTime" | "text">[]) => {
    setPlans(plans);
    signalPlans.value = plans;
    sessionStorage.setItem("plans", JSON.stringify(plans));
    setIsFormOpen(false);
  };
  const onClickFloatingActionButton = () => {
    isFormOpen ? setIsFormOpen(false) : setIsFormOpen(true);
  };
  const onClickClearButton = () => {
    sessionStorage.clear();
    setPlans([]);
    signalPlans.value = [];
  };

  useEffect(
    () => (isFormOpen ? setHidden("") : setHidden(tw`hidden`)),
    [isFormOpen]
  );

  return (
    <div>
      <Header onClickClearButton={onClickClearButton} />
      <main class={className}>
        <table class={tw`mt-5`}>
          <thead class={tw`bg-gray-200`}>
            <tr class={tw`text-lg`}>
              <th>Datetime</th>
              <th class={tw`border-l-2 border-white`}>Schedule</th>
            </tr>
          </thead>
          <tbody>
            {signalPlans.value?.map((props, index) => {
              return <Plan {...props} index={index} />;
            })}
          </tbody>
        </table>
        <footer class={tw`sticky right-0 bottom-0 text-right`}>
          <Form
            onClickSaveButton={onClickSaveButton}
            plans={plans}
            className={tw`mt-5`}
            hidden={hidden}
          />
          <FloatingActionButton
            className={tw`sticky my-3`}
            onClickFloatingActionButton={onClickFloatingActionButton}
          />
        </footer>
      </main>
    </div>
  );
}
