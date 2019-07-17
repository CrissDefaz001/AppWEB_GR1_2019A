import {Injectable} from "@nestjs/common";
import {Song} from "../../interfaces/song";
import {MusicEntity} from "./music.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class MusicService {
    bddMusica = [];
    idMusic = 1;


    /*
    constructor(){
        const cancion1 ={
            titulo:"Magnets", //.split(' ')[0]
            album:"Caracal",
            lanzamiento:new Date(2015,1,4),
            artista:"Disclosure ft Lorde",
            trackNum:3,
            genero:"Electronic"
        };
        this.listarCanciones(cancion1);
        const cancion2 ={
            titulo:"In my mind",
            album:"Unknown",
            lanzamiento:new Date(2019,5,17),
            artista:"Jealous Friend & Olivia Addams",
            trackNum:5,
            genero:"R&B"
        };
        this.listarCanciones(cancion2);
        const cancion3 ={
            titulo:"Never Be Like You ft Kai",
            album:"Skin",
            lanzamiento:new Date(2017,11,19),
            artista:"Flume",
            trackNum:1,
            genero:"Electronic"
        };
        this.listarCanciones(cancion3);
        const cancion4 ={
            titulo:"On A Sunday",
            album:"Unknown",
            lanzamiento:new Date(2019,2,11),
            artista:"Ester Peony",
            trackNum:1,
            genero:"Indie"
        };
        this.listarCanciones(cancion4);
        const cancion5 ={
            titulo:"Modestep",
            album:" Evolution Theory ",
            lanzamiento:new Date(2015,6,21),
            artista:"Another Day",
            trackNum:1,
            genero:"Indie"
        };
        this.listarCanciones(cancion5);

    }

    listarCanciones(cancion){
        cancion.id=this.idMusic;
        this.idMusic++;
        this.bddMusica.push(cancion);
        return cancion;
    }

    crearCancion(newSong: Song): Song {
        newSong.id = this.idMusic;
        this.idMusic++;
        this.bddMusica.push(newSong);
        return newSong;
    }

    buscarPorId(id: number):Song {
        return this.bddMusica.find(
            (song) => {
                return song.id === id;
            }
        );
    }

    buscarPorNombre(titulo: string):Song[] {
        if(titulo!=='' && titulo!==null){
            return this.bddMusica.filter(
                (cancion) => {
                    return cancion.titulo.toUpperCase().includes(titulo.toUpperCase());
                }
            );
        }else{
            return this.bddMusica;
        }
    }

    eliminarPorId(id:number):Song[]{
        const indice = this.bddMusica.findIndex(
            (song) => {
                return song.id === id
            }
        );
        console.log("cancion a borrar:");
        console.log(indice);
        this.bddMusica.splice(indice,1);
        return this.bddMusica;
    }

    actualizarCancion(cancionActualizada: Song, id:number):Song[] {
        const indice = this.bddMusica.findIndex(
            (song) => {
                return song.id === id
            }
        );
        cancionActualizada.id = this.bddMusica[indice].id;
        this.bddMusica[indice] = cancionActualizada;
        return this.bddMusica;
    }
    */

    constructor(@InjectRepository(MusicEntity)
                private readonly _MusicRepository: Repository<MusicEntity>,) {
        const music: any = {
            titulo: "Magnets",
            album: "Caracal",
            lanzamiento: new Date(2015, 1, 4),
            artista: "Disclosure ft Lorde",
            trackNum: 3,
            genero: "Electronic"
        };
        const objetoEntidad = this._MusicRepository.create(music);
        this._MusicRepository
            .save(objetoEntidad)
            .then(
                (datos) => {
                    console.log('cancion creada')
                }
            )
            .catch(
                (error)=>{
                    console.log('error')
                }
            );
        this.crear(music)
    }

    buscar(parametrosBusqueda?):Promise<MusicEntity[]>{
        return this._MusicRepository.find(parametrosBusqueda)
    }

    crear(nuevaCancion: Song):Promise<Song> {
        const objetoEntidad=this._MusicRepository
            .create(nuevaCancion)
        return this._MusicRepository.save(objetoEntidad)
    }


}

