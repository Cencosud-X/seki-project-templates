import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Service } from './Service';

@Controller("users")
export class DefaultController {
  constructor(private readonly service: Service) { }

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(":id")
  getById(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.getById(id);
  }
}

export default DefaultController;