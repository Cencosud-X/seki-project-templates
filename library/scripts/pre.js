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
      const npmOrganization = rc.settings.npm.organization;
      importPath = `@${npmOrganization}/${rc.path}`;
    }
    await runner.execute([
      'npm install -D @nrwl/js@14.4.3',
      `npx nx g @nrwl/js:lib ${rc.path} ${isPublishable ? `--publishable --importPath=\"${importPath}\"` : ''} ${isBuildable ? '--buildable' : ''}`
    ], {
      cwd: rc.workspace_path
    })
    
    if(isPublishable) {
      const projectJsonPath = path.join(args.workspacePath, "project.json");
      if (fs.existsSync(projectJsonPath)) {
        const rawContent = fs.readFileSync(projectJsonPath).toString("utf-8");
        const parsedContent = JSON.parse(rawContent);
        if(Array.isArray(parsedContent.tags)) {
          parsedContent.tags.push("REQUIRED:GOLDEN")  
        }
        const newContent = JSON.stringify(parsedContent, null, 2);
        fs.writeFileSync(projectJsonPath, newContent, { flag: fs.constants.O_WRONLY })
      }
    }

    console.log('> PRE: requisites ✅ DONE')

  } catch {
    throw new Error('failed to install library pre-requisites');
  }
}