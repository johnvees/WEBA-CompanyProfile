import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Client(props) {
  return (
    <section className="container pt-5 pb-5">
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">
          Our Clients
        </h2>
        <div className="row align-items-center">
          {props.data.map((item, index) => {
            return (
              <Fade bottom delay={200 * index}>
                <div className="col-sm-3 p-2">
                  <div
                    className="w-100 rounded"
                    style={{ backgroundColor: '#FCFCFC', height: 120 }}
                  >
                    <div className="text-center p-3">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                        alt="Logo"
                        style={{ height: 63, width: 63, objectFit: 'cover' }}
                        className="img-fluid"
                      />
                      <p className="m-0 font-weight-bold">{item.nama}</p>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
