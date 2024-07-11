module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
    "shared-node-browser": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@eslint-react/recommended-legacy",
    "plugin:compat/recommended",
    "plugin:depend/recommended",
    "plugin:es-x/restrict-to-es2022",
    "plugin:import-x/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:n/recommended",
    "plugin:promise/recommended",
    "plugin:react-hooks/recommended",
    "plugin:sonarjs/recommended-legacy",
    "prettier",
  ],
  overrides: [
    {
      extends: ["plugin:jsonc/prettier", "plugin:jsonc/recommended-with-json"],
      files: ["*.json", "*.json5", "*.jsonc"],
      parser: "jsonc-eslint-parser",
    },
    {
      extends: [
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic",
        "plugin:import-x/typescript",
      ],
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: [
          "./tsconfig.json",
          "./tsconfig.node.json",
          "./tsconfig.eslint.json",
        ],
        tsconfigRootDir: __dirname,
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
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: [
    "@emotion",
    "compat",
    "es-x",
    "jsx-a11y",
    "promise",
    "react-refresh",
    "sonarjs",
  ],
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
    "n/no-missing-import": "off",
    "n/no-unsupported-features/node-builtins": [
      "error",
      {
        ignores: ["navigator"],
      },
    ],
    "n/prefer-node-protocol": "error",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
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
  settings: {
    "import-x/resolver": {
      node: true,
      typescript: true,
    },
  },
  reportUnusedDisableDirectives: true,
};
