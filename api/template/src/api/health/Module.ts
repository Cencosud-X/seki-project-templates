import { Module } from '@nestjs/common';

import Service from './Service';
import Controller from './Controller';


@Module({
  imports: [],
  controllers: [Controller],
  providers: [Service]
})
export class HealthModule {}
