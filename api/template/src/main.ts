/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/ApiModule';
import * as env from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(ApiModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(env.API_SERVER_PORT);
  
  Logger.log(`🚀 Api is running on: http://localhost:${env.server_port}/${globalPrefix}`);
}

bootstrap();
