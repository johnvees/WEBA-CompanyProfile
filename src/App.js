import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import ContactPage from 'pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/contact" component={ContactPage} />
      </Router>
    </div>
  );
}

export default App;
