/** @type {import('stylelint').Config} */

export default {
  extends: ["stylelint-config-standard", "stylelint-config-recess-order"],
  ignoreFiles: ["dist/**/*"],
  rules: {
    "media-query-no-invalid": null,
  },
};
