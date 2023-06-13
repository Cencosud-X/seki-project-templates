import * as yargs from 'yargs';
import prettyjson from 'prettyjson';
import * as packageJSON from './../../package.json';

interface IArgs {
  pretty?: boolean;
}

export class Command implements yargs.CommandModule<unknown, IArgs> {
  command = 'info';
  describe = 'Get hardware info';
  aliases = [];

  builder = (args: yargs.Argv) => {
    return args
      .option('pretty', {
        alias: 'p',
        type: 'boolean',
        description: 'formatting JSON in a coloured YAML-style',
        default: true,
      })
      .help();
  };

  handler = async (args: yargs.Arguments<IArgs>) => {
    const dataToOutput = {
      version: packageJSON.version,
    };

    console.log(
      args.pretty ? prettyjson.render(dataToOutput, {}) : JSON.stringify(dataToOutput, null, 2)
    );
  };
}

export default new Command();
