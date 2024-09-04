// @ts-check

import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import eslint from "@eslint/js";
import react from "@eslint-react/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import compat from "eslint-plugin-compat";
import depend from "eslint-plugin-depend";
import pluginESx from "eslint-plugin-es-x";
import importPlugin from "eslint-plugin-import-x";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nodePlugin from "eslint-plugin-n";
import pluginPromise from "eslint-plugin-promise";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { configs as sonarJsConfig } from "eslint-plugin-sonarjs";
import { config, configs } from "typescript-eslint";

const flatRecommended = "flat/recommended";

export default [
  ...config(
    {
      ignores: ["**/dev-dist/**", "**/dist/**"],
    },
    {
      extends: [eslint.configs.recommended],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          ecmaVersion: 2022,
          sourceType: "module",
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: "error",
      },
    },
    {
      files: ["**/*.{jsx,tsx}"],
      extends: [react.configs["recommended-type-checked"]],
      rules: {
        "@eslint-react/prefer-read-only-props": "error",
      },
    },
    {
      files: ["**/*.{ts,tsx}"],
      extends: [...configs.strictTypeChecked, ...configs.stylisticTypeChecked],
      languageOptions: {
        parserOptions: {
          projectService: true,
          tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
        },
      },
      plugins: {
        "react-refresh": reactRefresh,
      },
      rules: {
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/no-unused-vars": [
          "error",
          {
            args: "all",
            argsIgnorePattern: "^_",
            caughtErrors: "all",
            caughtErrorsIgnorePattern: "^_",
            destructuredArrayIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            ignoreRestSiblings: true,
          },
        ],
        "@typescript-eslint/restrict-template-expressions": [
          "error",
          {
            allowBoolean: true,
            allowNumber: true,
          },
        ],
        "react-refresh/only-export-components": [
          "error",
          { allowConstantExport: true },
        ],
      },
    },
    compat.configs[flatRecommended],
    depend.configs[flatRecommended],
    eslintConfigPrettier,
    {
      files: ["**/*.json"],
      extends: [
        ...eslintPluginJsonc.configs["flat/recommended-with-json"],
        ...eslintPluginJsonc.configs["flat/prettier"],
      ],
    },
    jsxA11y.flatConfigs.recommended,
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      ...sonarJsConfig.recommended,
    },
    {
      extends: [nodePlugin.configs[flatRecommended]],
      rules: {
        "n/no-missing-import": "off",
        "n/no-unsupported-features/node-builtins": [
          "error",
          {
            ignores: ["navigator", "sessionStorage"],
          },
        ],
        "n/prefer-node-protocol": "error",
      },
    },
    pluginPromise.configs[flatRecommended],
    {
      extends: [
        importPlugin.flatConfigs.recommended,
        importPlugin.flatConfigs.react,
        importPlugin.flatConfigs.typescript,
      ],
      settings: {
        "import-x/resolver": {
          typescript: true,
          node: true,
        },
      },
      rules: {
        "import-x/no-unresolved": [
          "error",
          {
            ignore: ["^virtual:"],
          },
        ],
        "import-x/order": [
          "error",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              ["sibling", "parent"],
              "index",
              "unknown",
            ],
            "newlines-between": "always",
            alphabetize: {
              order: "asc",
              caseInsensitive: true,
            },
          },
        ],
        "sort-imports": [
          "error",
          {
            ignoreCase: false,
            ignoreDeclarationSort: true, // don't want to sort import lines, use eslint-plugin-import-x instead
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            allowSeparatedGroups: true,
          },
        ],
      },
    },
  ),
  pluginESx.configs["flat/restrict-to-es2022"],
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
];
