import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { ApiModule } from './api/ApiModule';
import secrets from './config/secrets';

 async function bootstrap() {
   const app = await NestFactory.create(ApiModule);
   const port = {{data.settings.port}};
 
   await app.listen(port);
 
   Logger.log(`${secrets.PRODUCT_NAME}: 🚀 Api is running on: http://localhost:${port}`);
 }
 
 bootstrap();
 