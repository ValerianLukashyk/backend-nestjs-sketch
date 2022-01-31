import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS Backend')
    .setDescription('RESTApi Documentation')
    .setVersion('1.0.0')
    .addTag('backend restapi nestjs')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  const port = process.env.PORT || 5000;
  await app.listen(port);
  console.log(`The server was started on ${port} port`);
}
bootstrap();
