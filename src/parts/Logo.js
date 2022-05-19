import React from 'react';

import Button from 'elements/Button';
import LogoWeba from 'assets/images/logoWeba.svg';

export default function Logo() {
  return (
    <Button href="" type="link">
      <img src={LogoWeba} alt="logoWeba" className="img-fluid icon-logo" />
    </Button>
  );
}
