const fs = require('fs');

module.exports = (rc, files, error) => {

  return new Promise((resolve, reject) => {
    try {
      console.log('> Cleaning Monorepo....')

      // Git clone (clone repo templates)
      const child = spawn(`npx nx g @nrwl/workspace:rm ${rc.path}`, {
        shell: true,
        cwd: rc.workspace_path
      })

      //spit stdout to screen
      child.stdout.on('data', (d) => console.log(`${d.toString()}`))
      child.stderr.on('data', (d) => console.log(chalk.red(`${d.toString()}`)))
      child.on('close', (exitCode) => {
        console.log('> Rollback ✅ DONE')
        exitCode === 0 ? resolve() : reject(new Error('failed to rollback Nx'))
      });
    } catch (ex) {
      reject(ex);
    }
  })
}