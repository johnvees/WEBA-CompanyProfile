import React from 'react';
import Fade from 'react-reveal/Fade';

export default function Leader(props) {
  const dataNama = `${props.data[0].namaLeader}`;
  const dataJabatan = `${props.data[0].jabatanLeader}`;
  const splitterNama = dataNama.split(', ');
  const splitterJabatan = dataJabatan.split(', ');

  const resultNama = splitterNama.map((e) => ({
    namaLeader: e,
  }));

  const resultJabatan = splitterJabatan.map((x) => ({
    jabatanLeader: x,
  }));

  console.log(resultJabatan);

  return (
    <section className="container pt-5 pb-5">
      <Fade bottom>
        <h2 className="font-weight-bold mb-3 text-yellow text-center">
          Our Leader
        </h2>
        <div className="row align-items-center">
          {props.data[0].gambarId.map((item, index) => {
            return (
              <Fade bottom delay={500 * index}>
                <div className="col-sm-4 p-2" style={{ position: 'relative' }}>
                  <img
                    src={`${process.env.REACT_APP_HOST}/${item.imageUrl}`}
                    alt="Shoe Product"
                    className="img-fluid rounded-lg w-100"
                    style={{ height: 500, objectFit: 'cover' }}
                  />
                </div>
              </Fade>
            );
          })}
        </div>
        <div className="justify-content-start align-items-end">
          <div className="row align-items-center ">
            {resultNama.map((item, index) => {
              return (
                <div className="col-sm-4">
                  <h2 className="text-light font-weight-bold">
                    {item.namaLeader}
                  </h2>
                </div>
              );
            })}
          </div>

          <div className="row align-items-center ">
            {resultJabatan.map((item, index) => {
              return (
                <div className="col-sm-4">
                  <p className="text-light">{item.jabatanLeader}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}
