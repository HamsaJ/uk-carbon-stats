import React from 'react';
import classNames from 'classnames';

export const Region = ({
    region: { regionid, dnoregion, shortname, intensity }
}) => {
    return (
        <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9">
            <h4>Region: {shortname}</h4>
              <h4>Intensity index:{' '} 
                <span className={classNames({
                    'text-success': intensity.index === 'low' || intensity.index === 'very low',
                    'text-primary': intensity.index === 'moderate',
                    'text-danger': intensity.index === 'high' || intensity.index === 'very high'
                })}>
                {intensity.index} 
                </span>
            </h4>
          </div>
          <div className="col-md-3">
              <button className="btn btn-secondary">Details</button>
          </div>
        </div>
      </div>
    )
}