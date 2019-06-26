export interface Song {
    id: number;
    titulo: string;
    album:  string;
    lanzamiento:Date;
    artista: string;
    trackNum: number;
    genero:'R&B'|'Electronic'|'House'|'Indie'|'Tech House'|'Instrumental'|'Funk';
}