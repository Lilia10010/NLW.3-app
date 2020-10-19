import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'
import Image from './Image'

@Entity('orphanages')
export default class Orphanage{
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

//como não existe uma coluna no bd chamada imagens ñ coloca o column
//colocar o relacionamento (p1 function que devolve ql é tipo de retorno ) 
//p2 dado uma img que recebi ql é campo dentro desta imagem q retorna o relacionamento inverso (no caso o orfanato em si)
    @OneToMany(() => Image, image => image.orphanage,{
        cascade: ['insert', 'update']
    })

    //ql é o nome da coluna que armazena o relacionametno de img e orfanato
    @JoinColumn({ name: 'orphanage_id' }) //se não colocar o o join por padrão no banco ficará assim: orphanageId
    images: Image[];
}