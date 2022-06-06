import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import ContactPage from 'pages/ContactPage';
import NewsPage from 'pages/NewsPage';
import DetailsNewsPage from 'pages/DetailsNewsPage';
import AboutPage from 'pages/AboutPage';
import ProductPage from 'pages/ProductPage';
import DetailsProductPage from 'pages/DetailsProductPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/details/products" component={DetailsProductPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/details/news" component={DetailsNewsPage} />
        <Route path="/contact" component={ContactPage} />
      </Router>
    </div>
  );
}

export default App;
