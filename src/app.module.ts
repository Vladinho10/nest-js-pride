import { Module } from '@nestjs/common';
import { RootModule, UsersModule } from './modules';

@Module({
  imports: [RootModule, UsersModule],
})
export class AppModule {}
