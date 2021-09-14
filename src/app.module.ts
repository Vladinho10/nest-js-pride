import { Module } from '@nestjs/common';
import { RootModule, UsersModule } from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'vlad',
      // password: 'root',
      database: 'pride',
      entities: [`**/*.entity$.ts`],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RootModule,
    UsersModule,
  ],
})
export class AppModule {}
