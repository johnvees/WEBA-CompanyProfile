import React, { Component } from 'react';
import { connect } from 'react-redux';


import Hero from 'parts/About/Hero';
import History from 'parts/About/History';
import Leader from 'parts/About/Leader';
import Vision from 'parts/About/Vision';
import Footer from 'parts/Footer';
import Header from 'parts/Header';

// import dummyData from 'json/dummyData.json';
import { fetchPage } from 'store/actions/page';

class AboutPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | About Us';

    if (!this.props.page.aboutPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/about-page`,
        'aboutPage'
      );
    }
  }
  render() {
    const { page } = this.props;

    console.log(page);

    if (!page.hasOwnProperty('aboutPage')) {
      return null;
    }

    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <History data={page.aboutPage.history} />
          <Vision />
          <Leader data={page.aboutPage.history} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(AboutPage);
