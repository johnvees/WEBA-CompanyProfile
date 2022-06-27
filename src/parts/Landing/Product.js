import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Product(props) {
  return (
    <section className="container pt-5 pb-5">
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">
          Our Products
        </h2>
        <div className="row align-items-center">
          {props.data.map((item, index) => {
            if (index === 0) {
              return (
                <Fade bottom delay={200}>
                  <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 p-2">
                    <Button type="link" href={`/details/products/${item._id}`}>
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                        alt="Shoe Product"
                        className="img-fluid rounded"
                        style={{ objectFit: 'cover' }}
                      />
                    </Button>
                  </div>
                </Fade>
              );
            }
          })}

          <div className="col-sm-6 d-flex flex-wrap p-0">
            {props.data.map((item, index) => {
              if (index >= 1 && index <= 4) {
                return (
                  <Fade bottom delay={200 * index}>
                    <div className="col-sm-6 p-2">
                      <Button
                        type="link"
                        href={`/details/products/${item._id}`}
                      >
                        <img
                          src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                          alt="Shoe Product"
                          className="img-fluid rounded w-100"
                          style={{ height: 180, objectFit: 'cover' }}
                        />
                      </Button>
                    </div>
                  </Fade>
                );
              }
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}
