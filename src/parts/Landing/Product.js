import React from 'react';

import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function Product() {
  return (
    <section className="container pt-5 pb-5">
      <h2 className="font-weight-bold mb-3 text-yellow text-center">
        Our Products
      </h2>
      <div className="row align-items-center">
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 p-2">
          <img
            src={ImageProduct_}
            alt="Image Shoe Product"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="p-2">
              <img
                src={ImageProduct_}
                alt="Image Shoe Product"
                className="img-fluid rounded"
              />
            </div>
            <div className="p-2">
              <img
                src={ImageProduct_}
                alt="Image Shoe Product"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="row">
            <div className="p-2">
              <img
                src={ImageProduct_}
                alt="Image Shoe Product"
                className="img-fluid rounded"
              />
            </div>
            <div className="p-2">
              <img
                src={ImageProduct_}
                alt="Image Shoe Product"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
