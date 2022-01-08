import { ProductStock } from './../ProductStock/productStockEntity';
import { AddProduct, UpdateProduct } from './productInterfaces';
import { Product } from './productEntity';
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";

@Resolver(_of => Product)
export class ProductResolver {

    //get all Products
    @Query(_returns => [Product], { nullable: true })
    async getAllProducts(): Promise<Product[]> {
        return Product.find();
    }

    //get one Product
    @Query(_returns => Product, { nullable: true })
    async getProduct(@Arg("productID") id: string): Promise<Product | undefined> {
        const isProduct = await Product.findOne({ id: id });

        if (isProduct !== undefined) {
            return isProduct;
        }
        else {
            return undefined;
        }
    }

    //create a Product
    @Mutation(_returns => Product)
    async createProduct(@Arg("newProduct") newProduct: AddProduct): Promise<Product> {
        return await Product.create({
            ...newProduct
        }).save();
    }

    //update a Product with id 
    @Mutation(_returns => Product)
    async updateProduct(
        @Arg("productID") id: string,
        @Arg("updateData") updateData: UpdateProduct
    ): Promise<Product | undefined> {

        const isProduct = await Product.findOne({ id: id });

        if (isProduct !== undefined) {
            return await (await Product.update({ id: id }, { ...updateData })).raw;
        }
        else {
            return undefined;
        }
    }

    //delete a Product
    @Mutation(_returns => Boolean)
    async deleteProduct(@Arg("productID") id: string): Promise<boolean> {

        const isProduct = await Product.findOne({ id: id });

        if (isProduct !== undefined) {
            await isProduct.remove();
            return true;
        }
        else {
            return false;
        }
    }

    //resolver to get stocks belonging to individual Product
    @FieldResolver()
    async stock(@Root() product: Product) {
        return ProductStock.find({
            where: {
                productID: product.id
            }
        });
    }
}