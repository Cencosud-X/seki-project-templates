module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing required packages');

    const rc = args.rc;
    await runner.execute([
      'npm install -D @nrwl/web@14.4.3',
      'npm install -D react-router-dom@6.3.0',
      'npm install -D antd',
      'npm install -D @team_seki/extension-sdk',
      `npx nx g @nrwl/web:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requirements ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('Failed to install requirements');
  }
}