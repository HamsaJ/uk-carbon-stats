import React from 'react';

export const ColourCodes = () => {
    return (
        <div className="my-3">
            <p>
                <span className="px-3 mr-2 bg-success" /> = Low
            </p>
            <p>
                <span className="px-3 mr-2 bg-primary" /> = Moderate
            </p>
            <p>
                <span className="px-3 mr-2 bg-danger" /> = High
            </p>
        </div>
    )
}