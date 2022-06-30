import React from 'react';
import Fade from 'react-reveal/Fade';

import numberFormat from 'utils/formatNumber';

export default function History(props) {
  return (
    <section className="container pt-5 pb-5">
      <div className="row align-items-center">
        <Fade bottom delay={400}>
          <div className="col-sm-5">
            <div className="row align-items-center pl-3 pr-3">
              <div
                className="col-6 border border-primary "
                style={{ height: 100 }}
              >
                <h3 className="font-weight-bold text-yellow text-center mt-3">
                  {numberFormat(props.data[0].jmlProject)}
                </h3>
                <p className="text-center text-light">Projects</p>
              </div>
              <div
                className="col-6 border border-primary "
                style={{ height: 100 }}
              >
                <h3 className="font-weight-bold text-yellow text-center mt-3">
                  {numberFormat(props.data[0].jmlClient)}
                </h3>
                <p className="text-center text-light">Clients</p>
              </div>
            </div>
            <div className="border border-primary " style={{ height: 100 }}>
              <h3 className="font-weight-bold text-yellow text-center mt-3">
                {numberFormat(props.data[0].jmlProdukJadi)}/Tahun
              </h3>
              <p className="text-center text-light">
                Products That've Been Made
              </p>
            </div>
          </div>
        </Fade>
        <div className="col-sm-2"></div>
        <Fade bottom delay={600}>
          <div className="col-sm-5 text-center">
            <h5 className="font-weight-bold text-yellow text-center mb-3">
              Our History
            </h5>
            <h2 className="text-light text-center mb-3">
              Bagaimana Kami Memulai Semua Ini...
            </h2>
            <p className="text-light text-center ">
              Dimulai pada tahun 1975 dan kemudian menjadi perusahaan pada tahun
              1991. Dimulai dengan beberapa karyawan yang membuat sepatu dan
              sandal untuk market lokal, kemudian pada tahun 1995 WEBA Footwear
              mulai merambah ke bisnis ekspor pertama ke Jepang dan Korea
            </p>
          </div>
        </Fade>
      </div>
    </section>
  );
}
