export interface Song {
    id?: number;
    title: string;
    album:  string;
    release:Date;
    artist: string;
    trackNum: number;
    genre:'R&B'|'Electronic'|'House'|'Indie'|'Tech House'|'Instrumental';
}