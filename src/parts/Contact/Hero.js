import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/ImageHero.png';

export default function Hero() {
  return (
    <section className="container pt-5">
      <div className="row align-items-center">
        <Fade bottom>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pr-5">
            <h1 className="font-weight-bold mb-3 text-yellow">Hubungi Kami</h1>
            <p className="text-gray-500 w-75">
              Kami siap untuk berdiskusi tentang kebutuhan Anda di bidang sepatu dan sandal
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
