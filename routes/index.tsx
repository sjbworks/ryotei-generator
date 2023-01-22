/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import PlansView from "../islands/PlansView.tsx";

export default function Home() {
  return (
    <div class={tw`flex flex-col px-5 mx-auto max-w-screen-md min-h-screen `}>
      <PlansView className={tw`flex flex-col flex-grow`} />
    </div>
  );
}
