import React, { Component, Fragment } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import shoe_4 from '../../assets/images/shoe_4.png';
import shoe_3 from '../../assets/images/shoe_3.png';

export class NewArrival extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <Fragment>
        <Container className="new-arival-products">
          <Row className="new-arival-products-row">
            <div className="text-white mb-55">
              <h1>New Arrivals</h1>
            </div>
          </Row>
          <Row className="new-arival-products-container">
            <Slider
              ref={(c) => (this.slider = c)}
              {...settings}
              className="new-arival-products-slider"
            >
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_3} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card-even">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_4} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_3} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card-even">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_4} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_3} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card-even">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_4} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_3} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
              <div className="p-3">
                {' '}
                <Card className="image-box card new-arrivals-card-even">
                  <div className="top-card">
                    <p className="card-shoe-category">DAY-TO-DAY</p>
                    <p className="card-tag">NEW</p>
                  </div>

                  <img className="center" src={shoe_4} alt="SNEAKERSI"></img>
                  <Card.Body>
                    <p className="product-name-on-card">
                      Teni??i LEVI'S - Brilliant White
                    </p>
                    <p className="product-price-on-card">Price : 179,00 lei</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
          <Row>
            <div className="text-center">
              <h2>
                <a
                  className="btn btn-sm ml-2 new-arrival-btn-site"
                  onClick={this.previous}
                >
                  <i className="fa fa-angle-left"></i>
                </a>
                <a
                  className="btn btn-sm ml-2 new-arrival-btn-site"
                  onClick={this.next}
                >
                  <i className="fa fa-angle-right"></i>
                </a>
              </h2>
            </div>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default NewArrival;
