import Footer from 'parts/Footer'
import Header from 'parts/Header'
import DetailsContent from 'parts/Product/DetailsContent'
import React, { Component } from 'react'

export default class DetailsProductPage extends Component {
  render() {
    return (
        <>
        <Header {...this.props}></Header>
        <div className='landing-page-body'>
            <DetailsContent />
        </div>
        <Footer />
        </>
    )
  }
}
