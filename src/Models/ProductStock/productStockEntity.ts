import { Product } from './../Product/productEntity';
import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class ProductStock {
    @Field(_type => ID)
    id!: string;

    @Field()
    stockNumber!: string;

    @Field(_type => Date)
    stockCreateDate !: Date;

    @Field(_type => Date)
    stockExpiryDate!: Date;

    @Field()
    stockProduct!: string;

    @Field()
    storageshelve!: string;
}