import React from 'react';

import ImageHero_ from 'assets/images/imageHero_.png';

export default function Hero() {
  return (
    <section className="container pt-5 pb-5">
      <div className="row align-items-center">
        <div className="col-sm-5 col-md-5 col-lg-5 col-xl-5">
          <h1 className="font-weight-bold mb-3 text-yellow">
            LOREM IPSUM
            <br />
            DOLOR SIT AMET
          </h1>
          <p className="text-gray-500 w-75">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad
          </p>
        </div>
        <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7">
          <div>
            <img
              src={ImageHero_}
              alt="Image Inside Factory"
              className="img-fluid"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
