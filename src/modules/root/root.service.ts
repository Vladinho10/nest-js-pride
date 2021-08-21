import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
  getHello(): any {
    return { greeting: 'Hello World!' };
  }
}
