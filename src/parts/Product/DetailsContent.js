import React from 'react';

import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function DetailsContent() {
  return (
    <section className="container pt-5 pb-5">
      <p className="text-gray-500 pb-4">
        Products{' '}
        <span className="text-light font-weight-bold">/ Title of Products</span>
      </p>
      <div className="row pb-5">
        <div className="col-sm-6 p-0">
          <div className="d-flex">
            <div className="col-3">
              <div className="pb-2">
                <img
                  src={ImageProduct_}
                  alt="Shoe Product"
                  className="img-fluid rounded-lg"
                  style={{ height: 100, width: 100, objectFit: 'cover' }}
                />
              </div>
              <div className="pb-2">
                <img
                  src={ImageProduct_}
                  alt="Shoe Product"
                  className="img-fluid rounded-lg"
                  style={{ height: 100, width: 100, objectFit: 'cover' }}
                />
              </div>
              <div className="pb-2">
                <img
                  src={ImageProduct_}
                  alt="Shoe Product"
                  className="img-fluid rounded-lg"
                  style={{ height: 100, width: 100, objectFit: 'cover' }}
                />
              </div>
              <div className="pb-0">
                <img
                  src={ImageProduct_}
                  alt="Shoe Product"
                  className="img-fluid rounded-lg"
                  style={{ height: 100, width: 100, objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-sm-9 p-0">
              <div className="w-100 h-100">
                <img
                  src={ImageProduct_}
                  alt="Shoe Product"
                  className="img-fluid rounded-lg w-100 h-100"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pt-3">
          <p className="text-gray-500 pb-2">
            Product Code:{' '}
            <span className="text-light font-weight-bold">SPT1234</span>
          </p>
          <h2 className="text-light pb-3">This Place For Name of Product</h2>
          <h5 className="text-light pb-2">Description</h5>
          <p className="text-light">
            Adipisicing consectetur voluptate proident nisi voluptate sint dolor
            veniam eiusmod veniam dolor aliquip ipsum. Officia exercitation amet
            proident esse proident officia. Duis magna et eiusmod ipsum et nisi.
            Est reprehenderit labore velit sit velit ut est anim cillum dolor
            nulla cillum quis anim.
          </p>
        </div>
      </div>
      <div className="border-bottom text-gray-500 mb-4"></div>
      <div className="row pb-5">
        <div className="col-sm-6">
          <h4 className="text-light font-weight-bold mb-4">Details: </h4>
          <p className="text-light">
            Est esse ut consectetur minim irure tempor eiusmod cupidatat est.
            Duis ex commodo esse enim aute esse dolore elit cillum occaecat
            proident pariatur. Ullamco ex dolor sint veniam consequat
            exercitation minim deserunt ad incididunt. Nisi deserunt id laborum
            reprehenderit exercitation reprehenderit aliquip magna do. Et est ut
            velit commodo dolore ut. Dolor do sit id Lorem et proident.
          </p>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <h4 className="text-light font-weight-bold mb-4">Materials: </h4>
          <ul>
            <li className="text-light">Cras justo odio</li>
            <li className="text-light">Dapibus ac facilisis in</li>
            <li className="text-light">Morbi leo risus</li>
            <li className="text-light">Porta ac consectetur ac</li>
            <li className="text-light">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
      <div className="border-bottom text-gray-500 mb-4"></div>
      <div className="row align-items-center">
        <div className="col-sm-3 p-2">
          <div className="border border-primary rounded-lg p-2">
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg mb-2 w-100"
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
              className="img-fluid rounded-lg mb-2 w-100"
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
              className="img-fluid rounded-lg mb-2 w-100"
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
              className="img-fluid rounded-lg mb-2 w-100"
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
