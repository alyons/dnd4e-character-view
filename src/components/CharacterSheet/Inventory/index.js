import React from 'react';
import { connect } from 'react-redux';
import { Accordion, Container } from 'react-bootstrap';

import InventoryItem from './InventoryItem';

const mapStateToProps = state => ({
    inventory: state.character.inventory
});

const Inventory = ({ inventory }) => {
    let items = [];
    if (!!inventory) {
        for(let i = 0; i < inventory.length; i++) {
            let item = inventory[i];
            items.push(
                <InventoryItem
                    item={item}
                    eventKey={i}
                    key={item.name.replace(/\s/g, '')}/>
            );
        }
    }

    return (
        <Container>
            <Accordion>
                {items}
            </Accordion>
        </Container>
    );
};

export default connect(mapStateToProps)(Inventory);
