import { Rack } from './../Racks/rackEntity';
import { JoinColumn, ManyToOne } from 'typeorm';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, BaseEntity } from 'typeorm';
import { ProductStock } from './../ProductStock/productStockEntity';

import { ObjectType, Field, ID } from 'type-graphql';

@Entity()
@ObjectType()
export class Shelve extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    @Field(_type => ID)
    id!: string;

    @Column()
    @Field()
    shelveName!: string;

    @ManyToOne(_type => Rack, rack => rack.rackName)
    @Field()
    rackName!: string;

    @OneToMany(_type => ProductStock, stock => stock.storageShelve)
    @Field(_type => [ProductStock], { nullable: true })
    stocksInShelve!: ProductStock[];
}