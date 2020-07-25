import React, { Component, Fragment } from 'react';
import {  gql, useQuery } from '@apollo/client';
import { Query } from '@apollo/react-components';
import classNames from 'classnames';
import { CarbonIntensityDetails } from './CarbonIntensityDetails';

import { css } from "@emotion/core";
import { ColourCodes } from './ColourCodes';
import ClipLoader from "react-spinners/ClipLoader";
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

const CARBON_DATA_QUERY = gql`
query RegionalCarbonDataById($regionid:Int!){
  RegionalCarbonDataById(regionid:$regionid)
  {
    data {
      regionid
      dnoregion
      shortname
      data{
        intensity{
          index
          forecast
        }
        generationmix{
          perc
          fuel
        }
      }
    }
  }
}
  `

export class RegionDataDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          loading: true
        };
        var today = new Date();
        var dd = today.getDate();
        
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();

        this.date = dd+'-'+mm+'-'+yyyy;
      }
    render(){
        let {regionid} = this.props.match.params;
        regionid = parseInt(regionid);
        return (
          <React.Fragment>
              <Query query={CARBON_DATA_QUERY} variables={{ regionid }}>
                  {
                      ({ loading, error, data }) => {
                        if (loading) return (
                          <div className="sweet-loading">
                            <ClipLoader
                              css={override}
                              size={150}
                              // color={"#123abc"}
                              loading={this.state.loading}
                            />
                          </div>
                        );
                        if (error) console.log(error);
                        console.log("DATA =>>>>", data)
                        return <React.Fragment>
                            {
                                data.RegionalCarbonDataById.data.map(data => (
                                  <CarbonIntensityDetails data={data} date={this.date}/>
                                ))
                                  
                            }
                        </React.Fragment>
                      }
                  }
              </Query>
          </React.Fragment>
      )
    }
}