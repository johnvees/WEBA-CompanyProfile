import React from 'react';

export default function Content(props) {
  return (
    <section className="container pt-5">
      <h1 className="font-weight-bold mb-3 text-yellow text-center">
        PRODUCT CATALOG
      </h1>
      <h5 className="text-light text-center">
        {props.data.count} Products
      </h5>
    </section>
  );
}
