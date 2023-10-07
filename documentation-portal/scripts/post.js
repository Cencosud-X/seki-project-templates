module.exports = async (runner, args) => {
  try {
    console.log("> POST: Cleansing:");

    const rc = args.rc;
    await runner.execute(
      [
        "rm -rf ./src/app",
        "rm -rf ./src/test-setup.ts",
        "rm -rf ./favicon.ico",
        "rm -rf ./src/favicon.ico",
        "rm -rf ./src/main.ts",
        "rm -rf ./src/styles.css",
        "rm -rf ./src/environments",

        "rm -rf ./.babelrc",
        "rm -rf ./.eslintrc.json",
        "rm -rf ./browserslist",
        "rm -rf ./jest.config.ts",
        "rm -rf ./tsconfig.spec.json",

        "rm -rf ./src/index.html",
        "rm -rf ./src/polyfills.ts",
        "rm -rf ./src/browserslist",
        "rm -rf ./src/assets",
      ],
      {
        cwd: args.workspacePath,
      }
    );

    console.log("> POST: cleansing process ✅ DONE");
  } catch {
    throw new Error("Failed to clean generators");
  }
};
