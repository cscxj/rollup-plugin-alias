import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  input: "src/index.ts",
  output: [
    { file: pkg.main, format: "cjs", exports: "auto" },
    { file: pkg.module, format: "es" },
  ],
  plugins: [typescript({ sourceMap: false })],
};
