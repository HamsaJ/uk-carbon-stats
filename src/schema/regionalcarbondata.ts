import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat } from "graphql";

const GenerationMix = new GraphQLObjectType({
  name: 'regional_generation_mix',
  fields: () => ({
      fuel: { type: GraphQLString },
      perc: { type: GraphQLFloat }
  })
})

const CarbonIntensity = new GraphQLObjectType({
    name: 'regional_intensity_data',
    fields: () => ({
        forecast: { type: GraphQLInt },
        index: { type: GraphQLString }        
    })
  })

const Region = new GraphQLObjectType({
  name: 'region',
  fields: () => ({
    regionid: { type: GraphQLInt },
    dnoregion: { type: GraphQLString },
    shortname: { type: GraphQLString },
    intensity: { type: CarbonIntensity },
    generationmix: { type: new GraphQLList(GenerationMix) }
  })
})

const RegionalCarbonData = new GraphQLObjectType({
    name: 'regional_carbon_intensity',
    fields: () => ({
      from: { type: GraphQLString },
      to: { type: GraphQLString },
      regions: { type: new GraphQLList(Region) }
    })
  })
  

// Launch Type
export const RegionalCarbonDataObject = new GraphQLObjectType({
    name: 'regional_carbon_data',
    fields: () => ({
      data: { type: new GraphQLList(RegionalCarbonData) }
    })
  });