import React from 'react';

import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function Product(props) {
  return (
    <section className="container pt-5 pb-5">
      <h2 className="font-weight-bold mb-3 text-yellow text-center">
        Our Products
      </h2>
      <div className="row align-items-center">
        {/* {props.data.map((item, index) => {
          return index === 0 ? (
            <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 p-2">
              <img
                src={item.imageUrl}
                alt="Shoe Product"
                className="img-fluid rounded"
              />
            </div>
          ) : (
            <div className="col-sm-3 h-50 p-0">
                <div className="col-sm-12 p-2">
                  <img
                    src={item.imageUrl}
                    alt="Shoe Product"
                    className="img-fluid rounded w-100"
                    style={{ height: 200 }}
                  />
                </div>
            </div>
          );
        })} */}
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 p-2">
          <img
            src={props.data[0].imageUrl}
            alt="Shoe Product"
            className="img-fluid rounded"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="col-sm-6 d-flex flex-wrap p-0">
          <div className="col-sm-6 p-2">
            <img
              src={props.data[1].imageUrl}
              alt="Shoe Product"
              className="img-fluid rounded w-100"
              style={{ height: 180, objectFit: 'cover' }}
            />
          </div>
          <div className=" col-sm-6 p-2">
            <img
              src={props.data[2].imageUrl}
              alt="Shoe Product"
              className="img-fluid rounded w-100"
              style={{ height: 180, objectFit: 'cover' }}
            />
          </div>
          <div className=" col-sm-6 p-2">
            <img
              src={props.data[3].imageUrl}
              alt="Shoe Product"
              className="img-fluid rounded w-100"
              style={{ height: 180, objectFit: 'cover' }}
            />
          </div>
          <div className=" col-sm-6 p-2">
            <img
              src={props.data[4].imageUrl}
              alt="Shoe Product"
              className="img-fluid rounded w-100"
              style={{ height: 180, objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
