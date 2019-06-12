import {Controller, Get, Res} from "@nestjs/common";
import {MusicService} from "./music.service";

@Controller()
export class MusicController {
    constructor(
        private readonly _musicService: MusicService) { }

    @Get()
    listMusic(@Res() res) {
        const arraySongs = this._musicService.bddMusic;
        res.render('music/list-music', {arraySongs: arraySongs})
    }
}
