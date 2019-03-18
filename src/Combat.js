import React, { Component } from 'react';

import './Combat.css'

class Combat extends Component {
    constructor() {
        super();

        this.state = {
            hitPoints: 33,
            maxHitPoints: 41,
            armorClass: 20,
            fortitude: 19,
            reflex: 13,
            will: 15,
            initiativeBonus: 5,
            speed: 6,
            tempHitPoints: 33
        };
    }

    incrementHP() {
        this.setState((prevState) => {
            return { hitPoints: Math.min(prevState.hitPoints + 1, prevState.maxHitPoints) }
        });
    }

    decrementHP() { 
        this.setState((prevState) => {
            return { hitPoints: Math.max(prevState.hitPoints - 1, 0) }
        });
    }

    incrementTempHP() {
        this.setState((prevState) => {
            return { tempHitPoints: prevState.tempHitPoints + 1 }
        });
    }

    decrementTempHP() {
        this.setState((prevState) => {
            return { tempHitPoints: Math.max(0, prevState.tempHitPoints - 1) }
        });
    }

    render() {
        const sqSize = 200;
        const strokeWidth = 30;
        const tempStroke = strokeWidth / 2;
        const radius = (sqSize - strokeWidth) / 2;
        const tempRadius = (sqSize - tempStroke) / 2;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const dashArray = radius * Math.PI * 2;
        const tempArray = tempRadius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * (this.state.hitPoints / this.state.maxHitPoints);
        const tempOffset = (this.state.tempHitPoints >= this.state.maxHitPoints) ? 0 : tempArray - tempArray * (this.state.tempHitPoints / this.state.maxHitPoints);
        let isBloodied = this.state.hitPoints <= this.state.maxHitPoints / 2;

        return (
            <div>
                <div>
                    <svg
                        width={sqSize}
                        height={sqSize}
                        viewBox={viewBox}>
                        <circle 
                            className="circle-background"
                            cx={sqSize / 2}
                            cy={sqSize / 2}
                            r={radius}
                            strokeWidth={`${strokeWidth}px`} />
                        <circle 
                            className={"circle-progress" + (isBloodied ? ' bloodied' : '')}
                            cx={sqSize / 2}
                            cy={sqSize / 2}
                            r={radius}
                            strokeWidth={`${strokeWidth}px`}
                            // transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2}`}
                            style={{
                                strokeDasharray: dashArray,
                                strokeDashoffset: dashOffset
                            }}/>
                        <circle
                            className="health-temp"
                            cx={sqSize / 2}
                            cy={sqSize / 2}
                            r={tempRadius}
                            strokeWidth={`${tempStroke}px`}
                            style={{
                                strokeDasharray: tempArray,
                                strokeDashoffset: tempOffset
                            }}/>
                        <text
                            className="circle-text"
                            x="50%"
                            y="50%"
                            dy=".3em"
                            textAnchor="middle">
                            {this.state.hitPoints}
                        </text>
                    </svg>
                    <p>Health Points</p>
                    <button onClick={() => this.incrementHP()}>HP +1</button>
                    <button onClick={() => this.decrementHP()}>HP -1</button>
                    <button onClick={() => this.incrementTempHP()}>THP +1</button>
                    <button onClick={() => this.decrementTempHP()}>THP -1</button>
                    <p>Armor Class</p>
                    <p>Fortitude</p>
                    <p>Reflex</p>
                    <p>Will</p>
                    <p>Initiative</p>
                    <p>Speed</p>
                </div>
                <div>
                    <h3>Conditions</h3>
                </div>
                <div>
                    <h3>Powers</h3>
                </div>
            </div>
        );
    }
}

export default Combat;
