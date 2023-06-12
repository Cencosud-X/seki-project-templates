const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (CLI):');

    const rc = args.rc;
    
    await runner.execute([
      'npm install -D @nrwl/js@14.4.3 @types/prettyjson @types/yargs @types/node pkg',
      'npm install -S prettyjson',
      `npx nx g @nrwl/js:lib ${rc.path} --buildable --tags=\"REQUIRED:GOLDEN\"`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch(error) {
    console.log(error);
    throw new Error('failed to install command-line interface pre-requisites');
  }
}
