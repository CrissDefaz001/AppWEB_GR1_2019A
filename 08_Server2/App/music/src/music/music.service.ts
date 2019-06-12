import {Injectable} from "@nestjs/common";

@Injectable()
export class MusicService {
    bddMusic=[];
    idMusic=1;

    constructor(){
        const song ={
            title:"Show me",
            album:"Urban Flora",
            release:new Date(2015,5,20),
            artist:"Alina & Galimatias",
            trackNum:2,
            genre:"Depp R&B"
        };
        this.list(song);
    }

    list(song){
        song.id=this.idMusic;
        this.bddMusic.push(song);
        return song;
    }
}