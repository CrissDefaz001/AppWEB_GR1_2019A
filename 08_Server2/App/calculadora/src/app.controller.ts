import { Controller, Get, Headers, Response } from '@nestjs/common';
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
}

