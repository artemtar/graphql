import { Query, Resolver } from "type-graphql";

@Resolver()
export class mainResolver {
    @Query(() => String)
    main() {
        return 'hi'
    }
}