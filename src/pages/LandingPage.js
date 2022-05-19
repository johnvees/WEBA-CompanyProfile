import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Landing/Hero';
import Product from 'parts/Landing/Product';
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className='landing-page-body'>
          <Hero />
          <Product />
        </div>
      </>
    );
  }
}
