const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8"));

module.exports = {
	extends: [
		require.resolve("eslint-config-airbnb"),
		"plugin:prettier/recommended",
		require.resolve("eslint-config-prettier/react")
	],
	plugins: ["react", "redux-saga", "react-hooks", "prettier", "import", "jsx-a11y"],
	parser: require.resolve("babel-eslint"),
	parserOptions: {
		ecmaVersion: 6,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	env: {
		jest: true,
		browser: true,
		node: true,
		es6: true
	},
	rules: {
		"arrow-body-style": ["error", "as-needed"],
		"import/no-extraneous-dependencies": "off",
		"max-len": "off",
		"newline-per-chained-call": "off",
		"no-console": "warn",
		"no-unused-vars": "error",
		"prefer-template": "error",
		"prettier/prettier": ["error", prettierOptions],
		"jsx-a11y/aria-props": "error",
		"jsx-a11y/heading-has-content": "off",
		"jsx-a11y/label-has-associated-control": [
			2,
			{
				// NOTE: If this error triggers, either disable it or add
				// your custom components, labels and attributes via these options
				// See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
				controlComponents: ["Input"]
			}
		],
		"jsx-a11y/label-has-for": "off",
		"jsx-a11y/mouse-events-have-key-events": "error",
		"jsx-a11y/role-has-required-aria-props": "error",
		"jsx-a11y/role-supports-aria-props": "error",
		"react-hooks/rules-of-hooks": "error",
		"react/destructuring-assignment": "off",
		"react/jsx-closing-tag-location": "error",
		"react/forbid-prop-types": "off",
		"react/jsx-curly-newline": "off",
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"react/jsx-filename-extension": "off",
		"react/jsx-no-target-blank": "off",
		"react/jsx-props-no-spreading": "off",
		"react/jsx-uses-vars": "error",
		"react/require-extension": "off",
		"react/self-closing-comp": "off",
		"react/sort-comp": [
			"error",
			{
				order: [
					"type-annotations",
					"static-methods",
					"lifecycle",
					"everything-else",
					"render"
				]
			}
		],
		"redux-saga/no-yield-in-race": "error",
		"redux-saga/yield-effects": "error",
		"require-yield": "error"
	}
};
