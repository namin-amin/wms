import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { ProductStock } from './productStockEntity';
import { AddProductStock, UpdateProductStock } from "./productStockInterfaces";

@Resolver(_of => ProductStock)
export class ProductStockResolver {

    //get all ProductsStock
    @Query(_returns => [ProductStock], { nullable: true })
    async getAllProductStocks(): Promise<ProductStock[]> {
        return ProductStock.find();
    }

    //get one ProductStock
    @Query(_returns => ProductStock, { nullable: true })
    async getProductStock(@Arg("ProductStockID") id: string): Promise<ProductStock | undefined> {
        const isProductStock = await ProductStock.findOne({ id: id });

        if (isProductStock !== undefined) {
            return isProductStock;
        }
        else {
            return undefined;
        }
    }

    //create a ProductStock
    @Mutation(_returns => ProductStock)
    async createProductStock(@Arg("newProductStock") newProductStock: AddProductStock): Promise<ProductStock> {
        return await ProductStock.create({
            ...newProductStock
        }).save();
    }

    //update a ProductStock with id 
    @Mutation(_returns => ProductStock)
    async updateProductStock(
        @Arg("ProductStockID") id: string,
        @Arg("updateData") updateData: UpdateProductStock
    ): Promise<ProductStock | undefined> {

        const isProductStock = await ProductStock.findOne({ id: id });

        if (isProductStock !== undefined) {
            return await (await ProductStock.update({ id: id }, { ...updateData })).raw;
        }
        else {
            return undefined;
        }
    }

    //delete a ProductStock
    @Mutation(_returns => Boolean)
    async deleteProductStock(@Arg("ProductStockID") id: string): Promise<boolean> {

        const isProductStock = await ProductStock.findOne({ id: id });

        if (isProductStock !== undefined) {
            await isProductStock.remove();
            return true;
        }
        else {
            return false;
        }
    }

}