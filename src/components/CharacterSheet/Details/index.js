import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, Container, Row } from 'react-bootstrap';

import FeatList from './FeatList';

const mapStateToProps = state => ({
    details: state.character.details
});

const Details = ({ details }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        {details.name}
                    </div>
                </Col>
            </Row>
            <Row>
                {/* <Col><FeatList /></Col> */}
            </Row>
            <Row>
                <Col><FeatList /></Col>
            </Row>
        </Container>
    );
};

export default connect(mapStateToProps)(Details);
