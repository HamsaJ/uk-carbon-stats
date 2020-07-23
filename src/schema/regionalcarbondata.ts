import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLFloat } from "graphql";
import { GenerationMixObject } from "./generationmix";

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

const RegionIntensity = new GraphQLObjectType({
  name: 'region_intensity',
  fields: () => ({
    intensity: { type: CarbonIntensity },
    generationmix: { type: GraphQLList(GenerationMix)},
    to: { type: GraphQLString },
    from: { type: GraphQLString }
  })
})
  
const Region = new GraphQLObjectType({
  name: 'region',
  fields: () => ({
    regionid: { type: GraphQLInt },
    dnoregion: { type: GraphQLString },
    shortname: { type: GraphQLString },
    data: { type: GraphQLList(RegionIntensity) }
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

export const RegionalCarbonDataObjectSingle = new GraphQLObjectType({
  name: 'regional_carbon_data_single',
  fields: () => ({
    data: { type: new GraphQLList(Region) }
  })
});