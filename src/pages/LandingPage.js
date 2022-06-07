import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Landing/Hero';
import Product from 'parts/Landing/Product';
import About from 'parts/Landing/About';
import Client from 'parts/Landing/Client';
import Footer from 'parts/Footer';

import dummyData from 'json/dummyData.json';
export default class LandingPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Home';
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <Product data={dummyData.productsLanding} />
          <About />
          <Client data={dummyData.clients} />
        </div>
        <Footer />
      </>
    );
  }
}
