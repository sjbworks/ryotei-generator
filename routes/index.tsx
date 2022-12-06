/** @jsx h */
import { h } from "preact";
import { tw } from "twind";
import PlansView from "../islands/PlansView.tsx";

export default function Home() {
  return (
    <div
      class={tw`flex flex-col px-5 pt-3 mx-auto max-w-screen-md min-h-screen bg-babyPowder subpixel-antialiased`}
    >
      <PlansView className={tw`flex flex-col flex-grow`} />
    </div>
  );
}
