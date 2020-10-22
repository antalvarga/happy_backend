// Aula2 0:49:33
// Aula2 - 1:24:36
// Aula2 - 1:25:24 JoinColumn
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

// Aula2 - 1:24:51
import Orphanage from './Orphanage';

// Aula2 - 0:46:11 - Criar na pasta models
// Aula2 - 0:50:06 - @Entity()
@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    // Aula2 - 1:24:45
    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage;
}