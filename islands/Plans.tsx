/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";
import { tw } from "@twind";
import FloatingActionButton from "./FloatingActionButton.tsx";
import Header from "./Header.tsx";

export default function Plans() {
  const initialPlans = JSON.parse(`${sessionStorage.getItem("plans")}`) || [];
  const [plans, setPlans] = useState<PlanProps[]>(initialPlans);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [hidden, setHidden] = useState<string>("");
  const onClickSaveButton = (plans: PlanProps[]) => {
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
    <div class={tw`flex flex-col p-5 mx-auto max-w-screen-md min-h-screen`}>
      <Header />
      <div class={tw`flex-grow pt-5`}>
        {plans?.map((props, index) => {
          return <Plan {...props} index={index} />;
        })}
      </div>
      <Form
        onClickSaveButton={onClickSaveButton}
        plans={plans}
        hidden={hidden}
      />
      <footer class={tw`flex`}>
        <FloatingActionButton
          className={tw`ml-auto sticky bottom-0 mt-5`}
          onClickFloatingActionButton={onClickFloatingActionButton}
        />
      </footer>
    </div>
  );
}
