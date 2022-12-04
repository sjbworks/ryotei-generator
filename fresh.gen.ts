// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/about.tsx";
import * as $3 from "./routes/api/joke.ts";
import * as $4 from "./routes/github/[username].tsx";
import * as $5 from "./routes/index.tsx";
import * as $$0 from "./islands/FloatingActionButton.tsx";
import * as $$1 from "./islands/Form.tsx";
import * as $$2 from "./islands/Plan.tsx";
import * as $$3 from "./islands/PlansView.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/about.tsx": $2,
    "./routes/api/joke.ts": $3,
    "./routes/github/[username].tsx": $4,
    "./routes/index.tsx": $5,
  },
  islands: {
    "./islands/FloatingActionButton.tsx": $$0,
    "./islands/Form.tsx": $$1,
    "./islands/Plan.tsx": $$2,
    "./islands/PlansView.tsx": $$3,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
