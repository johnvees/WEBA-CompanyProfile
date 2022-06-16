import Footer from 'parts/Footer';
import Header from 'parts/Header';
import DetailsContent from 'parts/Product/DetailsContent';
import FeaturedProduct from 'parts/Product/FeaturedProduct';
import React, { Component } from 'react';

import dummyData from 'json/dummyData.json';
import dummyDetails from 'json/itemDetails.json';
export default class DetailsProductPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <DetailsContent data={dummyDetails} />
          <FeaturedProduct data={dummyData.products} />
        </div>
        <Footer />
      </>
    );
  }
}
