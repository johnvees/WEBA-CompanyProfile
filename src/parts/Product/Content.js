import React from 'react';

export default function Content(props) {
  return (
    <section className="container pb-5 pt-5">
      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index === 0) {
            return (
              <div className="col-sm-7 p-2">
                <div className="border border-primary rounded-lg p-3">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg w-100 mb-3"
                    style={{ objectFit: 'cover', height: 300 }}
                  />
                  <h4 className="text-light font-weight-bold">{item.nama}</h4>
                  <p className="text-gray-500 mb-0">{item.client.nama}</p>
                </div>
              </div>
            );
          }
        })}
        <div className="col-sm-5">
          <div className="row p-2">
            {props.data.map((item, index) => {
              if (index === 1) {
                return (
                  <div className="col-sm-12 border border-primary rounded-lg p-2 mb-2">
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
                        <p className="text-gray-500 mb-0">{item.client.nama}</p>
                      </div>
                    </div>
                  </div>
                );
              } else if (index === 2) {
                return (
                  <div className="col-sm-12 border border-primary rounded-lg p-2 mt-2">
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
                        <p className="text-gray-500 mb-0">{item.client.nama}</p>
                      </div>
                    </div>
                  </div>
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
              <div className="col-sm-3 p-2">
                <div className="border border-primary rounded-lg p-2">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg mb-2 w-100"
                    style={{ objectFit: 'cover', height: 180 }}
                  />
                  <h5 className="font-weight-bold text-light">{item.nama}</h5>
                  <p className="text-gray-500 mb-0">{item.client.nama}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
