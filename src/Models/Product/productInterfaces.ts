import { Product } from './productEntity';
import { Field, InputType } from "type-graphql";

@InputType()
export class AddProduct implements Partial<Product>{
    @Field()
    productName!: string;

    @Field()
    productCategory!: string;

    @Field()
    productDescription!: string;

    @Field()
    productPrice!: number;
}

@InputType()
export class UpdateProduct implements Partial<Product>{
    @Field()
    productName?: string;

    @Field()
    productCategory?: string;

    @Field()
    productDescription?: string;

    @Field()
    productPrice?: number;

}