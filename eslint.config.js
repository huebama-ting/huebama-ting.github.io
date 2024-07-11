// @ts-check

import eslint from "@eslint/js";
import react from "@eslint-react/eslint-plugin";
import eslintConfigPrettier from "eslint-config-prettier";
import compat from "eslint-plugin-compat";
import depend from "eslint-plugin-depend";
import pluginESx from "eslint-plugin-es-x";
import eslintImportX from "eslint-plugin-import-x";
import eslintPluginJsonc from "eslint-plugin-jsonc";
import jsxA11y from "eslint-plugin-jsx-a11y";
import nodePlugin from "eslint-plugin-n";
import pluginPromise from "eslint-plugin-promise";
import hooksPlugin from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import sonarjs from "eslint-plugin-sonarjs";
import tseslint from "typescript-eslint";

const flatRecommended = "flat/recommended";

export default [
  ...tseslint.config(
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
      files: ["**/*.{ts,tsx}"],
      ...react.configs.recommended,
    },
    {
      files: ["**/*.{ts,tsx}"],
      extends: [
        ...tseslint.configs.strictTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
      ],
      languageOptions: {
        parserOptions: {
          project: [
            "./tsconfig.json",
            "./tsconfig.node.json",
            "./tsconfig.eslint.json",
          ],
          tsconfigRootDir: import.meta.dirname,
        },
      },
      plugins: {
        "react-refresh": reactRefresh,
      },
      rules: {
        "@eslint-react/no-leaked-conditional-rendering": "error",
        "@eslint-react/prefer-read-only-props": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
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
          "warn",
          { allowConstantExport: true },
        ],
      },
    },
    compat.configs[flatRecommended],
    depend.configs[flatRecommended],
    eslintConfigPrettier,
    ...eslintPluginJsonc.configs["flat/recommended-with-json"],
    jsxA11y.flatConfigs.recommended,
    nodePlugin.configs[flatRecommended],
    {
      files: ["**/*.{js,jsx,ts,tsx}"],
      ...sonarjs.configs.recommended,
    },
    {
      rules: {
        "n/no-missing-import": "off",
        "n/no-unsupported-features/node-builtins": [
          "error",
          {
            ignores: ["navigator"],
          },
        ],
        "n/prefer-node-protocol": "error",
      },
    },
    pluginPromise.configs[flatRecommended],
    {
      plugins: {
        "import-x": eslintImportX,
      },
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
