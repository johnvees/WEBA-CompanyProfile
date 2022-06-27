import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Content(props) {
  return (
    <section className="container pt-5">
      <Fade bottom>
        <h1 className="font-weight-bold mb-3 text-yellow text-center">
          PRODUCT CATALOG
        </h1>
        <h5 className="text-light text-center">{props.data.count} Products</h5>
      </Fade>
    </section>
  );
}
