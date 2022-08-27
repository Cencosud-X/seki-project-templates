const { spawn } = require('child_process');

module.exports = (workspacePath, rc, error) => {
  return new Promise((resolve, reject) => {
    try {
      console.log('> Cleaning Monorepo....')

      // Git clone (clone repo templates)
      const child = spawn(`npx nx g @nrwl/workspace:rm ${rc.path}`, {
        shell: true,
        cwd: workspacePath,
        env: {
          PATH: `${process.env.PATH}:/usr/local/bin`,
        }
      })

      //spit stdout to screen
      child.stdout.on('data', (d) => console.log(d.toString()))
      child.stderr.on('data', (d) => console.log(chalk.red(d.toString())))
      child.on('close', (exitCode) => {
        console.log('> Rollback ✅ DONE')
        exitCode === 0 ? resolve() : reject(new Error('failed to rollback Nx'))
      });
    } catch (ex) {
      reject(ex);
    }
  })
}