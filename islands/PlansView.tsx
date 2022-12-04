/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";
import { tw } from "twind";
import FloatingActionButton from "./FloatingActionButton.tsx";

export interface PlansViewProps {
  className: string;
}

export default function PlansViewProps({ className }: PlansViewProps) {
  const initialPlans = JSON.parse(`${sessionStorage.getItem("plans")}`) || [];
  const [plans, setPlans] =
    useState<Pick<PlanProps, "dateTime" | "text">[]>(initialPlans);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [hidden, setHidden] = useState<string>("");
  const onClickSaveButton = (plans: Pick<PlanProps, "dateTime" | "text">[]) => {
    setPlans(plans);
    sessionStorage.setItem("plans", JSON.stringify(plans));
    setIsFormOpen(false);
  };
  const onClickFloatingActionButton = () => {
    isFormOpen ? setIsFormOpen(false) : setIsFormOpen(true);
  };

  useEffect(
    () => (isFormOpen ? setHidden("") : setHidden(tw`hidden`)),
    [isFormOpen]
  );

  return (
    <main class={className}>
      <table class={tw`mt-5`}>
        <thead class={tw`bg-gray-200`}>
          <tr class={tw`text-lg`}>
            <th>Datetime</th>
            <th class={tw`border-l-2 border-white`}>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {plans?.map((props, index) => {
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
  );
}
