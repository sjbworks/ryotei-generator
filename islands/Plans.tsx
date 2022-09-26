/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";
import { format } from "date-fns";
import Plan, { PlanProps } from "./Plan.tsx";

interface PlansProps {
  plans: PlanProps[];
}

export default function Plans({ plans }: PlansProps) {
  return (
    <div>
      {plans.map((props: PlanProps) => {
        return <Plan {...props} />;
      })}
    </div>
  );
}
