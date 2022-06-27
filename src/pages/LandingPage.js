import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from 'parts/Header';
import Hero from 'parts/Landing/Hero';
import Product from 'parts/Landing/Product';
import About from 'parts/Landing/About';
import Client from 'parts/Landing/Client';
import Footer from 'parts/Footer';

// import dummyData from 'json/dummyData.json';
import { fetchPage } from 'store/actions/page';

class LandingPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Home';

    if (!this.props.page.landingPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/landing-page`,
        'landingPage'
      );
    }
  }

  render() {
    const { page } = this.props;

    console.log(page);

    if (!page.hasOwnProperty('landingPage')) {
      return null;
    }

    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <Product data={page.landingPage.productsLanding} />
          <About />
          <Client data={page.landingPage.clientsLanding} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(LandingPage);
