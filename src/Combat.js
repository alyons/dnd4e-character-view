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
            tempHitPoints: 0
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

    render() {
        const sqSize = 200;
        const strokeWidth = 10;
        const radius = (sqSize - strokeWidth) / 2;
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * (this.state.hitPoints / this.state.maxHitPoints);
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
                    </svg>
                    <p>Health Points</p>
                    <button onClick={() => this.incrementHP()}>HP +1</button>
                    <button onClick={() => this.decrementHP()}>HP -1</button>
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
