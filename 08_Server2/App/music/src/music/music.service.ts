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
            genre:"Depp R&B"
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

    findPorId(id: number):Song {
        return this.bddMusic.find(
            (song) => {
                return song.id === id;
            }
        );
    }

    findByTitle(title: string):Song {
        return this.bddMusic.find(
            (song) => {
                return song.nombre.toUpperCase().includes(title.toUpperCase());
            }
        );
    }

    /*
    findByAlbum(album: string):Array<Song> {
        this.bddMusic.find(
            album =>{
            }
        );
        return this.album
    }
    */
}