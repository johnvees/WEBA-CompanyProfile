import React from 'react';

import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function DetailsContent(props) {
  return (
    <section className="container pt-5">
      <p className="text-gray-500 pb-4">
        Products{' '}
        <span className="text-light font-weight-bold">/ Title of Products</span>
      </p>
      <div className="row pb-5">
        <div className="col-sm-6 p-0">
          <div className="d-flex">
            <div className="col-3">
              {props.data.imageUrls.map((item, index) => {
                if (index >= 1) {
                  return (
                    <div className="pb-2">
                      <img
                        src={item.url}
                        alt="Shoe Product"
                        className="img-fluid rounded-lg"
                        style={{ height: 100, width: 100, objectFit: 'cover' }}
                      />
                    </div>
                  );
                }
              })}
            </div>
            <div className="col-sm-9 p-0">
              {props.data.imageUrls.map((item, index) => {
                if (index === 0) {
                  return (
                    <div className="w-100 h-100">
                      <img
                        src={item.url}
                        alt="Shoe Product"
                        className="img-fluid rounded-lg w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  );
                }
              })}
              
            </div>
          </div>
        </div>
        <div className="col-sm-6 pt-3">
          <p className="text-gray-500 pb-2">
            Product Code:{' '}
            <span className="text-light font-weight-bold">
              {props.data.productCode}
            </span>
          </p>
          <h2 className="text-light pb-3">{props.data.name}</h2>
          <h5 className="text-light pb-2">Description</h5>
          <p className="text-light">{props.data.description}</p>
        </div>
      </div>
      <div className="border-bottom text-gray-500 mb-4"></div>
      <div className="row pb-5">
        <div className="col-sm-6">
          <h4 className="text-light font-weight-bold mb-4">Details: </h4>
          <p className="text-light">{props.data.details}</p>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <h4 className="text-light font-weight-bold mb-4">Materials: </h4>
          <p className="text-light">{props.data.materials}</p>
        </div>
      </div>
      <div className="border-bottom text-gray-500 mb-4"></div>
    </section>
  );
}
