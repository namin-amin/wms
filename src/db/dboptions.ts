import { Shelve } from './../Models/Shelve/shelveEntity';
import { Rack } from './../Models/Racks/rackEntity';
import { ProductStock } from './../Models/ProductStock/productStockEntity';
import { Product } from './../Models/Product/productEntity';
import { ConnectionOptions } from "typeorm";


export const options: ConnectionOptions = {
    type: "sqlite",
    database: __dirname + '/data.sqlite',
    entities: [Product, ProductStock, Rack, Shelve],
    logging: true,
    synchronize: true
};