import React from 'react';
import { connect } from 'react-redux';

import './Combat.css'

const mapStateToProps = state => ({
    hitPoints: state.vitality.hitPoints,
    maxHitPoints: state.vitality.maxHitPoints,
    tempHitPoints: state.vitality.tempHitPoints
});

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

const generateHealthCircle = (sqSize, hitPoints, maxHitPoints) => {
    const viewBox = `0 0 ${sqSize} ${sqSize}`;

    return (
        <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}>
            {generateCircle('health-current', sqSize, 30, hitPoints, maxHitPoints)}
            <text
                className="health-text"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {hitPoints}
            </text>
        </svg>
    );
};

const Health = ({ hitPoints, maxHitPoints }) => {
    return (
        <div>
            {generateHealthCircle(200, hitPoints, maxHitPoints)}
        </div>
    );
};

export default connect(mapStateToProps)(Health);
