import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import json from "@eslint/json";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores([
    "node_modules/**",
    ".next/**",
    "next-env.d.ts",
    "*.tsbuildinfo",
    "package-lock.json",
  ]),

  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: { version: "19.2.4" },
    },
    rules: {
      ...pluginReact.configs.flat["jsx-runtime"].rules,
    },
  },
  {
    files: ["**/*.json"],
    plugins: { json },
    language: "json/json",
    extends: ["json/recommended"],
  },
]);
