const fs = require('fs');
const path = require('path');

module.exports = async (runner, args) => {
  try {
    console.log('> PRE: Installing prerequisites (Serverless):');

    const rc = args.rc;

    await runner.execute([
      'npm install -D @nrwl/node @nrwl/eslint-plugin-nx @types/aws-lambda @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint esbuild ts-node ts-loader typescript',
      `npx nx g @nrwl/node:application ${rc.path}`
    ], {
      cwd: rc.workspace_path
    })

    console.log('> PRE: requisites ✅ DONE')

  } catch(error) {
    console.log(error);
    throw new Error('failed to install serverless pre-requisites');
  }
}