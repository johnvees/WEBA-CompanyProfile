import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageAbout from 'assets/images/imageAbout.jpg';

export default function Hero() {
  return (
    <section className="container pb-5 pt-5">
      <div className="row align-items-center">
        <Fade bottom>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pr-5">
            <h1 className="font-weight-bold mb-3 text-yellow">Kisah Kami</h1>
            <p className="text-light w-75">
              WEBA Footwear adalah hasil dari pengalaman bertahun-tahun dalam
              design, fitting, perkembangan & teknologi sepatu. Dikelola dengan
              staff-staff yang berpengalaman, penggunaan material yang terbaik,
              teknologi terbaru dan pengetesan produk yang rutin, kami
              menghasilkan “ Outstanding Performance & Innovative Products ”
            </p>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
            <div className="d-flex justify-content-center">
              <img
                src={ImageAbout}
                alt="Inside Factory"
                className="img-fluid"
                style={{
                  objectFit: 'cover',
                  height: 200,
                  width: 200,
                  borderRadius: 200 / 2,
                }}
              />
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
