import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/server-runtime" {
  interface Future {
    unstable_singleFetch: true;
  }
}

export default defineConfig({
  base: "/platform/",
  plugins: [
    remix({
      basename: "/platform/",
      future: {
        v3_singleFetch: true,
      },
    }),
    tsconfigPaths(),
  ],
});
