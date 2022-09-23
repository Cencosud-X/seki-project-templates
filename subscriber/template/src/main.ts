import core from './core';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import Streamer from '@team_seki/streamer';
import { ApiModule } from './api/ApiModule';
import * as Config from './config/eventsrc.plugin.json';
import Handlers from './handlers';
import secrets from './config/secrets';

core.boot(async (): Promise<void> => {
  const app = await NestFactory.create(ApiModule);
  const globalPrefix = 'api';
  const port = 8080;
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);

  Logger.log(`${secrets.PRODUCT_NAME}: 🚀 subscriber is running on: http://localhost:${port}/${globalPrefix}`);
  Logger.log('');

  // load event handlers
  await Streamer.loadHandlers(Config, Handlers);
})
