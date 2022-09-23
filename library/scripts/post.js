module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (Web):');

    await runner.execute([
      'rm -rf ./src/lib'
    ], {
      cwd: args.workspacePath
    })

    console.log('> POST: cleansing process ✅ DONE');

  } catch {
    throw new Error('Failed to clean web generators');
  }
}
