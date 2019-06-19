import {Injectable} from "@nestjs/common";
import {Song} from "../../interfaces/song";

@Injectable()
export class MusicService {
    bddMusic=[];
    idMusic=1;
    album=[];

    constructor(){
        const song ={
            title:"Magnets",
            album:"Caracal",
            release:new Date(2015,1,11),
            artist:"Disclosure ft Lorde",
            trackNum:3,
            genre:"Electronic"
        };
        this.list(song);
        const song2 ={
            title:"Show me",
            album:"Urban Flora",
            release:new Date(2015,5,20),
            artist:"Alina & Galimatias",
            trackNum:2,
            genre:"R&B"
        };
        this.list(song2);
    }

    list(song){
        song.id=this.idMusic;
        this.idMusic++;
        this.bddMusic.push(song);
        return song;
    }

    createNew(newSong: Song): Song {
        newSong.id = this.idMusic;
        this.idMusic++;
        this.bddMusic.push(newSong);
        return newSong;
    }

    buscarPorId(id: number):Song {
        return this.bddMusic.find(
            (song) => {
                return song.id === id;
            }
        );
    }

    removeById(id:number):Song[]{
        const indice = this.bddMusic.findIndex(
            (song) => {
                return song.id === id
            }
        );
        this.bddMusic.splice(indice,1);
        return this.bddMusic;
    }

    updateSong(updatedSong: Song, id:number):Song[] {
        const indice = this.bddMusic.findIndex(
            (song) => {
                return song.id === id
            }
        );
        updatedSong.id = this.bddMusic[indice].id;
        this.bddMusic[indice] = updatedSong;
        return this.bddMusic;
    }
}