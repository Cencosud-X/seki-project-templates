import core from './core';

/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import Streamer from '@team_seki/streamer';

import Handlers from './handlers';
import * as env from './config/env';
import { ApiModule } from './api/ApiModule';
import * as Config from './config/event-subscriber.plugin.json';

core.boot(async (): Promise<void> => {
  const app = await NestFactory.create(ApiModule);
  const globalPrefix = 'api';
  const port = 8081;
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);

  Logger.log(`${env.PRODUCT_NAME}: 🚀 Api is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log('');

  // load event handlers
  await Streamer.loadHandlers(Config, Handlers);
})
