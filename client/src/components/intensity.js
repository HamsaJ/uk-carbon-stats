import React from 'react';
import classNames from 'classnames';

export const Intensity = ({
    data : { intensity },
    regionid
}) => {
    return (
        <ul key={regionid} className="list-group">
            <li className="list-group-item">Index: 
                <span className={classNames({
                    'text-success': intensity.index === 'low' || intensity.index === 'very low',
                    'text-primary': intensity.index === 'moderate',
                    'text-danger': intensity.index === 'high' || intensity.index === 'very high'
                })}>
                {intensity.index} 
                </span></li>
            <li>Forecast: {intensity.forecast}</li>
        </ul>
    )
}