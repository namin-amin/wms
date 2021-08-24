import { Shelve } from './../Shelve/shelveEntity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity, JoinColumn } from 'typeorm';

import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export class Rack extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    @Field(_type => ID)
    id!: string;

    @Column()
    @Field()
    rackName!: string;

    @Column()
    @Field()
    numberOfShelve!: number;


    @OneToMany(_type => Shelve, shelve => shelve.rackName)
    @Field(_type => [Shelve], { nullable: true })
    shelve!: Shelve[];
}