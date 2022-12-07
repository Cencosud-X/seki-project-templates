module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (WEB):');

    const rc = args.rc;
    await runner.execute([
      `npx nx g @nrwl/workspace:rm ${rc.path}-e2e`,
      'rm -rf ./src/app',
      'rm -rf ./src/test-setup.ts',
      'rm -rf ./favicon.ico',
      //'rm -rf ./src/assets',
      'rm -rf ./src/environments',
    ], {
      cwd: args.workspacePath
    })

    console.log('> POST: cleansing process ✅ DONE');

  } catch {
    throw new Error('Failed to clean WEB generators');
  }
}
