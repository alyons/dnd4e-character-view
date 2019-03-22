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
        return (
            <div className="health-component">
                
            </div>
        );
    }
}

export default HealthComponent;
