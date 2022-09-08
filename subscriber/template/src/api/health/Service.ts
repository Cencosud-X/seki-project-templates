import { Injectable } from '@nestjs/common';

@Injectable()
export class Service {
  async ping(): Promise<string> {
    return "pong";
  }

  async health(): Promise<{ [key: string]: string }> {
    return {
      status: "UP"
    }
  }
}

export default Service;
