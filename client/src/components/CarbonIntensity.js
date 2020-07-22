import React from 'react';
import Moment from 'react-moment';
import classNames from 'classnames';

export default function CarbonItem({ 
    data : { from, to, intensity}
}) {
    return (
        <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-9">
            <h4>National Intensity index:{' '} 
                <span className={classNames({
                    'text-success': intensity.index === 'low',
                    'text-primary': intensity.index === 'moderate',
                    'text-danger': intensity.index === 'high'
                })}>
                {intensity.index} 
                </span>
            </h4>
          <p>Date: <Moment format="DD-MM-YYYY">{from}</Moment></p>
          </div>
          <div className="col-md-3">
              <button className="btn btn-secondary">Details</button>
          </div>
        </div>
      </div>
    )
}