module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (WEB):');

    let docusaurusVersion = "2.4.1";

    // depend from the react version installed which version 
    // of docusaurus we need to install
    try {
      const reactVersion = runner.execute(["npm list react --depth 0 | grep react"]);
      if (reactVersion.length > 0) {
        const version = parseInt(reactVersion.split("@")[1].split(".")[1]);
        if (version >= 18) {
          docusaurusVersion = "3.0.0-alpha.0"
        }
      }
      // maybe react wasnt installed at all
    } catch (ex) {
      console.warn("Maybe react wasnt installed, so we take the default docusaurus version", ex);
    }

    console.log(docusaurusVersion);

    console.debug([
      'npm install -D @nrwl/web@14.4.3',
      'npm install -D react-router-dom@6.3.0',

      // Install docusaurus as the default 
      `@docusaurus/core@${docusaurusVersion}`,
      `@docusaurus/preset-classic@${docusaurusVersion}`,
      `@docusaurus/theme-mermaid@${docusaurusVersion}`,

      `npx nx g @nrwl/web:app ${rc.path}`
    ])

    process.exit(1);

    const rc = args.rc;
    await runner.execute([
      'npm install -D @nrwl/web@14.4.3',
      'npm install -D react-router-dom@6.3.0',

      // Install docusaurus as the default 
      `@docusaurus/core@${docusaurusVersion}`,
      `@docusaurus/preset-classic@${docusaurusVersion}`,
      `@docusaurus/theme-mermaid@${docusaurusVersion}`,

      `npx nx g @nrwl/web:app ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch (ex) {
    console.error(ex);
    throw new Error('failed to install web pre-requisites');
  }
}