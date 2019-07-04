import {Controller, Get, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('obtenerCookie')
  obtenerCookie(@Res() res, @Req() req) {
    const cook = req.cookies;
    console.log(cook);
    res.cookie(
      'micookie',
          new Date().toString()
    );
    res.cookie(
        'micookie2',
        2
    );
    res.cookie(
        'segura',
        25,
        {
          signed:true
        }
    );
    const cookiesegura = req.signedCookies.segura;
    console.log(req.signedCookies);

    if(cookiesegura){
      console.log("Cookie segura", cookiesegura)
    }else{
      console.log("Cookie no es segura")
    }
    res.send(cook)
  }

}
