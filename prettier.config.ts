import type { Config } from "prettier";

const config: Config = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: false,
  quoteProps: "as-needed",
  trailingComma: "es5",
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  plugins: ["prettier-plugin-tailwindcss"],
  overrides: [
    { files: "*.yml", options: { tabWidth: 2 } },
    { files: "*.json", options: { printWidth: 80 } },
    { files: "*.mdx", options: { proseWrap: "always" } },
  ],
};

export default config;
