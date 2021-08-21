import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  await app.listen(4000);
}
bootstrap();
