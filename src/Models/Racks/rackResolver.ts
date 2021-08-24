import { Rack } from './rackEntity';
import { Query, Resolver } from "type-graphql";


@Resolver(_of => Rack)
export class rackResolver {

    @Query(_returns => [Rack])
    getRacks(): Rack[] {
        return [{ id: "jsjsusus", rackName: "A1" }, { id: "jsj", rackName: "A2" }];
    }
}