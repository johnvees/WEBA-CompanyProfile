import Hero from 'parts/About/Hero';
import History from 'parts/About/History';
import Leader from 'parts/About/Leader';
import Vision from 'parts/About/Vision';
import Footer from 'parts/Footer';
import Header from 'parts/Header';
import React, { Component } from 'react';

import dummyData from 'json/dummyData.json';
export default class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | About Us';
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <History data={dummyData.history} />
          <Vision />
          <Leader data={dummyData.leader} />
        </div>
        <Footer />
      </>
    );
  }
}
