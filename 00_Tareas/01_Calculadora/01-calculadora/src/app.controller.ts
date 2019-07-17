import {Body, Controller, Delete, Get, Headers, Param, Patch, Post, Put, Query, Req, Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Put('suma/:numerodos')
    suma(@Headers() headers, @Param('numerodos') parametroRuta, @Res() res){
      const resultado = Number(headers.numerouno) + Number(parametroRuta);
      return res.status(201).send('Suma: ' + resultado);

  }

  @Post('resta')
    resta(@Req() req, @Query() parametroConsulta,  @Res() res){
      const cookie1 = req.cookies;
      res.cookie('numero1', 6);
      console.log("Cookie valor: ",req.cookies);
      const resultado = Number(req.cookies) - Number(parametroConsulta.numero2);
      res.send(cookie1);
      return res.status(403).send('Resta: ' + resultado);
  }

  @Patch('producto')
    multiplicar(@Headers() headers, @Body('numero2') numero2:string, @Res() res){
    const resultado = Number(headers.numero1) - Number(numero2);
    return res.status(502).send('Producto: ' + resultado);
  }

  @Delete('division')
    dividir(@Headers() headers, @Res() res){
    const resultado = Number(headers.numero1) / Number(headers.numero2);
    return res.status(400).send('Division: ' + resultado);
  }

  @Get('obtenerCookie')
  obtenerCookie(@Res() res, @Req() req) {
    const cook = req.cookies;
    console.log(cook);
    res.cookie(
        'numero1',
        2
    );
    res.send(cook)
  }

}

