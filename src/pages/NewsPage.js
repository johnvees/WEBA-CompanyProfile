import React, { Component } from 'react';
import { connect } from 'react-redux';

import Content from 'parts/News/Content';
import Header from 'parts/Header';
import Hero from 'parts/News/Hero';
import Footer from 'parts/Footer';

// import dummyData from 'json/dummyData.json';
import { fetchPage } from 'store/actions/page';

class NewsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | News';

    if (!this.props.page.newsPage) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/news-page`,
        'newsPage'
      );
    }
  }
  render() {
    const { page } = this.props;

    console.log(page);

    if (!page.hasOwnProperty('newsPage')) {
      return null;
    }

    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <Hero />
          <Content data={page.newsPage.news} />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(NewsPage);