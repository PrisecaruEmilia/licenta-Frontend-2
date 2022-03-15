import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import '../../assets/css/pages/home.css';
import shoe_3 from '../../assets/images/shoe.png';
export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="features-products">
          <Row className="features-products-row">
            <div className="text-center text-white mb-55">
              <h2>FEATURED PRODUCT</h2>
              <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>
          </Row>
          <Row className="features-products-row">
            <Col
              className="p-3 first-feature-product-col"
              key={1}
              xl={6}
              lg={6}
              md={12}
              sm={12}
              xs={12}
            >
              <div className="first-feature-product-div"></div>
            </Col>
            <Col>
              <Row className="features-products-row">
                <Col
                  className="p-3"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box card">
                    <p className="shoe-category m-3">DAY-TO-DAY</p>
                    <img
                      className="center"
                      src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000206983022_1__1.jpg"
                      alt="SNEAKERSI"
                    ></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Teniși LEVI'S - Brilliant White
                      </p>
                      <p className="product-price-on-card">
                        Price : 179,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="p-3"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box card">
                    <p className="shoe-category m-3">DINNER-PARTY</p>
                    <img
                      className="center"
                      src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208668965_01_pa.jpg"
                      alt="SNEAKERSI"
                    ></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Pantofi închiși HUGO - Ruston
                      </p>
                      <p className="product-price-on-card">
                        Price : 898,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="p-3"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box card">
                    <p className="shoe-category m-3">STREET</p>
                    <img className="center" src={shoe_3} alt="SNEAKERSI"></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Pantofi NIKE - Air Jordan
                      </p>
                      <p className="product-price-on-card">
                        Price : 898,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col
                  className="p-3"
                  key={1}
                  xl={6}
                  lg={6}
                  md={6}
                  sm={12}
                  xs={12}
                >
                  <Card className="image-box card">
                    <p className="shoe-category m-3">DAY-TO-DAY</p>
                    <img
                      className="center"
                      src="https://www.epantofi.ro/media/catalog/product/cache/image/650x650/0/0/0000208918152_01_rz_1.jpg"
                      alt="SNEAKERSI"
                    ></img>
                    <Card.Body>
                      <p className="product-name-on-card">
                        Sneakers PUMA - Rs-X³ Puma
                      </p>
                      <p className="product-price-on-card">
                        Price : 348,00 lei
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default FeaturedProducts;
