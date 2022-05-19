import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Landing/Hero';
import Product from 'parts/Landing/Product';
import About from 'parts/Landing/About';
import Client from 'parts/Landing/Client';
export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <Product />
          <About />
          <Client />
        </div>
      </>
    );
  }
}
