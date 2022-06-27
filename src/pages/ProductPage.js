import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Content from 'parts/Product/Content';
import Title from 'parts/Product/Title';

// import dummyData from 'json/dummyData.json';
import { fetchPage } from 'store/actions/page';

class ProductPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Products';

    if (!this.props.page.productsPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/products-page`,
        'productsPage'
      );
    }
  }
  render() {
    const { page } = this.props;

    console.log(page);

    if (!page.hasOwnProperty('productsPage')) {
      return null;
    }

    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Title data={page.productsPage} />
          <Content data={page.productsPage.products} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(ProductPage);
