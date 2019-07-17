import {Module} from "@nestjs/common";
import {InterpreteEntity} from "./interpreteEntity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [InterpreteEntity],'default'
        )
    ],  // Modulos
    controllers:[
    ], // Controladores
    providers:[
    ], // Servicios
    exports:[
    ] // Exportar Servicios
})
export class InterpreteModule {
}
