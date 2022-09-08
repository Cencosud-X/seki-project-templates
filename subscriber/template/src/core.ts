process.env['PUBSUB_EMULATOR_HOST'] = 'localhost:8085';

import Streamer from '@team_seki/streamer';

import Constants from './constants';

export default {
    boot: async (callback: () => void): Promise<void> => {
      // boot streamer plugin
      await Streamer.boot([
        {
          type: 'PUBSUB',
          config: {
            // TODO: add support to load multiples queue configs
            google_credentials_path: './config/google-credentials.json'
          }
        },
      ], Constants.CONSUMER_ID);

      // boot others...

      callback();
    }
}