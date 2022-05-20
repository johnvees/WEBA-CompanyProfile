import React from 'react';

import LogoWeba from 'assets/images/logoWeba.svg';

export default function Footer() {
  return (
    <section className="container pt-5">
      <div className="row pb-5">
        <div className="col-5">
          <img src={LogoWeba} alt="Logo Weba" className="img-fluid" />
        </div>
        <div className="col-7">
          <div
            className="m-2 w-100 rounded "
            style={{ backgroundColor: '#AAAAAA', height: 250 }}
          ></div>
        </div>
      </div>
      <div className="text-center p-2">Copyright 2022</div>
    </section>
  );
}
