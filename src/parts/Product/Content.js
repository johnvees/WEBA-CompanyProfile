import React from 'react';
import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function Content() {
  return (
    <section className="container pb-5 pt-5">
      <h1 className="font-weight-bold mb-3 text-yellow text-center">
        PRODUCT CATALOG
      </h1>
      <h5 className="text-light text-center mb-5">11 Products</h5>
      <div className="row align-items-center">
        <div className="col-sm-7 p-2">
          <div className="border border-primary rounded-lg p-3">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg w-100 mb-3"
              style={{ objectFit: 'cover', height: 300 }}
            />
            <h4 className="text-light font-weight-bold">Name of Product</h4>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-5">
          <div className="row p-2">
            <div className="col-sm-12 border border-primary rounded-lg p-2">
              <div className="d-flex">
                <div className="col-6 p-0">
                  <img
                    src={ImageProduct_}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg"
                    style={{ objectFit: 'cover', height: 180 }}
                  />
                </div>
                <div className="col-6 mt-4">
                  <h5 className="font-weight-bold text-light">
                    Name of Product
                  </h5>
                  <p className="text-gray-500 mb-0">Name of Client</p>
                </div>
              </div>
            </div>
            <div className="p-2"></div>
            <div className="col-sm-12 border border-primary rounded-lg p-2">
              <div className="d-flex">
                <div className="col-6 p-0">
                  <img
                    src={ImageProduct_}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg"
                    style={{ objectFit: 'cover', height: 180 }}
                  />
                </div>
                <div className="col-6 mt-4">
                  <h5 className="font-weight-bold text-light">
                    Name of Product
                  </h5>
                  <p className="text-gray-500 mb-0">Name of Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2"
              style={{ objectFit: 'cover', height: 180 }}
            />
            <h5 className="font-weight-bold text-light">Name of Product</h5>
            <p className="text-gray-500 mb-0">Name of Client</p>
          </div>
        </div>
      </div>
    </section>
  );
}
