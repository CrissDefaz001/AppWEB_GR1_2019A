import {Entity, PrimaryGeneratedColumn, Column,OneToMany} from 'typeorm';
import {MusicEntity} from "../music/music.entity";



@Entity('discografica')
export class DiscograficaEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 25,
        name: 'nombre',
    })
    nombre: string;

    @OneToMany(type=>MusicEntity,music=>music.discografica)
    music: MusicEntity;

}
