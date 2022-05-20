import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Contact/Hero';

export default class ContactPage extends Component {
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
        </div>
      </>
    );
  }
}
