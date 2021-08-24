import { Product } from './productEntity';
import { Query, Resolver } from "type-graphql";

@Resolver(_of => Product)
export class ProductResolver {

    @Query(_returns => [Product], { nullable: true })
    getAllProducts(): Product[] {
        return [{
            id: "sjsjjs",
            productCategory: "sjsjuud",
            productDescription: "dkkdkd",
            productName: "dkdkfkd"
        }];
    }

}