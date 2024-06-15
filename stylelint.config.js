/** @type {import('stylelint').Config} */

export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  customSyntax: "postcss-styled-syntax",
  rules: {
    "font-family-no-missing-generic-family-keyword": [
      true,
      {
        ignoreFontFamilies: ["Overpass Variable"],
      },
    ],
  },
};
