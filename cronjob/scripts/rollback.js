module.exports = async (runner, args) => {
  try {
    console.log('> Cleaning Monorepo....')

    const rc = args.rc;
    await runner.execute(`npx nx g @nrwl/workspace:rm ${rc.path}`, {
      cwd: rc.workspace_path
    })

    console.log('> Rollback ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('Failed to rollback Nx');
  }
}