import Footer from 'parts/Footer';
import Header from 'parts/Header';
import DetailsContent from 'parts/News/DetailsContent';
import React, { Component } from 'react';

export default class DetailsNewsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Details News';
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <DetailsContent />
        </div>
        <Footer />
      </>
    );
  }
}
