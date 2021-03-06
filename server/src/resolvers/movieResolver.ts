import { Movie } from '../entity/Movie'
import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from 'type-graphql';

@InputType()
class MovieInput {
  @Field()
  title?: string

  @Field(() => Int)
  minutes?: number
}

@Resolver()
export class MovieResolver {
  @Mutation(() => Movie)
  async createMovie ( @Arg('options', () => MovieInput ) options: MovieInput) {
    const movie = Movie.create(options).save()
    return movie
  }

  @Query(() => [ Movie ])
  async movies() {
    return Movie.find()
  }
}