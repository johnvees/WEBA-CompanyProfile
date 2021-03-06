import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Content(props) {
  return (
    <section className="container pb-5 pt-5">
      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index === 0) {
            return (
              <Fade bottom delay={200}>
                <div className="col-sm-7 p-2">
                  <Button type="link" href={`/details/products/${item._id}`}>
                    <div className="border border-primary rounded-lg p-3">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                        alt="Shoe Product"
                        className="img-fluid rounded-lg w-100 mb-3"
                        style={{ objectFit: 'cover', height: 300 }}
                      />
                      <h4 className="text-light font-weight-bold">
                        {item.nama}
                      </h4>
                      <p className="text-gray-500 mb-0">{item.client.nama}</p>
                    </div>
                  </Button>
                </div>
              </Fade>
            );
          }
        })}
        <div className="col-sm-5">
          <div className="row p-2">
            {props.data.map((item, index) => {
              if (index === 1) {
                return (
                  <Fade bottom delay={400}>
                    <div className="col-sm-12 border border-primary rounded-lg p-2 mb-2">
                      <Button
                        type="link"
                        href={`/details/products/${item._id}`}
                      >
                        <div className="d-flex">
                          <div className="col-6 p-0">
                            <img
                              src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                              alt="Shoe Product"
                              className="img-fluid rounded-lg w-100"
                              style={{ objectFit: 'cover', height: 180 }}
                            />
                          </div>
                          <div className="col-6 mt-4">
                            <h5 className="font-weight-bold text-light">
                              {item.nama}
                            </h5>
                            <p className="text-gray-500 mb-0">
                              {item.client.nama}
                            </p>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </Fade>
                );
              } else if (index === 2) {
                return (
                  <Fade bottom delay={600}>
                    <div className="col-sm-12 border border-primary rounded-lg p-2 mt-2">
                      <Button
                        type="link"
                        href={`/details/products/${item._id}`}
                      >
                        <div className="d-flex">
                          <div className="col-6 p-0">
                            <img
                              src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                              alt="Shoe Product"
                              className="img-fluid rounded-lg w-100"
                              style={{ objectFit: 'cover', height: 180 }}
                            />
                          </div>
                          <div className="col-6 mt-4">
                            <h5 className="font-weight-bold text-light">
                              {item.nama}
                            </h5>
                            <p className="text-gray-500 mb-0">
                              {item.client.nama}
                            </p>
                          </div>
                        </div>
                      </Button>
                    </div>
                  </Fade>
                );
              }
            })}
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index >= 3) {
            return (
              <Fade bottom delay={200 * index}>
                <div className="col-sm-3 p-2">
                  <Button type="link" href={`/details/products/${item._id}`}>
                    <div className="border border-primary rounded-lg p-2">
                      <img
                        src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                        alt="Shoe Product"
                        className="img-fluid rounded-lg mb-2 w-100"
                        style={{ objectFit: 'cover', height: 180 }}
                      />
                      <h5 className="font-weight-bold text-light">
                        {item.nama}
                      </h5>
                      <p className="text-gray-500 mb-0">{item.client.nama}</p>
                    </div>
                  </Button>
                </div>
              </Fade>
            );
          }
        })}
      </div>
    </section>
  );
}
