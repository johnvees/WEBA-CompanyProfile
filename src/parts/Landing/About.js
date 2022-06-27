import React from 'react';
import Fade from 'react-reveal/Fade';

import ImageFactory_ from 'assets/images/imageFactory_.png';

export default function About() {
  return (
    <section className="container pt-5 pb-5">
      <div className="row align-items-center">
        <Fade bottom>
          <div className="col-sm-7 col-md-7 col-lg-7 col-xl-7 ">
            <div>
              <img
                src={ImageFactory_}
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
      </div>
    </section>
  );
}
