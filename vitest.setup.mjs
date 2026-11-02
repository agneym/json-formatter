import { registerHooks } from "node:module";

// Dependencies loaded natively by Node (e.g. buffetjs) require() font and image
// files directly. Vite aliases don't reach those, so stub them at the loader.
const ASSET =
  /\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$/;

registerHooks({
  load(url, context, nextLoad) {
    if (ASSET.test(url)) {
      return {
        format: "commonjs",
        source: 'module.exports = "test-file-stub";',
        shortCircuit: true,
      };
    }
    return nextLoad(url, context);
  },
});
