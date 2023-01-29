/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import PlansView from "../islands/PlansView.tsx";
import html2canvas from "html2canvas";
import Plan, { PlanProps } from "../components/Plan.tsx";
import { signal, Signal } from "@preact/signals";
// import { RiScreenshot2Line } from "react-icons/ri";

export default function Home() {
  return (
    <div
      class={tw`flex flex-col px-5 mx-auto max-w-screen-md min-h-screen`}
      id="asImage"
    >
      {/* <RiScreenshot2Line /> */}
      <PlansView className={tw`flex flex-col flex-grow`} />
    </div>
  );
}
