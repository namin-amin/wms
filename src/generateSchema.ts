import { ProductResolver } from './Models/Product/productResolver';
import { rackResolver } from './Models/Racks/rackResolver';
import { buildSchema } from 'type-graphql';

export const generateSchema = async () => {
    return await buildSchema({
        resolvers: [rackResolver, ProductResolver]
    });
};