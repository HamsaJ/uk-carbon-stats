import React from 'react';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Intensity } from './intensity';
import { GenerationMix } from './GenerationMix';

export const CarbonIntensityDetails = ({
    data: { regionid, dnoregion, shortname, data},
    date
}) => {
    console.log(regionid);
  
    return (
        <div key={regionid}>
          <h2 className="mb-3">Region: {shortname}</h2>
          <p>Date: {date}</p>
          <ul className="list-group">
          <h4 className="my-3">Carbon Intensity</h4>
              <React.Fragment> {
                data.map(data => (
                    <Intensity data={data} regionid={regionid}/>
                ))}
              </React.Fragment> 
          </ul>

          <h4 className="my-3">Generation Mix</h4>
          <React.Fragment>
              {
                data.map(data => (
                    data.generationmix.map(generationmix => (
                        <GenerationMix generationmix={generationmix} regionid={regionid}/>
                    ))
                ))}
            </React.Fragment> 
          <hr />
          <Link to="/" className="btn btn-secondary">
            Back
          </Link>
        </div>
      );
}