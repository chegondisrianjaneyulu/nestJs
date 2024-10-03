import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all.exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const {httpAdapter} = app.get(HttpAdapterHost)
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))
  app.enableCors()
  app.setGlobalPrefix('api/v1')
  await app.listen(3000);
  console.log('Server started listening port 3000')
}
bootstrap();
