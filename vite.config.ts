// vite.config.ts
import mdx from "@mdx-js/rollup";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import remarkGfm from "remark-gfm";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    mdx({
      jsxImportSource: "react",
      providerImportSource: "@mdx-js/react",
      remarkPlugins: [remarkGfm],
    }),
    tsConfigPaths(),
    tanstackStart(),
  ],
});
