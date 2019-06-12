import {Module} from "@nestjs/common";
import {MusicService} from "./music.service";
import {MusicController} from "./music.controller";

@Module({
   imports:[], //Modulo
   controllers:[ MusicController ], // Controladores
   providers:[ MusicService ], // Servicios
   exports:[ MusicService ] // Servicios externos
})

export class musicModule {

}
