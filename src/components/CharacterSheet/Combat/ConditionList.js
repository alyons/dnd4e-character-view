import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Button, Image, Modal, OverlayTrigger, Tooltip, Container, Row, Col } from 'react-bootstrap';

import Conditions from '../../../util/Conditions';
import { addCondition } from '../../../actions/characterActions';

import './ConditionList.css';
import blinded from '../../../images/sight-disabled.svg';

const mapStateToProps = state => ({
    conditions:  state.character.conditions
});

const mapDispatchToProps = dispatch => ({
    addCondition: condition => dispatch(addCondition(condition))
});

const ConditionList = ({ conditions, addCondition }) => {
    const [show, setShow] = useState(false);
    const showModal = () => {
        setShow(true);
    };
    const hideModal = () => {
        setShow(false);
    };
    if (!conditions) conditions = [];

    let toRender = <p>You have no conditions.</p>;

    if (conditions.length > 0) {
        let conditionItems = [];
        for(let i = 0; i < conditions.length; i++) {
            let effectItems = [];
            for(let j = 0; j < conditions[i].effects.length; j++) {
                effectItems.push(
                    <li key={`conditions-${i}-${j}`}>{conditions[i].effects[j]}</li>
                );
            }
            conditionItems.push(
                <OverlayTrigger
                    key={`condition-${i}`}
                    placement="bottom"
                    overlay={
                        <Tooltip id={`tooltip-${conditions[i].name}`}>
                            <ul>{effectItems}</ul>
                        </Tooltip>
                    }>
                        <Image className="condition-icon" src={blinded} />
                </OverlayTrigger>
            );
        }
        toRender = conditionItems;
    }

    let conditionButtons = Conditions.map(condition => (
        <Button key={condition.name} onClick={() => { addCondition(condition); hideModal(); }}>{condition.name}</Button>
    ));

    return (
        <Container>
            <Row>
                <Col>
                {toRender}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={showModal}>
                        Add Condition
                    </Button>
                    <Modal show={show} onHide={hideModal}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add a Condition:</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            Please select a condition:
                            {conditionButtons}
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={hideModal}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};


export default connect(mapStateToProps, mapDispatchToProps)(ConditionList);
