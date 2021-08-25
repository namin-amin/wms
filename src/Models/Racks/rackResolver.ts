import { Shelve } from './../Shelve/shelveEntity';
import { AddRack, UpdateRack } from './rackinterface';
import { Rack } from './rackEntity';
import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";


@Resolver(_of => Rack)
export class RackResolver {

    //get all Rack details
    @Query(_returns => [Rack])
    async getRacks(): Promise<Rack[]> {
        return await Rack.find();
    }

    //get one Rack with id 
    @Query(_returns => Rack, { nullable: true })
    async getRack(@Arg("rackId") id: string): Promise<Rack | undefined> {
        const isRack = await Rack.findOne({ id: id });

        if (isRack !== isRack) {
            return isRack;
        } else {
            undefined;
        }
    }

    /**
     * this creates a Rack
     * @param addData 
     * @returns Rack data type
     * @todo need to implement a function to create a Name for rack
     * @todo need to create function that can create Names for shelves and create them
     */
    @Mutation(_returns => Rack, { nullable: true })
    async createRack(@Arg("rackData") addData: AddRack): Promise<Rack | undefined> {
        return;
    }

    /**
     * 
     * @param updateData 
     * @returns Rack datatype
     * @todo same as createRack()
     */
    @Mutation(_returns => Rack)
    async updateRack(@Arg("updateRackData") updateData: UpdateRack): Promise<Rack | undefined> {
        return;
    }

    /**
     * 
     * @param id 
     * @returns whether the rack is deleted
     * @todo need to implement deleting of all dependencies
     */
    @Mutation(_returns => Boolean)
    async deleteRack(@Arg("rackID") id: string): Promise<boolean> {
        const isRack = await Rack.findOne({ id: id });

        if (isRack) {
            isRack.remove();
            return true;
        } else {
            return false;
        }
    }

    @FieldResolver()
    async shelve(@Root() rack: Rack) {
        return await Shelve.find({ where: { rackName: rack.id } });
    }
}