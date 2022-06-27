import React from 'react';

export default function Product(props) {
  return (
    <section className="container pt-5 pb-5">
      <h2 className="font-weight-bold mb-3 text-yellow text-center">
        Our Products
      </h2>
      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index === 0) {
            return (
              <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 p-2">
                <img
                  src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                  alt="Shoe Product"
                  className="img-fluid rounded"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            );
          }
        })}

        <div className="col-sm-6 d-flex flex-wrap p-0">
          {props.data.map((item, index) => {
            if (index >= 1 && index <= 4) {
              return (
                <div className="col-sm-6 p-2">
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.gambarId[0].imageUrl}`}
                    alt="Shoe Product"
                    className="img-fluid rounded w-100"
                    style={{ height: 180, objectFit: 'cover' }}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
