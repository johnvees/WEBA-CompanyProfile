import React from 'react';

export default function DetailsContent(props) {
  return (
    <section className="container pb-5 pt-5">
      <p className="text-gray-500 text-truncate w-50">
        News{' '}
        <span className="text-light font-weight-bold ">
          / {props.data.title}
        </span>
      </p>
      <h2 className="font-weight-bold mb-5 pt-3 text-yellow">
        {props.data.type}
      </h2>
      <img
        src={props.data.imageUrl}
        alt="Shoe Product"
        className="img-fluid rounded-lg w-100"
        style={{ height: 550, objectFit: 'cover' }}
      />
      <div className="mt-3">
        <h3 className="font-weight-bold mb-2 text-light">{props.data.title}</h3>
        <h5 className="text-gray-500 ">
          {props.data.creator}, {props.data.date}
        </h5>
        <p className="text-light mt-5">{props.data.content}</p>
      </div>
    </section>
  );
}
