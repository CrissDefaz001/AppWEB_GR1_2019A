import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {musicModule} from "./music/music.module";
import {MusicEntity} from "./music/music.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {InterpreteEntity} from "./interprete/interpreteEntity";
import {DiscograficaEntity} from "./disquera/discografica.entity";
import {DiscograficaModule} from "./disquera/discografica.module";

@Module({
    imports: [musicModule,
        TypeOrmModule.forRoot({
            name: "default", // varias conexiones a BD
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "criss",
            password: "criss",
            database: "musica",
            entities: [MusicEntity, DiscograficaEntity, InterpreteEntity], // Todas las entidades
            synchronize: true, // Los cambios en entidades se reflejan a la BD
            dropSchema: true /// Borrar base y crear por cambios, No siempre debe estar activo
        }),
    DiscograficaModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

}
