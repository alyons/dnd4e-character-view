import React from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';

import PowerItem from './PowerItem';

const mapStateToProps = state => ({
    powers: state.character.powers
});

const powerUsage = [
    "At-Will",
    "Encounter",
    "Encounter (Special)",
    "Daily"
];

function comparePowers(first, second) {
    let firstPowerUsage = powerUsage.indexOf(first.powerUsage);
    let secondPowerUsage = powerUsage.indexOf(second.powerUsage);

    return firstPowerUsage - secondPowerUsage;
}

const PowerList = ({ powers }) => {
    let sortedPowers = powers.sort(comparePowers);

    let powerItems = [];
    for(let i = 0; i < sortedPowers.length; i++) {
        let power = powers[i];
        powerItems.push(
            <PowerItem
                power={power}
                eventKey={i}
                key={power.name.replace(/\s/g, '')} />
        );
    }

    return (
        <Accordion>
            {powerItems}
        </Accordion>
    );
};

export default connect(mapStateToProps)(PowerList);
