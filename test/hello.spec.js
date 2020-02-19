const { CLIEngine } = require("eslint");

describe("hello", () => {
	it("should report semicolon errors", () => {
		const cli = new CLIEngine({
			useEslintrc: true
		});
		const { results } = cli.executeOnFiles([require.resolve("./hello.js")]);
		expect(
			results.map(result =>
				result.messages.map(message => ({
					...message,
					filePath: ""
				}))
			)
		).toMatchSnapshot();
	});
});
