import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

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
          intensity {
            index
          }
          generationmix {
            fuel
            perc
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
          loading: true,
          regionid: parseInt(props.match.params)
        };
        var today = new Date();
        var dd = today.getDate();
        
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();

        this.date = dd+'-'+mm+'-'+yyyy;
      }
    render(){
        let regionid = this.state.regionid;


    }
}