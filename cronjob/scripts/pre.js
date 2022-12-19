module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (CRON JOB):');

    const rc = args.rc;
    await runner.execute([
      'npm install -D @nrwl/node@14.4.3',
      `npx nx g @nrwl/node:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('Failed to install CRON JOB pre-requisites');
  }
}