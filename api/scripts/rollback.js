const fs = require('fs');

module.exports = (rc, files, error) => {

  console.log('Executing rollback: ')
  console.log(' ')
  console.log('> Cleaning Monorepo....')
  const projectOutputPath = path.join(rc.workspace_path, rc.group_folder, rc.path);
  fs.rmdirSync(projectOutputPath, { recursive: true });

  console.log("> Cleaning Monorepo....\u001b[2K\u001b[0E> Cleaning Monorepo.... ✅")
  
  console.log('> Rollback nx....')

}