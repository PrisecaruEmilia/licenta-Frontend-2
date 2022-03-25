import React, { Component, Fragment } from 'react';
import FeaturedProducts from '../components/home/FeaturedProducts';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import NewArrival from '../components/home/NewArrival';
import Populars from '../components/home/Populars';
import HomeTop from '../components/home/HomeTop';

export class HomePage extends Component {
  render() {
    return (
      <Fragment>
        {/* menu & hero section */}
        <HomeTop />
        <FeaturedProducts />
        <NewArrival />
        <Collection />
        <Populars />
        <Categories />
        {/* banner */}
        {/* reviews */}
        {/* footer */}
      </Fragment>
    );
  }
}

export default HomePage;
