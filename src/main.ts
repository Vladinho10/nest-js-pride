import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { port, swagger } from './configs';
import { SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   // prefix: 'v1',
  // });

  const document = SwaggerModule.createDocument(app, swagger);
  SwaggerModule.setup('/swagger-docs', app, document);
  await app.listen(port, () => console.log(`app listen ${port} port`));
}
bootstrap();
