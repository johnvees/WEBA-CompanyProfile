import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Vision() {
  return (
    <section className="container pt-5 pb-5">
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">Visi</h2>
        <p className="text-light text-center mb-5">
          Menjadi perusahaan sepatu yang bereputasi dan bernilai baik kepada
          pelanggan, mitra bisnis, dan pekerja
        </p>
      </Fade>
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">Misi</h2>
        <p className="text-light text-center ">
          Memberikan inovasi produk yang berkwalitas secara konsisten melalui
          perkembangan teknologi, staff ahli dan penggunaan material terbaik
          <br />
          <br />
          Berkomunikasi & berkerjasama secara sebagai satu tim dalam memenuhi
          berbagai kebutuhan pelanggan untuk pengiriman tepat waktu & kepuasan
          pelanggan
        </p>
      </Fade>
    </section>
  );
}
