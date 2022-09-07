import { Module } from '@nestjs/common';

import { HealthModule } from './health/Module';


@Module({
  imports: [HealthModule],
})
export class ApiModule {}
