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
  const port = 8081;
  app.setGlobalPrefix(globalPrefix);
  await app.listen(port);
  
  Logger.log(`${env.PRODUCT_NAME}: 🚀 Api is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
