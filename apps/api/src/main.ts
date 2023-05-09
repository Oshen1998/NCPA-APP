import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from "@nestjs/config";
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({transform: true}))

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log("Listening at http://localhost:" + port + "/" + globalPrefix);
  Logger.log(`
   Running in ${config.get('environment')} mode
  `);
}

bootstrap();
