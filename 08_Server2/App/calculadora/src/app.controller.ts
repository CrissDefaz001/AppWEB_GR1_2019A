import {Controller, Get, Headers, Req, Res, Response} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

 @Get('/suma')
    suma(@Headers() headers, @Response() res) {
        if (headers.numerouno != null && headers.numerodos != null) {
            const resultado = Number(headers.numerouno) + Number(headers.numerodos);
            return res.status(200).send('Suma: ' + resultado);
        }
        else {
            return res.status(400).send('Error en los parametros : 400' );
        }
    }

@Get('/resta')
    resta(@Headers() headers, @Response() res) {
        const resultado = Number(headers.numerouno) - Number(headers.numerodos);
        return res.status(200).send('Resta: ' + resultado);
    }


@Get('obtenerCookie')
obtenerCookie(@Res() res, @Req() req) {
    const cook = req.cookies;
    console.log(cook);
    res.cookie(
        'cookieInsegura1',
        new Date().toString()
    );
    res.cookie(
        'cookieInsegura2',
        2
    );
    res.cookie(
        'cookieSegura',
        19,
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
