module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		// "plugin:vue/essential",
		"plugin:vue/recommended",
    "eslint:recommended",
		"@vue/prettier",
    
	],
	plugins: ["vuetify"],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-var": "error",
		"prefer-const": "error",
		"vuetify/no-deprecated-classes": "error",
    "vuetify/no-legacy-grid": "error",

		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: "all",
				printWidth: 100,
				bracketSpacing: true,
				arrowParens: "avoid",
			},
		],
	},
};
