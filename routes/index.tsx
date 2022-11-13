/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import PlansArea from "../islands/PlansArea.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
  return (
    <div
      class={tw`flex flex-col p-5 mx-auto max-w-screen-md min-h-screen bg-babyPowder`}
    >
      <Header />
      <PlansArea className={tw`flex flex-col flex-grow`} />
    </div>
  );
}
