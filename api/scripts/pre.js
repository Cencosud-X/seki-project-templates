module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (API):');

    const rc = args.rc;
    await runner.execute([
      'npm install -D @nrwl/nest@14.4.3',
      `npx nx g @nrwl/nest:app ${rc.path}`
    ], {
      cwd: rc.workspacePath
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch {
    throw new Error('failed to install api pre-requisites');
  }
}