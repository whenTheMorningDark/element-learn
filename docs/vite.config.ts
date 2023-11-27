import { defineConfig } from "vite";
import path from "path";
import type { Alias } from "vite";
import Components from "unplugin-vue-components/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
// import { PluginOption, Plugin } from "vite";
const alias: Alias[] = [
  {
    find: "~/",
    replacement: `${path.resolve(__dirname, "./.vitepress/vitepress")}/`,
  },
];
// if (process.env.DOC_ENV !== "production") {
//   alias.push(
//     {
//       find: /^element-plus(\/(es|lib))?$/,
//       replacement: path.resolve(projRoot, "packages/element-plus/index.ts"),
//     },
//     {
//       find: /^element-plus\/(es|lib)\/(.*)$/,
//       replacement: `${path.resolve(projRoot, "packages")}/$2`,

const plugins = [
  vueJsx(),
  vueSetupExtend(),

  Components({
    dirs: [".vitepress/vitepress/components"],
    allowOverrides: true,
    resolvers: [
      // IconsResolver(),
    ],
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  }),
];

export default defineConfig({
  plugins,
  server: {
    host: "0.0.0.0",
    port: 4444,
    open: false,
    https: false,
  },
  resolve: {
    alias,
  },
});
