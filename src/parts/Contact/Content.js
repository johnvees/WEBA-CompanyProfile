import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Content() {
  return (
    <section className="container pb-5 pt-5">
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">
          Get In Touch With Us
        </h2>
        <div className="row align-items-center">
          <Fade bottom delay={200}>
            <div className=" p-2 col-sm-3">
              <a href="https://wa.me/62895325754494">
                <div
                  className=" w-100 rounded text-center pt-2"
                  style={{ backgroundColor: '#FCFCFC', height: 80 }}
                >
                  <img
                    src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536445.png?token=exp=1656559406~hmac=0707345690092d412685ee5a3084d2eb"
                    alt=""
                    className="img-fluid"
                    style={{ height: 60, width: 60 }}
                  />
                </div>
              </a>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className=" p-2 col-sm-3">
              <a href="mailto:webainternational@yahoo.com">
                <div
                  className=" w-100 rounded text-center pt-2"
                  style={{ backgroundColor: '#FCFCFC', height: 80 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/646/646135.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: 60, width: 60 }}
                  />
                </div>
              </a>
            </div>
          </Fade>
          <Fade bottom delay={600}>
            <div className=" p-2 col-sm-3">
              <a href="tel:0895325754494">
                <div
                  className=" w-100 rounded text-center pt-3"
                  style={{ backgroundColor: '#FCFCFC', height: 80 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/483/483947.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: 50, width: 50 }}
                  />
                </div>
              </a>
            </div>
          </Fade>
          <Fade bottom delay={800}>
            <div className=" p-2 col-sm-3">
              <a href="https://www.instagram.com/explore/locations/1033351604/indonesia/sidoarjo-jawa-timur-indonesia/pt-weba-international/">
                <div
                  className=" w-100 rounded text-center pt-2"
                  style={{ backgroundColor: '#FCFCFC', height: 80 }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt=""
                    className="img-fluid"
                    style={{ height: 60, width: 60 }}
                  />
                </div>
              </a>
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
}
