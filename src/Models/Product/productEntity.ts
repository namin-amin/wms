import { ObjectType, Field, ID } from "type-graphql";
import { ProductStock } from "../ProductStock/productStockEntity";

@ObjectType({ description: "this is the Object that defines the Products" })
export class Product {
    @Field(_type => ID)
    id!: string;

    @Field()
    productName!: string;

    @Field()
    productDescription!: string;

    @Field()
    productCategory!: string;

    @Field(_type => [ProductStock], { nullable: true })
    stock?: ProductStock[];
}