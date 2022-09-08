import { Controller, Get } from '@nestjs/common';
import { Service } from './Service';

@Controller()
export class DefaultController {
  constructor(private readonly service: Service) { }

  @Get("health")
  health() {
    return this.service.health();
  }

  @Get("ping")
  ping() {
    return this.service.ping();
  }
}

export default DefaultController;