import { ObjectType, Field, ID } from "type-graphql";
import { BaseEntity, Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductStock } from "../ProductStock/productStockEntity";

@ObjectType({ description: "this is the Object that defines the Products" })
@Entity()
export class Product extends BaseEntity {

    @PrimaryGeneratedColumn("uuid")
    @Field(_type => ID)
    id!: string;

    @Column()
    @Field()
    productName!: string;

    @Column()
    @Field()
    productDescription!: string;

    @Column()
    @Field()
    productCategory!: string;

    @Column()
    @Field()
    productPrice!: number;

    @OneToMany(_type => ProductStock, stock => stock.productID)
    @Field(_type => [ProductStock], { nullable: true })
    stock!: ProductStock[];
}