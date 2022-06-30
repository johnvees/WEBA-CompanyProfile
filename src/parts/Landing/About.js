import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHeroAbout from 'assets/images/imageHeroAbout.png';

export default function About() {
  return (
    <section className="container pt-5 pb-5">
      <div className="row align-items-center">
        <Fade bottom>
          <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 ">
            <div>
              <img
                src={ImageHeroAbout}
                alt="Image Outer Factory"
                className="img-fluid"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5 pl-5">
            <h1 className="font-weight-bold mb-3 text-yellow">
              Bagaimana Kami Memulai Semua Ini...
            </h1>
            <p className="text-gray-500 w-75">
              Dimulai pada tahun 1975 dan kemudian menjadi perusahaan pada tahun
              1991. Dimulai dengan beberapa karyawan yang membuat sepatu dan
              sandal untuk market lokal, kemudian pada tahun 1995 WEBA Footwear
              mulai merambah ke bisnis ekspor pertama ke Jepang dan Korea
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
