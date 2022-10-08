/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";

export default function Plans() {
  const initialPlans = JSON.parse(`${sessionStorage.getItem("plans")}` || "");
  const [plans, setPlans] = useState<PlanProps[]>(initialPlans);
  const onClickSaveButton = (plans: PlanProps[]) => {
    setPlans(plans);
    sessionStorage.setItem("plans", JSON.stringify(plans));
  };
  return (
    <div>
      {plans?.map((props: PlanProps) => {
        return <Plan {...props} />;
      })}
      <Form onClickSaveButton={onClickSaveButton} plans={plans} />
    </div>
  );
}
