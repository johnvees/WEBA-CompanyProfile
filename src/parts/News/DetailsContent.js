import React from 'react';
import ImageProduct_ from 'assets/images/imageProduct_.jpg';

export default function DetailsContent() {
  return (
    <section className="container pb-5 pt-5">
      <p className="text-gray-500">
        News{' '}
        <span className="text-light font-weight-bold">/ Title of News</span>
      </p>
      <h2 className="font-weight-bold mb-5 pt-3 text-yellow">Popular News</h2>
      <img
        src={ImageProduct_}
        alt="Shoe Product"
        className="img-fluid rounded-lg w-100"
        style={{ height: 550, objectFit: 'cover' }}
      />
      <div className="mt-3">
        <h3 className="font-weight-bold mb-2 text-light">Our Latest News</h3>
        <h5 className="text-gray-500 ">John Doe, 23-September-2000</h5>
        <p className="text-light mt-5">
          Enim sint incididunt irure sint aliquip duis cillum. Eiusmod irure
          elit Lorem magna cupidatat elit cupidatat commodo irure culpa dolor
          dolore esse. Laboris aliquip culpa sint nisi ut occaecat officia duis.
          Ad laborum nostrud irure ullamco enim culpa. Ullamco ut reprehenderit
          laboris enim cillum reprehenderit est do reprehenderit sit enim ea.
          Sunt ad culpa fugiat irure quis eiusmod non reprehenderit ea dolor.
          Mollit eu excepteur consectetur commodo Lorem et nisi. Elit nulla elit
          id dolor. Ad et aliqua est in. Officia veniam nostrud occaecat elit.
          Est exercitation laboris irure pariatur id ad excepteur id. Lorem
          labore eiusmod fugiat adipisicing exercitation consectetur esse.{' '}
          <br />
          Ipsum laboris commodo amet duis laborum cillum minim laboris dolor ad
          occaecat officia. Proident ullamco incididunt magna ex qui velit Lorem
          eu eiusmod duis dolor. Cillum voluptate ex fugiat commodo nostrud.
          Esse deserunt quis laborum ipsum eu velit in fugiat tempor do duis
          mollit. Consectetur dolore adipisicing non deserunt ea occaecat
          excepteur proident ullamco sint Lorem ad anim. Laboris aute duis sunt
          officia et non fugiat Lorem sint nisi eu et.
        </p>
      </div>
    </section>
  );
}
