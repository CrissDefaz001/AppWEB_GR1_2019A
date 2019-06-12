import {Injectable} from "@nestjs/common";

@Injectable()
export class MusicService {
    bddMusic=[];
    idMusic=1;

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
    //    this.id++;
        this.bddMusic.push(song);
        return song;
    }
}