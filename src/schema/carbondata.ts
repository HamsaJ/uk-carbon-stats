import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from "graphql";




const CarbonIntensity = new GraphQLObjectType({
    name: 'carbon_intensity_data',
    fields: () => ({
        forecast: { type: GraphQLInt },
        actual: { type: GraphQLInt },
        index: { type: GraphQLString }        
    })
  })

const CarbonData = new GraphQLObjectType({
    name: 'carbon_intensity',
    fields: () => ({
      from: { type: GraphQLString },
      to: { type: GraphQLString },
      intensity: { type: CarbonIntensity }
    })
  })
  

// Launch Type
export const CarbonDataObject = new GraphQLObjectType({
    name: 'carbon_data',
    fields: () => ({
      data: { type: new GraphQLList(CarbonData) }
    })
  });