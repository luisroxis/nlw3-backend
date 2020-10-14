import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity('images')
export default class Orphanages{
@PrimaryGeneratedColumn('increment')
id: number;

@Column()
path: number;

}