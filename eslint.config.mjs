import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react: pluginReact,
      prettier,
    },
    extends: [
      "js/recommended",
      ...pluginReact.configs.flat.recommended.extends,
      "plugin:prettier/recommended",
    ],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
    },
  },
]);
