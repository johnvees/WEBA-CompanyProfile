import Content from 'parts/News/Content';
import Header from 'parts/Header';
import Hero from 'parts/News/Hero';
import React, { Component } from 'react';
import Footer from 'parts/Footer';

import dummyData from 'json/dummyData.json';
export default class NewsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | News';
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <Content data={dummyData.news} />
        </div>
        <Footer />
      </>
    );
  }
}
