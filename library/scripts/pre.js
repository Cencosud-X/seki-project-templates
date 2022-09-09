module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (Library):');

    const rc = args.rc;

    // plubishable: a library marked as publishable (npm publish)
    // buildable: a library marked as a "build" dist output
    const isPublishable = rc.settings.publishable|false;
    const isBuildable = rc.settings.buildable|false;
    let importPath  = '';
    if(isPublishable){
      importPath = rc.path
    }
    await runner.execute([
      'npm install -D @nrwl/js@14.4.3',
      `npx nx g @nrwl/js:lib ${rc.path} ${isPublishable ? `--publishable --importPath=\"${importPath}\"` : ''} ${isBuildable ? '--buildable' : ''}`
    ], {
      cwd: rc.workspacePath
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch {
    throw new Error('failed to install library pre-requisites');
  }
}