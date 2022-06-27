import React from 'react'

import Button from 'elements/Button';

export default function FeaturedProduct(props) {
  return (
    <section className="container pb-5">
      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index <= 3) {
            return (
              <div className="col-sm-3 p-2">
                <Button type="link" href={`/details/products/${item._id}`}>
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
                </Button>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
