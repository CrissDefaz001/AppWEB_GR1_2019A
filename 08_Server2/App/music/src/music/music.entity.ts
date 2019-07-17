import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, ManyToMany, JoinTable} from "typeorm";
import {DiscograficaEntity} from "../disquera/discografica.entity";
import {InterpreteEntity} from "../interprete/interpreteEntity";

@Entity('music')
export class MusicEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 25,
        name: 'nombre'
    })
    titulo: string;

    @Column({
        type: 'varchar',
        length: 40,
        name: 'artista'
    })
    artista: string;

    @Column({
        type: 'varchar',
        length: 25,
        name: 'album'
    })
    album: string;

    @Column({
        type: 'date',
        name: 'lanzamiento',
        default: '2019-07-08'
    })
    lanzamiento: Date;

    @Column({
        type: 'int',
        name: 'trackNum'
    })
    trackNum: number;

    @Column({
        type: 'varchar',
        length: 25,
        name: 'genero',
    })
    genero: 'R&B' | 'Electronic' | 'House' | 'Indie' | 'Tech House' | 'Instrumental' | 'Funk' | 'Trap';

    @ManyToOne(type=>DiscograficaEntity, discografica=>discografica.music)
    discografica: DiscograficaEntity;


    @ManyToMany(type=>InterpreteEntity)
    @JoinTable()
    interprete:InterpreteEntity[];

}
