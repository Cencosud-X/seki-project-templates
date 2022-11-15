module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (API):');

    const rc = args.rc;
    await runner.execute([
      'rm -rf ./src/app',
      'rm -rf ./src/assets',
      'rm -rf ./src/environments',
      `npx nx run ${rc.path}:secrets`
    ], {
      cwd: args.workspacePath
    })

    console.log('> POST: cleansing process ✅ DONE');

  } catch {
    throw new Error('Failed to clean API generators');
  }
}
