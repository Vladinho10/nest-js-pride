import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/v1')
  getHello(): string {
    console.log({ a: 1 });
    return this.appService.getHello();
  }
}
