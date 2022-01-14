module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
      es6: true,
    },
    extends: ["react-app", "eslint:recommended", "plugin:react/recommended", "prettier"],
    globals: {
      Atomics: "readonly",
      SharedArrayBuffer: "readonly",
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
      "prettier/prettier": "warn",
      "react/prop-types": "off",
      "import/no-anonymous-default-export": "off",
      "react/no-unescaped-entities": "off",
      "array-callback-return": "off",
      "react/display-name": "off",
    },
  };