const axios = require('axios');

import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLSchema } from "graphql";
import { CarbonDataNationalObject } from "./carbondatanational";
import { CarbonDataObject } from "./carbondata";
import { GenerationMixObject } from "./generationmix";
import { RegionalCarbonDataObject, RegionalCarbonDataObjectSingle } from "./regionalcarbondata";



// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    CarbonData: {
      type: CarbonDataObject,
      resolve() {
        return axios
          .get('https://api.carbonintensity.org.uk/intensity')
          .then((res:any) => {
              console.log(res.data);
              return res.data
          });
      }
    },
    CarbonDataDate: {
      type: CarbonDataNationalObject,
      args: {
        date: { type: GraphQLString }
      },
      resolve(parent, args) {
        return axios
          .get(`https://api.carbonintensity.org.uk/intensity/${args.date}`)
          .then(res => res.data);
      }
    },
    CarbonIntensityStats: {
        type: CarbonDataNationalObject,
        args: {
          from: { type: GraphQLString },
          to: { type: GraphQLString }
        },
        resolve(parent, args) {
          return axios
            .get(`https://api.carbonintensity.org.uk/intensity/stats/${args.from}/${args.to}`)
            .then((res:any) => {
                console.log(res.data);
                return res.data
            });
        }
      },
      GenerationMixStats: {
          type: GenerationMixObject,
          resolve(parent, args) {
            return axios
              .get("https://api.carbonintensity.org.uk/generation")
              .then((res:any) => {
                  return res.data
              });
          }
        },
      RegionalCarbonData: {
          type: RegionalCarbonDataObject,
          resolve(parent, args) {
            return axios
              .get("https://api.carbonintensity.org.uk/regional")
              .then((res:any) => {
                  //console.log(res.data)
                  return res.data
              });
            }
      },
      RegionalCarbonDataById: {
        type: RegionalCarbonDataObjectSingle,
        args: {
          regionid: { type: GraphQLInt },
        },
        resolve(parent, args) {
          return axios
            .get(`https://api.carbonintensity.org.uk/regional/regionid/${args.regionid}`)
            .then((res:any) => {
                //console.log(res.data)
                return res.data
            });
          }
    }
  }
});

export const graphQlSchema = new GraphQLSchema({
  query: RootQuery
});

