import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RootModule } from './root/root.module';

@Module({
  imports: [RootModule, UsersModule],
})
export class AppModule {}
