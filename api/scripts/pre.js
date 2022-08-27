const { spawn } = require('child_process');

module.exports = (workspacePath, rc) => {
  return new Promise((resolve, reject) => {
    try {
      console.log('> PRE: Installing prerequisites (API):');

      // Install prerequisites and install project via nx
      const child = spawn([
        'npm install -D @nrwl/nest@14.4.3',
        `npx nx g @nrwl/nest:app ${rc.path}`
      ].join(" && "), {
        shell: true,
        cwd: rc.workspacePath,
        env: {
          PATH: '/bin:/usr/bin:/usr/local/bin'
        }
      })

      //spit stdout to screen
      child.stdout.on('data', (d) => console.log(d.toString()))
      child.stderr.on('data', (d) => console.log(d.toString()))
      child.on('close', (exitCode) => {
        console.log('> PRE: requisites ✅ DONE')
        exitCode === 0 ? resolve() : reject(new Error('failed to install api pre-requisites'))
      });
    } catch (ex) {
      reject(ex);
    }
  })
}