import Streamer from "@team_seki/streamer";
import Constants from "./constants";
import * as Queue from "./queue";

export default {
  boot: async (callback: () => void): Promise<void> => {
    // boot queue
    await Queue.boot();
    // boot streamer plugin
    await Streamer.boot(
      [
        {
          type: "PUBSUB",
          config: {
            google_credentials_path: "./config/google_credentials_default.json",
          },
        },
      ],
      Constants.CONSUMER_ID
    );

    callback();
  },
};
