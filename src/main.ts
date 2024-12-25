import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

async function start() {
  try {
    const PORT = process.env.PORT || 3000;
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('NestJS Web Api')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NodeJS, NestJS, Postgres, sequalize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());

    app.enableCors({
      origin: 'https://web-api-bekzod.netlify.app/', // Frontend URL
      methods: 'GET,POST,PUT,DELETE',
      credentials: true, // Cookie'larni jo'natish uchun kerak bo'lsa
      allowedHeaders: 'Content-Type,Authorization',
    });

    await app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
  } catch (error) {
    throw new Error(error);
  }
}
start();
