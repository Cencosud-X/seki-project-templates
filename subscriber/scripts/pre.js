module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (Subscriber):');

    const rc = args.rc;
    await runner.execute([
      'npm install --save-dev @nrwl/nest@14.4.3',
      'npm install --save @team_seki/streamer@0.0.9',
      `npx nx g @nrwl/nest:app ${rc.path}`,
    ], {
      cwd: rc.workspacePath
    });

    console.log('> PRE: requisites ✅ DONE');

  } catch {
    throw new Error('Failed to install subscriber pre-requisites');
  }
}