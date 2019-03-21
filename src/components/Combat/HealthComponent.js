import React, { Component } from 'react';

class HealthComponent extends Component {
    constructor(props) {
        super();

        this.state = {
            hitPoints: (props && props.hitPoints) ? props.hitPoints : 31,
            maxHitPoints: 41,
            healingSurges: 9,
            maxHealingSurges: 10,
            surgeValue: 10
        };
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
                    <button onClick={() => this.incrementHP()}>Heal 7 Hit Points</button>
                    <button onClick={() => this.decrementHP()}>Take 7 Damage</button>
                    <button onClick={() => this.incrementTempHP()}>Set Temp HP: 5</button>
                </div>
            </div>
        );
    }
}

export default HealthComponent;
