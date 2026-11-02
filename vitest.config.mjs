import { fileURLToPath } from "node:url";
import { transformAsync } from "@babel/core";
import { defineConfig } from "vitest/config";

const mock = (file) =>
  fileURLToPath(new URL(`./__mocks__/${file}`, import.meta.url));

// The source uses JSX inside .js files and relies on the project's Babel
// config (styled-components css prop, etc.), so run it through Babel first.
function babel() {
  return {
    name: "babel-jsx",
    enforce: "pre",
    async transform(code, id) {
      if (!/\/src\/.*\.jsx?$/.test(id) || id.includes("/node_modules/")) {
        return null;
      }
      const result = await transformAsync(code, {
        filename: id,
        sourceMaps: true,
        caller: {
          name: "vitest",
          supportsStaticESM: true,
          supportsDynamicImport: true,
        },
      });
      return { code: result.code, map: result.map };
    },
  };
}

export default defineConfig({
  plugins: [babel()],
  resolve: {
    alias: [
      // Monaco ships native ESM with workers; tests use a lightweight stand-in.
      { find: /^monaco-editor\/.*$/, replacement: mock("monacoMock.js") },
      {
        find: /^.+\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/,
        replacement: mock("fileMock.js"),
      },
    ],
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.mjs"],
    include: ["src/**/*.spec.js"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.{js,jsx}"],
    },
  },
});
