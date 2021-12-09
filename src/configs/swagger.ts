import { DocumentBuilder } from '@nestjs/swagger';

export default new DocumentBuilder()
  .setTitle('Nest-js-pride')
  .setDescription('Nest-js-pride API docs')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();
