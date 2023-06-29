/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	roots: ["src", "tests"],
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
	},
	testMatch: ["**/tests/**/*.test.jsx", "**/tests/**/*.test.tsx", "**/tests/**/*.test.js", "**/tests/**/*.test.ts"],
};
