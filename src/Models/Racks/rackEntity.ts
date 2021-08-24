
import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class Rack {
    @Field(_type => ID)
    id!: string;

    @Field()
    rackName!: string;

}