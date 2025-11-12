import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { RpcCustomExceptionFilter } from './shared/infrastructure/filter/rcp-custom-exception.filter';
import { ApiResponseInterceptor } from './shared/infrastructure/interceptor/response.interceptor';

async function bootstrap() {
  const logger = new Logger('ApiGateway');

  const app = await NestFactory.create(AppModule);
  
  app.setGlobalPrefix('api');
  app.enableCors();

  app.useGlobalFilters(new RpcCustomExceptionFilter());
  app.useGlobalInterceptors(new ApiResponseInterceptor());
  
  await app.listen(process.env.PORT ?? 3000);
  logger.log(`API Gateway is running on: http://localhost:${process.env.PORT ?? 3000}`);
}
bootstrap();
