/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Plans from "../islands/Plans.tsx";
import Header from "../islands/Header.tsx";
import FloatingActionButton from "../islands/FloatingActionButton.tsx";

export default function Home() {
  return (
    // <div class={tw`p-4 mx-auto max-w-screen-md min-h-screen`}>
    //   <main class={tw`flex-grow`}>
    //   <Header />
    <Plans />
    //   </main>
    //   <footer class={tw`flex`}>
    //     <FloatingActionButton className="ml-auto mb-2" />
    //   </footer>
    // </div>
  );
}
