import { Rack } from './rackEntity';
import { Field, InputType } from "type-graphql";


@InputType()
export class AddRack implements Partial<Rack>{

    @Field()
    numberOfShelve!: number;
}

@InputType()
export class UpdateRack implements Partial<Rack>{

    @Field()
    numberOfShelve?: number;
}