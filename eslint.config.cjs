const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const legacyConfig = require("./.eslintrc.cjs");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = [
  ...compat.config(legacyConfig),
];
