import React from 'react';
import Fade from 'react-reveal/Fade';

import Button from 'elements/Button';

export default function Content(props) {
  return (
    <section className="container pb-5 pt-5">
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">
          Our Latest News
        </h2>
        {props.data.map((item, index) => {
          if (index === 0) {
            return (
              <Fade bottom delay={200}>
                <div
                  className="border border-primary rounded-lg w-100 p-3 mb-3"
                  style={{ height: 700 }}
                >
                  <Button type="link" href={`/details/news/${item._id}`}>
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
                  </Button>
                </div>
              </Fade>
            );
          }
        })}

        {/* {props.data.map((item, index) => {
        if (index >= 0 && index <=3) {
           return (
             <div
               id="carouselExampleIndicators"
               className="carousel slide"
               data-ride="carousel"
             >
               <ol className="carousel-indicators">
                 <li
                   data-target="#carouselExampleIndicators"
                   data-slide-to="0"
                   className="active"
                 ></li>
                 <li
                   data-target="#carouselExampleIndicators"
                   data-slide-to="1"
                 ></li>
                 <li
                   data-target="#carouselExampleIndicators"
                   data-slide-to="2"
                 ></li>
               </ol>
               <div className="carousel-inner">
                 <div className="carousel-item active">
                   <img
                     src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                     className="d-block w-100"
                     alt="..."
                   />
                 </div>
                 <div className="carousel-item">
                   <img
                     src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                     className="d-block w-100"
                     alt="..."
                   />
                 </div>
                 <div className="carousel-item">
                   <img
                     src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                     className="d-block w-100"
                     alt="..."
                   />
                 </div>
               </div>
               <button
                 className="carousel-control-prev"
                 type="button"
                 data-target="#carouselExampleIndicators"
                 data-slide="prev"
               >
                 <span
                   className="carousel-control-prev-icon"
                   aria-hidden="true"
                 ></span>
                 <span className="sr-only">Previous</span>
               </button>
               <button
                 className="carousel-control-next"
                 type="button"
                 data-target="#carouselExampleIndicators"
                 data-slide="next"
               >
                 <span
                   className="carousel-control-next-icon"
                   aria-hidden="true"
                 ></span>
                 <span className="sr-only">Next</span>
               </button>
             </div>
           );
        }
       
      })} */}

        <div className="row align-items-center">
          {props.data.map((item, index) => {
            if (index >= 1 && index <= 2) {
              return (
                <Fade bottom delay={200 * index}>
                  <div className="col-sm-6 p-3">
                    <div
                      className="border border-primary rounded-lg p-3"
                      style={{ height: 350 }}
                    >
                      <Button type="link" href={`/details/news/${item._id}`}>
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
                      </Button>
                    </div>
                  </div>
                </Fade>
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
      </Fade>
    </section>
  );
}
