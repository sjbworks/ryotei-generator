/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = await ctx.render();
    return ctx.render(resp);
  },
};

export default function AboutPage({ data }: PageProps<string | null>) {
  console.log();
  return (
    <main>
      <h1>About</h1>
      <p>This is the about page.</p>
      <p>{data}</p>
    </main>
  );
}
