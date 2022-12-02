module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (WEB):');

    const rc = args.rc;
    await runner.execute([
      'npm install -D @nrwl/web@14.4.3',
      'npm install -D react-router-dom/web@6.3.0',
      `npx nx g @nrwl/web:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch {
    console.error(ex);
    throw new Error('failed to install web pre-requisites');
  }
}