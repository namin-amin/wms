import { Shelve } from './../Shelve/shelveEntity';
import { Rack } from './../Racks/rackEntity';
import { Product } from './../Product/productEntity';
import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
@ObjectType({ description: "Stocks of the Products" })
export class ProductStock extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    @Field(_type => ID)
    id!: string;

    @Column()
    @Field()
    stockNumber!: number;

    @Column()
    @Field()
    stockQuantity!: number;

    @CreateDateColumn()
    @Field(_type => Date)
    stockCreateDate !: Date;

    @Column(_type => Date)
    @Field(_type => Date)
    stockExpiryDate!: Date;

    @ManyToOne(_type => Product, product => product.stock)
    @Field(_type => Product)
    productID!: string;

    @ManyToOne(_type => Shelve, shelve => shelve.stocksInShelve)
    @Field({ nullable: true })
    storageShelve!: string;
}