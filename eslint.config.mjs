import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import _import from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: [
        "**/jest-preprocess.js",
        "**/jest.config.js",
        "**/.eslintrc.js",
        "**/loadershim.js",
        "**/next-env.d.ts",
        "src/queries/types/*.ts",
    ],
}, ...fixupConfigRules(compat.extends(
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
    "plugin:storybook/recommended",
    "plugin:jsx-a11y/recommended",
)), {
    plugins: {
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        import: fixupPluginRules(_import),
        prettier: fixupPluginRules(prettier),
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
        },

        "import/resolver": {
            typescript: {},
        },

        react: {
            pragma: "React",
            version: "detect",
        },
    },

    rules: {
        "prettier/prettier": ["error"],
        "import/no-unresolved": "warn",
        "import/no-unused-modules": "error",
        "import/no-useless-path-segments": "error",

        "import/order": ["error", {
            alphabetize: {
                order: "asc",
            },

            "newlines-between": "always",

            pathGroups: [{
                pattern: "@components/**",
                group: "internal",
            }, {
                pattern: "@utils/**",
                group: "internal",
            }],

            pathGroupsExcludedImportTypes: ["builtin"],
        }],

        "react/display-name": 0,
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react/no-unescaped-entities": 0,
        "@typescript-eslint/adjacent-overload-signatures": "error",
        "@typescript-eslint/array-type": "error",
        "@typescript-eslint/ban-types": "error",
        "@typescript-eslint/class-name-casing": "off",
        "@typescript-eslint/consistent-type-assertions": "error",
        "@typescript-eslint/consistent-type-definitions": "error",
        "@typescript-eslint/explicit-function-return-type": "off",

        "@typescript-eslint/explicit-member-accessibility": ["off", {
            accessibility: "explicit",
        }],

        "@typescript-eslint/indent": "off",
        "@typescript-eslint/interface-name-prefix": "off",

        "@typescript-eslint/member-delimiter-style": ["error", {
            multiline: {
                delimiter: "semi",
                requireLast: true,
            },

            singleline: {
                delimiter: "semi",
                requireLast: false,
            },
        }],

        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-empty-interface": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-inferrable-types": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/no-namespace": "error",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-this-alias": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/prefer-for-of": "error",
        "@typescript-eslint/prefer-function-type": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",

        "@typescript-eslint/quotes": ["error", "single", {
            avoidEscape: true,
        }],

        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/triple-slash-reference": "error",
        "@typescript-eslint/type-annotation-spacing": "error",
        "@typescript-eslint/unified-signatures": "error",
        "arrow-parens": ["error", "as-needed"],
        camelcase: "off",
        "comma-dangle": "off",

        complexity: ["error", {
            max: 40,
        }],

        "constructor-super": "error",
        curly: ["error", "multi-line"],
        "default-case": "error",
        "dot-notation": "off",
        "eol-last": "error",
        eqeqeq: ["error", "smart"],
        "guard-for-in": "error",
        "id-blacklist": "off",
        "id-match": "off",
        "linebreak-style": "off",
        "max-classes-per-file": ["error", 1],
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-cond-assign": "error",
        "no-console": "off",
        "no-debugger": "error",
        "no-duplicate-case": "error",
        "no-duplicate-imports": "error",
        "no-empty": "off",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-extra-semi": "off",
        "no-fallthrough": "error",
        "no-invalid-this": "off",
        "no-irregular-whitespace": "off",
        "no-magic-numbers": "off",
        "no-multiple-empty-lines": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-redeclare": "error",
        "no-return-await": "error",
        "no-sequences": "error",

        "no-shadow": ["off", {
            hoist: "all",
        }],

        "no-sparse-arrays": "error",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-trailing-spaces": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "error",

        "no-unused-expressions": ["error", {
            allowShortCircuit: true,
        }],

        "no-unused-labels": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "one-var": ["error", "never"],
        "prefer-const": "error",
        "prefer-object-spread": "error",
        quotes: "off",
        "quote-props": "off",
        radix: "error",
        "space-in-parens": ["off", "never"],
        "spaced-comment": "error",
        "use-isnan": "error",
        "valid-typeof": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
}];