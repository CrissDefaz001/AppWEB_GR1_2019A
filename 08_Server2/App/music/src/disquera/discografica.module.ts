import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm"
import {DiscograficaEntity} from "./discografica.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [DiscograficaEntity],'default'
        )
    ],  // Modulos
    controllers:[
    ], // Controladores
    providers:[
    ], // Servicios
    exports:[
    ] // Exportar Servicios
})
export class DiscograficaModule {
}
