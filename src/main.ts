import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { AllExceptionsFilter } from './filters/all-exception.filter';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { BaseResponseInterceptor } from './interceptors/baseResponse.interceptor';

async function bootstrap() {
  dotenv.config();
  const port = process.env.PORT;
  const app = await NestFactory.create(AppModule);
  const httpAdapter = app.get(HttpAdapterHost);
  const configService = app.get(ConfigService);

  app.enableCors();
  app.useGlobalInterceptors(new BaseResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter, configService));
  app.useGlobalFilters(new HttpExceptionFilter(configService));

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      enableDebugMessages: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(port || 3000);
  Logger.log(`App success started on port: ${port || 3000}`);
}
bootstrap();
