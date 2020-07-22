import { GraphQLList, GraphQLString, GraphQLObjectType, GraphQLFloat } from "graphql";

const GenerationMix = new GraphQLObjectType({
    name: 'generation_mix',
    fields: () => ({
        fuel: { type: GraphQLString },
        perc: { type: GraphQLFloat }
    })
})

const GenerationMixData = new GraphQLObjectType({
    name: 'generation_mix_data',
    fields: () => ({
        to: { type: GraphQLString },
        from: { type: GraphQLString },
        generationmix: { type: GraphQLList(GenerationMix) }
    })
})

export const GenerationMixObject = new GraphQLObjectType({
    name: 'generation_mix_national',
    fields: () => ({
        data: { type: GenerationMixData }
    })
})