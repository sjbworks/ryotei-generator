/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";
import { tw } from "@twind";
import FloatingActionButton from "./FloatingActionButton.tsx";

export interface PlansAreaProps {
  className: string;
}

export default function PlansAreaProps({ className }: PlansAreaProps) {
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
      <ul class={tw`flex-grow pt-5`}>
        {plans?.map((props, index) => (
          <Plan {...props} index={index} />
        ))}
      </ul>
      <Form
        onClickSaveButton={onClickSaveButton}
        plans={plans}
        className={tw`mt-5`}
        hidden={hidden}
      />
      <footer class={tw`flex`}>
        <FloatingActionButton
          className={tw`ml-auto sticky bottom-0 mt-5`}
          onClickFloatingActionButton={onClickFloatingActionButton}
        />
      </footer>
    </main>
  );
}
