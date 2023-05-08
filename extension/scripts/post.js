module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleaning (Extension):');

    const rc = args.rc;
    await runner.execute([
      `npx nx g @nrwl/workspace:rm ${rc.path}-e2e`,
      'rm -rf ./src/app',
      'rm -rf ./src/test-setup.ts',
      'rm -rf ./favicon.ico',
      'rm -rf ./src/favicon.ico',
      'rm -rf ./src/main.ts',
      'rm -rf ./src/styles.css',
      //'rm -rf ./src/assets',
      'rm -rf ./src/environments',
    ], {
      cwd: args.workspacePath
    })

    console.log('> POST: Cleaning process ✅ DONE');

  } catch {
    throw new Error('Failed to clean Extension');
  }
}
