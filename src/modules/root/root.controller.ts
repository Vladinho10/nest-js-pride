import { Controller, Get } from '@nestjs/common';
import { RootService } from './root.service';

@Controller()
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get('/v1')
  async getHello(): Promise<any> {
    return this.rootService.getHello();
  }
}
