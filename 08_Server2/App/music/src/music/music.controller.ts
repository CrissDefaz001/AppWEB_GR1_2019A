import {Body, Controller, Get, Param, Post, Res} from "@nestjs/common";
import {MusicService} from "./music.service";
import {Song} from "../../interfaces/song";

@Controller('/music')
export class MusicController {
    constructor(private readonly _musicService: MusicService) {
    }

    // get, post: decoradores
    @Get('lista')
    listMusic(@Res() res) {
        const array = this._musicService.bddMusica;
        res.render('list-music', {arrayMusic: array})
    }

    @Get('crear')
    createSong(@Res() res) {
        res.render('create-song')
    }

    @Post('crear')
    createSongPost(@Body() song: Song, @Res() res) {
        song.trackNum = Number(song.trackNum);
        song.lanzamiento = new Date(song.lanzamiento);
        this._musicService.crearCancion(song);
        res.redirect('/music/lista');
    }

    @Get('editar/:idMusic')
    updateSong(@Res() response, @Param('idMusic') idMusic: string) {
        // El '+' le transforma en numero a un string
       // console.log(idMusic);
        const cancionEncontrada = this._musicService.buscarPorId(+idMusic);
        response.render('edit-song',{
            music: cancionEncontrada
        })
    }

    @Post('editar/:idMusic')
    updateSongVista(@Res() res, @Param('idMusic') idMusic: string, @Body() song: Song) {
        console.log(song);
        song.id =+idMusic;
        this._musicService.actualizarCancion(song, +idMusic);
        res.redirect('/music/lista');
    }

    @Post('eliminar')
    removeSongPost(@Res() res, @Body('id') id:string) {
        this._musicService.eliminarPorId(Number(id));
        res.redirect('/music/lista');
    }

    @Post('buscar')
    buscar(@Res() res, @Body('busqueda') busqueda:string) {
        const listaBusqueda: Song[] = this._musicService.buscarPorNombre(busqueda);
        console.log(listaBusqueda);
        console.log(busqueda);
        if (listaBusqueda != null) {
            res.render('list-music', {arrayMusic: listaBusqueda})
        } else {
            res.redirect('music/lista');
        }
    }
}
