/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import Plan, { PlanProps } from "./Plan.tsx";
import Form from "./Form.tsx";
import { tw } from "@twind";
import FloatingActionButton from "./FloatingActionButton.tsx";
import { format } from "date-fns";

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
  const [prevDate, setPrevDate] = useState<string | undefined>();

  return (
    <main class={className}>
      <div class={tw`flex-grow pt-5`}>
        {plans?.map((props, index) => {
          // TODO: FIXME
          console.log(index);
          const DATE_FORMAT = "yyyy/MM/dd";
          const propsDate = format(new Date(props.dateTime), DATE_FORMAT);
          console.log(propsDate);
          console.log(prevDate);
          if ((index > 0 && !prevDate) || (index > 0 && propsDate !== prevDate))
            setPrevDate(propsDate);

          return (
            <div>
              {/* {index > 0 && propsDate !== prevDate && ( */}
              <span
                class={tw`w-full border-t-solid border-2 border-t-blueGray`}
              />
              {/* )} */}
              <Plan {...props} index={index} />
            </div>
          );
        })}
      </div>

      <footer class={tw`sticky right-0 bottom-0 text-right`}>
        <Form
          onClickSaveButton={onClickSaveButton}
          plans={plans}
          className={tw`mt-5`}
          hidden={hidden}
        />
        <FloatingActionButton
          className={tw`sticky my-5`}
          onClickFloatingActionButton={onClickFloatingActionButton}
        />
      </footer>
    </main>
  );
}
