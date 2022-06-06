import React from 'react';

import Button from 'elements/Button';
import LogoWeba from 'assets/images/logoWeba.svg';

export default function Logo() {
  return (
    <Button href="/landing-page" type="link">
      <img src={LogoWeba} alt="logoWeba" className="img-fluid icon-logo" />
    </Button>
  );
}
