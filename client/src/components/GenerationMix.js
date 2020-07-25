import React from 'react';

export const GenerationMix = ({
    generationmix : { fuel, perc},
    regionid
}) => {
    return (
        <ul key={regionid} className="list-group">
            <li className="list-group-item">{fuel} : {perc}%</li>
        </ul>
    )
}