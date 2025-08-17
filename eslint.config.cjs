const js = require("@eslint/js");

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        document: "readonly",
        localStorage: "readonly",
        alert: "readonly",
        fetch: "readonly",
        navigator: "readonly",
        window: "readonly",
        self: "readonly",
        caches: "readonly",
      }
    },
    rules: {
    "no-unused-vars": "off"
  }
  }
];
