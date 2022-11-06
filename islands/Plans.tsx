/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";
import { tw } from "@twind";
import FloatingActionButton from "./FloatingActionButton.tsx";
import Header from "./Header.tsx";

export default function Plans() {
  const initialPlans = JSON.parse(`${sessionStorage.getItem("plans")}` || "");
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [plans, setPlans] = useState<PlanProps[]>(initialPlans);
  const onClickSaveButton = (plans: PlanProps[]) => {
    console.log(plans);
    setPlans(plans);
    console.log(plans);
    sessionStorage.setItem("plans", JSON.stringify(plans));
  };
  return (
    <div class={tw`flex flex-col p-5 mx-auto max-w-screen-md min-h-screen`}>
      <Header />
      <div class={tw`flex-grow`}>
        {plans?.map((props: PlanProps) => {
          return <Plan {...props} />;
        })}
      </div>
      <footer class={tw`flex`}>
        <FloatingActionButton className={tw`ml-auto sticky bottom-0 mt-5`} />
      </footer>
      <Form onClickSaveButton={onClickSaveButton} plans={plans} />
    </div>
  );
}
