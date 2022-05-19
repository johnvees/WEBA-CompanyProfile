import React from 'react';

import Button from 'elements/Button';
import Logo from 'parts/Logo';

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : '';
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Logo />
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item${getNavLinkClass('/')}`}>
                <Button className="nav-link" type="link" href="/">
                  Home
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/products')}`}>
                <Button className="nav-link" type="link" href="/products">
                  Products
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/about')}`}>
                <Button className="nav-link" type="link" href="/about">
                  About
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/news')}`}>
                <Button className="nav-link" type="link" href="/news">
                  News
                </Button>
              </li>
              <li className={`nav-item${getNavLinkClass('/contact')}`}>
                <Button className="nav-link" type="link" href="/contact">
                  Contact
                </Button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
