import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";

const CarbonIntensityNational = new GraphQLObjectType({
    name: 'carbon_intensity_stats',
    fields: () => ({
        max: { type: GraphQLInt },
        min: { type: GraphQLInt },
        average: { type: GraphQLInt },
        index: { type: GraphQLString }        
    })
  })

const CarbonDataNational = new GraphQLObjectType({
    name: 'carbon_intensity_national',
    fields: () => ({
      from: { type: GraphQLString },
      to: { type: GraphQLString },
      intensity: { type: CarbonIntensityNational }
    })
})



// cabon data national
export const CarbonDataNationalObject = new GraphQLObjectType({
    name: 'carbon_data_national',
    fields: () => ({
      data: { type: new GraphQLList(CarbonDataNational) }
    })
  });