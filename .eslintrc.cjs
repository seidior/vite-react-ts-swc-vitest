/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier"
  ],
  ignorePatterns: ["dist", "node_modules", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: "module",
    ecmaVersion: "2020"
  },
  plugins: ["react-refresh"],
  overrides: [
    {
      files: ["*.cjs"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
      env: {
        commonjs: true
      }
    },
    {
      files: ["*.ts", "*.tsx"],
      env: {
        browser: true
      },
      extends: [
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/strict-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "prettier"
      ],
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true
        }
      },
      rules: {
        "@typescript-eslint/triple-slash-reference": "off",
        "i18n-text/no-en": "off",
        "prettier/prettier": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "filenames/match-regex": "off"
      },
      settings: {
        react: {
          pragma: "h",
          version: "18.0"
        }
      }
    }
  ],
  rules: {
    "prettier/prettier": "off",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "_",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],
    "filenames/match-regex": "off"
  }
};
