import React, { Component } from 'react';
import {  gql } from '@apollo/client';
import { Query } from '@apollo/react-components';
import { Region } from './RegionData';

import { css } from "@emotion/core";
import { ColourCodes } from './ColourCodes';
import ClipLoader from "react-spinners/ClipLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;


const CARBON_DATA_QUERY = gql`
query {
  RegionalCarbonData {
    data {
      to
      from
      regions {
        regionid
        dnoregion
        shortname
        intensity{
          index
        }
      }
    }
  }
}
  
`

export class CarbonData extends Component {
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

    render() {
        return (
            <React.Fragment>

                <h2 className="display-4 my-3">UK Carbon Data</h2>
                <p>Date: {this.date}</p>
                <ColourCodes/>
                <Query query={CARBON_DATA_QUERY}>
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
                            return <React.Fragment>
                                {
                                    data.RegionalCarbonData.data.map(data => (
                                        data.regions.map(region => (
                                            <Region region={region}/>
                                        ))
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

export default CarbonData