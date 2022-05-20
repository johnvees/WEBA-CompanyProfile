import Content from 'parts/News/Content';
import Header from 'parts/Header';
import Hero from 'parts/News/Hero';
import React, { Component } from 'react';
import Footer from 'parts/Footer';

export default class NewsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Contact';
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
