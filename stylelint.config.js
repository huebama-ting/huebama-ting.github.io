/** @type {import('stylelint').Config} */

export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  ignoreFiles: ["dist/**/*"],
  rules: {
    "at-rule-no-unknown": [true, { ignoreAtRules: ["mixin"] }],
    "media-query-no-invalid": null,
  },
};
