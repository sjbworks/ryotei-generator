import { useRef } from "preact/hooks";
import { tw } from "twind";
import PlansView from "../islands/PlansView.tsx";
import html2canvas from "html2canvas";
import Plan, { PlanProps } from "../components/Plan.tsx";
import { signal, Signal } from "@preact/signals";

export default function Home() {
  const exportRef = useRef();
  return (
    <div
      class={tw`flex flex-col px-5 mx-auto max-w-screen-md min-h-screen`}
      id="asImage"
    >
      <PlansView className={tw`flex flex-col flex-grow`} ref={exportRef} />
    </div>
  );
}
