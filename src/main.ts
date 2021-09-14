import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   // prefix: 'v1',
  // });
  await app.listen(4000);
}
bootstrap();
