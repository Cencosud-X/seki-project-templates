const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (Library):');

    const rc = args.rc;

    // plubishable: a library marked as publishable (npm publish)
    // buildable: a library marked as a "build" dist output
    const isPublishable = !!rc.settings.publishable;
    const isBuildable = !!rc.settings.buildable;
    let publishableArg = '';
    const buildableArg = `--buildable=${isBuildable}`;
    const tagArg =  isBuildable || isPublishable ? '--tags=\"REQUIRED:GOLDEN\"' : '';
    if (isPublishable) {
      const npmOrganization = rc.settings.npm.organization;
      const importPath = `@${npmOrganization}/${rc.path}`;
      publishableArg = `--publishable --importPath=\"${importPath}\"`;
    }
    
    await runner.execute([
      'npm install -D @nrwl/js@14.4.3',
      `npx nx g @nrwl/js:lib ${rc.path} ${publishableArg} ${buildableArg} ${tagArg}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch {
    throw new Error('failed to install library pre-requisites');
  }
}