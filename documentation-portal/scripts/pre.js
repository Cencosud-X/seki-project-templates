const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (Documentation Portal):');
    const rc = args.rc;

    let docusaurusVersion = "2.4.1";

    // depend from the react version installed which version 
    // of docusaurus we need to install
    try {
      const packageJsonPath = path.join(rc.workspace_path, "package.json");
      const packageDependencies = require(packageJsonPath).dependencies;
      const reactVersion = packageDependencies["react"];
      if (reactVersion.length > 0) {
        const version = parseInt(reactVersion.split(".")[0]);
        if (version >= 18) {
          docusaurusVersion = "3.0.0-alpha.0";
        }
      }
    } catch (ex) {
      // maybe react wasnt installed at all
      console.warn("Maybe react wasnt installed, so we take the default docusaurus version", ex);
    }

    await runner.execute([
      'npm install -D @nrwl/web@14.4.3',
      'npm install react-router-dom@6.3.0',

      // Install docusaurus as the default 
      `npm install @docusaurus/core@${docusaurusVersion}`,
      `npm install @docusaurus/preset-classic@${docusaurusVersion}`,
      `npm install @docusaurus/theme-mermaid@${docusaurusVersion}`,

      `npx nx g @nrwl/web:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('failed to install pre-requisites');
  }
}