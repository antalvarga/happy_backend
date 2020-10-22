// Aula2 0:49:33
// Aula2 - 1:22:49
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

// Aula2 - 1:23:01
import Image from './Image';

// Aula2 - 0:46:11 - Criar na pasta models
// Aula2 - 0:50:06 - @Entity()
@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;
    
    @Column()
    longitude: number;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    // Aula2 1:22:47 coluna de relacionamento
    // Aula2 - 1:25:52 , {}
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[]
 
}