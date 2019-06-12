import {Controller, Get, Res} from "@nestjs/common";
import {MusicService} from "./music.service";

@Controller('/music')
export class MusicController {
    constructor(private readonly _musicService: MusicService) { }

    // get, post: decoradores
    @Get('lista')
    listMusic(@Res() res) {
        const array = this._musicService.bddMusic;
        res.render('list-music', {arrayMusic: array})
    }
}
