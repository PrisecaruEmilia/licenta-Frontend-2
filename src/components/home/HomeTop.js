import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
export class HomeTop extends Component {
  render() {
    return (
      <Fragment>
        <Container className="overflow-hidden">
          <Row>
            <Col lg={3} md={12} sm={12}>
              <MegaMenu />
            </Col>
            <Col lg={9} md={12} sm={12}>
              <HomeSlider />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default HomeTop;
