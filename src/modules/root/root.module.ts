import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';

@Module({
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
