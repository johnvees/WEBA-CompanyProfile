import React from 'react';
import Fade from 'react-reveal/Fade';

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
              <div
                className=" w-100 rounded "
                style={{ backgroundColor: '#FCFCFC', height: 80 }}
              ></div>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className=" p-2 col-sm-3">
              <div
                className=" w-100 rounded "
                style={{ backgroundColor: '#FCFCFC', height: 80 }}
              ></div>
            </div>
          </Fade>
          <Fade bottom delay={600}>
            <div className=" p-2 col-sm-3">
              <div
                className=" w-100 rounded "
                style={{ backgroundColor: '#FCFCFC', height: 80 }}
              ></div>
            </div>
          </Fade>
          <Fade bottom delay={800}>
            <div className=" p-2 col-sm-3">
              <div
                className=" w-100 rounded "
                style={{ backgroundColor: '#FCFCFC', height: 80 }}
              ></div>
            </div>
          </Fade>
        </div>
      </Fade>
    </section>
  );
}
