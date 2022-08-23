import { Module } from '@nestjs/common';

import { HealthModule } from './health/Module';
import { UsersModule } from './users/Module';


@Module({
  imports: [HealthModule, UsersModule],
})
export class ApiModule {}
