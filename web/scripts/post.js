module.exports = async (runner, args) => {
  try {
    console.log('> POST: Cleansing (WEB):');

    const rc = args.rc;
    await runner.execute([
      `npx nx g @nrwl/workspace:rm ${rc.path}-e2e`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> POST: cleansing process ✅ DONE');

  } catch {
    throw new Error('Failed to clean WEB generators');
  }
}
