import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'parts/Footer';
import Header from 'parts/Header';
import DetailsContent from 'parts/Product/DetailsContent';
import FeaturedProduct from 'parts/Product/FeaturedProduct';

import dummyData from 'json/dummyData.json';
import dummyDetails from 'json/itemDetails.json';

import { fetchPage } from 'store/actions/page';

class DetailsProductPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Details Product';

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-products-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }

    if (!this.props.page.productsPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/products-page`,
        'productsPage'
      );
    }
  }

  render() {
    const { page, match } = this.props;

    console.log(page);

    if (!page[match.params.id]) {
      return null;
    }

    if (!page.hasOwnProperty('productsPage')) {
      return null;
    }

    const breadcrumb = [
      { pageTitle: 'Products', pageHref: '/products' },
      { pageTitle: 'Product Details', pageHref: '' },
    ];

    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <DetailsContent
            data={page[match.params.id]}
            breadcrumb={breadcrumb}
          />
          <FeaturedProduct data={page.productsPage.products} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(DetailsProductPage);
