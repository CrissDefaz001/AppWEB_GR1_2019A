import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";
import * as cookieParser from'cookie-parser';

async function bootstrap() {
  const app = await NestFactory
      .create(AppModule) as NestExpressApplication;

  // cookie
  app.use(cookieParser('myCookie'));
  app.setViewEngine("ejs");
  app.setBaseViewsDir(join(__dirname,'..','views'));
  await app.listen(3000);

}
bootstrap();
