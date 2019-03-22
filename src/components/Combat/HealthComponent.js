import React from 'react';

import './Combat.css'

const generateCircle = (className, sqSize, strokeWidth, value, max) => {
    const radius = (sqSize - strokeWidth) / 2;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * (value / max);
    return (
        <circle 
            className={className}
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2}`}
            style={{
                strokeDasharray: dashArray,
                strokeDashoffset: dashOffset
            }}/>
    );
};

const generateHealthCircle = (sqSize) => {
    const viewBox = `0 0 ${sqSize} ${sqSize}`;

    return (
        <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}>
            {generateCircle('health-current', sqSize, 30, 33, 41)}
            <text
                className="health-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                31
            </text>
        </svg>
    );
};

const Health = ({}) => {
    return (
        <div>
            {generateHealthCircle(200)}
        </div>
    );
};

export default Health;
