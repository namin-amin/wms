import { ProductStockResolver } from './Models/ProductStock/productStockResolver';
import { ProductResolver } from './Models/Product/productResolver';
import { rackResolver } from './Models/Racks/rackResolver';
import { buildSchema } from 'type-graphql';
/**
 * 
 * @returns Schema that can be imported to apolloserver
 */
export const generateSchema = async () => {
    return await buildSchema({
        resolvers: [rackResolver, ProductResolver, ProductStockResolver]
    });
};