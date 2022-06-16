import React from 'react';

import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function Leader(props) {
  return (
    <section className="container pt-5 pb-5">
      <h2 className="font-weight-bold mb-3 text-yellow text-center">
        Our Leader
      </h2>
      <div className="row align-items-center">
        {props.data.map((item) => {
          return (
            <div className="col-sm-4 p-2" style={{ position: 'relative' }}>
              <img
                src={item.imageUrl}
                alt="Shoe Product"
                className="img-fluid rounded-lg w-100"
                style={{ height: 500, objectFit: 'cover' }}
              />
              <div
                className="justify-content-start align-items-end"
                style={{ position: 'absolute', bottom: 20, left: 20 }}
              >
                <h2 className="text-dark font-weight-bold">{item.name}</h2>
                <p className="text-dark">{item.department}</p>
              </div>
            </div>
          ); 
        })}        
      </div>
    </section>
  );
}
