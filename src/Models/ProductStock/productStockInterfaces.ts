import { Product } from './../Product/productEntity';
import { Field, InputType } from "type-graphql";
import { ProductStock } from "./productStockEntity";


@InputType()
export class AddProductStock implements Partial<ProductStock> {

    @Field()
    stockExpiryDate!: Date;

    @Field()
    stockNumber!: number;

    @Field()
    stockQuantity!: number;

    @Field()
    productID!: string;

    @Field()
    storageRack!: string;
}

@InputType()
export class UpdateProductStock implements Partial<ProductStock> {
    @Field()
    stockExpiryDate?: Date;

    @Field()
    stockNumber?: number;

    @Field()
    stockQuantity?: number;

    @Field()
    productId?: string;

    @Field()
    storageRack?: string;
}