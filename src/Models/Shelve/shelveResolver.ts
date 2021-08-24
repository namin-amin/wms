import { ProductStock } from './../ProductStock/productStockEntity';
import { FieldResolver, Query, Root } from 'type-graphql';
import { Shelve } from './shelveEntity';
import { Resolver } from "type-graphql";

@Resolver(_of => Shelve)
export class ShelveResolver {

    @Query(_type => [Shelve], { nullable: true })
    async getAllShelves(): Promise<Shelve[]> {
        return await Shelve.find();
    }

    @FieldResolver()
    async stocksInShelve(@Root() shelve: Shelve) {
        return ProductStock.find({ where: { storageShelve: shelve.id } });
    }
}