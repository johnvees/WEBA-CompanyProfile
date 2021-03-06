import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageHero from 'assets/images/ImageHero.png';

export default function Hero() {
  return (
    <section className="container pb-5 pt-5">
      <div className="row align-items-center">
        <Fade bottom>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 pr-5">
            <h1 className="font-weight-bold mb-3 text-yellow">
              LOREM IPSUM
              <br />
              DOLOR SIT AMET
            </h1>
            <p className="text-gray-500 w-75">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad
            </p>
          </div>
        </Fade>
        <Fade bottom delay={200}>
          <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 ">
            <div className="d-flex justify-content-center">
              <img
                src={ImageHero}
                alt="Image Inside Factory"
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
