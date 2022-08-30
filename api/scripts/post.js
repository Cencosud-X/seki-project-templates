const { spawn } = require('child_process');

module.exports = (workspacePath, rc) => {
  return new Promise((resolve, reject) => {
    try {
      console.log('> POST: Cleansing (API):');

      // Install prerequisites and install project via nx
      const child = spawn([
        'rm -rf ./src/app',
        'rm -rf ./src/assets',
        'rm -rf ./src/environments'
      ].join(" && "), {
        shell: '/bin/zsh',
        cwd: workspacePath
      })

      //spit stdout to screen
      child.stdout.on('data', (d) => console.log(d.toString()))
      child.stderr.on('data', (d) => console.log(d.toString()))
      child.on('close', (exitCode) => {
        console.log('> POST: cleansing process ✅ DONE')
        exitCode === 0 ? resolve() : reject(new Error('failed to clean API generators'))
      });
    } catch (ex) {
      reject(ex);
    }
  })
}