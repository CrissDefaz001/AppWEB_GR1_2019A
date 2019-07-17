import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('interprete')
export class InterpreteEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 25,
        name: 'nombre',
    })
    nombre: String;

}
