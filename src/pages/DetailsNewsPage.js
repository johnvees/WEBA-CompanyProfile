import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from 'parts/Footer';
import Header from 'parts/Header';
import DetailsContent from 'parts/News/DetailsContent';

import dummyData from 'json/newsDetails.json';
import { fetchPage } from 'store/actions/page';

class DetailsNewsPage extends Component {
  componentDidMount() {
    window.scroll(0, 0);
    document.title = 'WEBA | Details News';

    if (!this.props.page[this.props.match.params.id]) {
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-news-page/${this.props.match.params.id}`,
        this.props.match.params.id
      );
    }
  }

  render() {
    const { page, match } = this.props;

    console.log(page);

    if (!page[match.params.id]) {
      return null;
    }

    if (!page.hasOwnProperty('newsPage')) {
      return null;
    }

    const breadcrumb = [
      { pageTitle: 'News', pageHref: '/news' },
      { pageTitle: 'News Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <div className="landing-page-body">
          <DetailsContent
            data={page[match.params.id]}
            breadcrumb={breadcrumb}
          />
        </div>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { fetchPage })(DetailsNewsPage);
