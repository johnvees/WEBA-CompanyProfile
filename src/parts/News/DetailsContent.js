import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Fade from 'react-reveal/Fade';

import Breadcrumb from 'elements/Breadcrumb';

export default function DetailsContent({ data, breadcrumb }) {
  return (
    <section className="container pb-5 pt-5">
      <Fade bottom>
        <Breadcrumb data={breadcrumb} />
        <h2 className="font-weight-bold mb-5 pt-3 text-yellow">
          {data.detailNews.jenis}
        </h2>
        <img
          src={`${process.env.REACT_APP_HOST}/${data.detailNews.imageUrl}`}
          alt="Shoe Product"
          className="img-fluid rounded-lg w-100"
          style={{ height: 550, objectFit: 'cover' }}
        />
        <div className="mt-3">
          <h3 className="font-weight-bold mb-2 text-light">
            {data.detailNews.judul}
          </h3>
          <h5 className="text-gray-500 ">
            {data.detailNews.tanggal.toLocaleString().split('T')[0]},{' '}
            {data.detailNews.penulis}
          </h5>
          <p className="text-light mt-5">
            {ReactHtmlParser(data.detailNews.isi)}
          </p>
        </div>
      </Fade>
    </section>
  );
}
