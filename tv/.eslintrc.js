module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "react-app", "prettier"],
  plugins: ["@typescript-eslint", "react"],
  rules: {
    '@typescript-eslint/no-var-requires': 0,
  },
};
