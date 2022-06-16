import React from 'react'

export default function FeaturedProduct(props) {
  return (
    <section className="container pb-5">
      <div className="row align-items-center">
        {props.data.map((item, index) => {
          if (index <= 3) {
            return (
              <div className="col-sm-3 p-2">
                <div className="border border-primary rounded-lg p-2">
                  <img
                    src={item.imageUrl}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg mb-2 w-100"
                    style={{ objectFit: 'cover', height: 180 }}
                  />
                  <h5 className="font-weight-bold text-light">{item.name}</h5>
                  <p className="text-gray-500 mb-0">{item.client}</p>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
}
