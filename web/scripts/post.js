module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (WEB):');
/*
    await runner.execute([
      'rm -rf ./src/app',
      'rm -rf ./src/assets',
      'rm -rf ./src/environments'
    ], {
      cwd: args.workspacePath
    })
*/
    console.log('> POST: cleansing process ✅ DONE');

  } catch {
    throw new Error('failed to clean WEB generators');
  }
}
