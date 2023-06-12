#!/usr/bin/env node
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import commands from './commands';


// Put manual commands , because when we package as binary ,
// "folders discovery" dont work's
interface ICommands {
  [key: string]:
  | {
    [key: string]: yargs.CommandModule;
  }
  | yargs.CommandModule;
}

const instance = yargs(hideBin(process.argv));

// Add each sub command's
Object.keys(commands).forEach((commandKey: string) => {
  const command = (commands as unknown as ICommands)[commandKey];
  if (command.handler) {
    // Means Command Module
    instance.command(command as yargs.CommandModule);
  } else {
    // Means Object with Command Modules
    instance.command(
      `${commandKey.toLocaleLowerCase()} <subcommand>`,
      `${commandKey} commands`,
      (yargs) => {
        Object.values(command).forEach((subcommand) => {
          yargs.command(subcommand);
        });
      }
    );
  }
});

instance
  .recommendCommands()
  .demandCommand()
  .help()
  .showHelpOnFail(false)
  .argv;
