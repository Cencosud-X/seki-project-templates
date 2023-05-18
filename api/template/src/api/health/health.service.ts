import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  async ping(): Promise<string> {
    return "pong";
  }

  async health(): Promise<{ [key: string]: string }> {
    return {
      status: "UP"
    }
  }
}

export default HealthService;
