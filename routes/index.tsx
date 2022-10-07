/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Form from "../islands/Form.tsx";
import Plan from "../islands/Plan.tsx";
import Plans from "../islands/Plans.tsx";
import Header from "../islands/Header.tsx";
import FloatingActionButton from "../islands/FloatingActionButton.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md flex flex-col min-h-screen`}>
      <main class={tw`flex-grow`}>
        <Header />
        <p class={tw`my-6`}>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Plan dateTime={"2020-10-13 15:30"} text={"名古屋駅"} key={1111} />
        <Plans />
        {/* <Form /> */}
      </main>
      <footer class={tw`flex`}>
        <FloatingActionButton className="ml-auto mb-2" />
      </footer>
    </div>
  );
}
