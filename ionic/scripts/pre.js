module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (IONIC):');

    const rc = args.rc;
    await runner.execute([
      'echo "uninmplemented"'
      //'npm install -D @nrwl/web@14.4.3',
      //`npx nx g @nrwl/web:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch {
    console.error(ex);
    throw new Error('failed to install ionic pre-requisites');
  }
}