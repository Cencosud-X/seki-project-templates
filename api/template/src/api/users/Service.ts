import { Injectable } from '@nestjs/common';

@Injectable()
export class Service {
  async getAll(): Promise<string> {
    return "should return a list of users";
  }

  async getById(id: string): Promise<string> {
    return `should return a user with id ${id}`;
  }
}

export default Service;
