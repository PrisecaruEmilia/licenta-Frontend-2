import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        {/* menu & hero section */}
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        {/* this will be the slider with popular products */}
        <Categories />
        {/* banner */}
        {/* reviews */}
        {/* footer */}
      </Fragment>
    );
  }
}

export default HomePage;
