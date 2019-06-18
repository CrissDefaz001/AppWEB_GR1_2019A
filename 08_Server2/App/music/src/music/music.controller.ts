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
    createSong(@Res() res) {
        res.render('create-song')
    }

    @Get('editar')
    removeSong(@Res() res) {
        res.render('edit-song')
    }

    @Post('crear')
    createSongPost(@Body() song: Song, @Res() res){
        song.trackNum = Number(song.trackNum);
        song.release = new Date(song.release);
        this._musicService.createNew(song);
        res.redirect('/music/lista');
    }

    @Post('eliminar')
    removeSongPost(@Res() res, @Body('id') id: number) {
        this._musicService.removeById(id);
        res.redirect('/music/lista');
    }

    @Post('editar')
    updateSong(@Res() res){
        res.redirect('/music/lista');
    }
}
