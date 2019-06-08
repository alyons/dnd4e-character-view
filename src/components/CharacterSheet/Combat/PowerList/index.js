import React from 'react';
import { connect } from 'react-redux';
import { Accordion } from 'react-bootstrap';

import PowerItem from './PowerItem';

const mapStateToProps = state => ({
    powers: state.character.powers
});

const PowerList = ({ powers }) => {

    let powerItems = [];
    for(let i = 0; i < powers.length; i++) {
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
