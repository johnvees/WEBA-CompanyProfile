import Footer from 'parts/Footer';
import Header from 'parts/Header';
import Content from 'parts/Product/Content';
import React, { Component } from 'react';

export default class ProductPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Products';
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className='landing-page-body'>
            <Content />
        </div>
        <Footer />
      </>
    );
  }
}