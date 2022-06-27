import React from 'react';

export default function Content(props) {
  return (
    <section className="container pb-5 pt-5">
      <h2 className="font-weight-bold mb-3 text-yellow text-center">
        Our Latest News
      </h2>
      {props.data.map((item, index) => {
        if (index === 0) {
          return (
            <div
              className="border border-primary rounded-lg w-100 p-3 mb-3"
              style={{ height: 700 }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                alt="Shoe Product"
                className="img-fluid rounded-lg w-100"
                style={{ height: 550, objectFit: 'cover' }}
              />
              <div className="mt-3">
                <h3 className="font-weight-bold mb-2 text-light text-truncate w-100">
                  {item.judul}
                </h3>
                <p className="text-gray-500 text-truncate w-75">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          );
        }
      })}

      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index >= 1 && index <= 2) {
            return (
              <div className="col-sm-6 p-3">
                <div
                  className="border border-primary rounded-lg p-3"
                  style={{ height: 350 }}
                >
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg w-100"
                    style={{ height: 240, objectFit: 'cover' }}
                  />
                  <div className="mt-2">
                    <h3 className="font-weight-bold mb-2 text-light text-truncate w-100">
                      {item.judul}
                    </h3>
                    <p className="text-gray-500 text-truncate w-75">
                      {item.deskripsi}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        })}

        {/* <div className="col-sm-6 p-3">
          <div
            className="border border-primary rounded-lg p-3"
            style={{ height: 350 }}
          >
            <img
              src={ImageProduct_}
              alt="Shoe Product"
              className="img-fluid rounded-lg w-100"
              style={{ height: 240, objectFit: 'cover' }}
            />
            <div className="mt-2">
              <h3 className="font-weight-bold mb-2 text-light">
                Our Latest News
              </h3>
              <p className="text-gray-500 text-truncate w-75">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad Lorem ipsum dolor sit
                amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
