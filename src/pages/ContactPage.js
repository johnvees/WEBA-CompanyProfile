import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Contact/Hero';
import Content from 'parts/Contact/Content';
import Footer from 'parts/Footer';

export default class ContactPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Contact Us';
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <Content />
        </div>
        <Footer />
      </>
    );
  }
}
