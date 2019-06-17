import {Body, Controller, Get, Post, Res} from "@nestjs/common";
import {MusicService} from "./music.service";
import {Song} from "../../interfaces/song";

@Controller('/music')
export class MusicController {
    constructor(private readonly _musicService: MusicService) { }

    // get, post: decoradores
    @Get('lista')
    listMusic(@Res() res) {
        const array = this._musicService.bddMusic;
        res.render('list-music', {arrayMusic: array})
    }

    @Get('crear')
    crearLibro(@Res() res) {
        res.render('music/create-song')
    }

    @Post('crear')
    crearLibroPost(@Body() song: Song, @Res() res){
        song.trackNum = Number(song.trackNum);
        song.release = new Date(song.release);
        this._musicService.createNew(song);
        res.redirect('/music/lista');
    }
}
