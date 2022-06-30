import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/ImageHero.png';

export default function Hero() {
  return (
    <section className="container pt-5 pb-5">
      <div className="row align-items-center">
        <Fade bottom>
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 pr-5">
            <h1 className="font-weight-bold mb-3 text-yellow">
              WEBA FOOTWEAR
              <br />
              Rajapaksi Adya Perkasa Group
            </h1>
            <p className="text-gray-500 w-75">
              Berdiri di atas areal 5 hektar di Sidoarjo dan 4 hektar di Nganjuk, terdapat 1800 unit mesin jahit, 63 unit mesin potong. Dengan kapasitas 7.65 juta kapasitas produksi per tahun
            </p>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 ">
            <div>
              <img
                src={ImageHero}
                alt="Image Inside Factory"
                className="img-fluid"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
