const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (Library):');

    const rc = args.rc;

    // plubishable: a library marked as publishable (npm publish)
    // buildable: a library marked as a "build" dist output
    const isPublishable = rc.settings.publishable | false;
    const isBuildable = rc.settings.buildable | false;
    let importPath = '';
    if (isPublishable) {
      // we need to extract the npmScope var inside 
      // the nx.json file into the root project
      importPath = rc.path

      console.log("args" , args);
      
      const nxPath = path.join(rc.workspace_path, "nx.json");
      if (fs.existsSync(nxPath)) {
        const rawContent = fs.readFileSync(nxPath).toString("utf-8");
        const parsedContent = JSON.parse(rawContent);
        const npmScope = `@team_${parsedContent.npmScope}`;
        importPath = `${npmScope}/${rc.path}`;
      }

    }
    await runner.execute([
      'npm install -D @nrwl/js@14.4.3',
      `npx nx g @nrwl/js:lib ${rc.path} ${isPublishable ? `--publishable --importPath=\"${importPath}\"` : ''} ${isBuildable ? '--buildable' : ''}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('failed to install library pre-requisites');
  }
}