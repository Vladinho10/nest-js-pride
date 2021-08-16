import { Controller, Get } from '@nestjs/common';
import { RootService } from './root.service';

@Controller()
export class RootController {
  constructor(private readonly rootService: RootService) {}

  @Get('/v1')
  getHello(): string {
    console.log({ a: 1 });
    return this.rootService.getHello();
  }
}
