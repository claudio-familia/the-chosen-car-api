import { Column, Entity, ObjectIdColumn, PrimaryColumn } from "typeorm";

@Entity()
export class CarType {
    @ObjectIdColumn()
    _id: string;

    @PrimaryColumn()
    id: string;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    capacity: number;
}