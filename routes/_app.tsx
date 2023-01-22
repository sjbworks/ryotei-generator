/** @jsx h */
import { Fragment, h } from "preact";
import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "twind";

export default function App({ Component }: AppProps) {
  return (
    <Fragment>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <link rel="stylesheet" href="/app.css" />
      </Head>
      <div class={tw`bg-babyPowder`}>
        <Component />
      </div>
    </Fragment>
  );
}
