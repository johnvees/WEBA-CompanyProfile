import React from 'react';
import Fade from 'react-reveal/Fade';

import LogoWeba from 'assets/images/logoWeba.svg';

export default function Footer() {
  return (
    <Fade>
      <section className="container pt-5">
        <div className="row pb-5">
          <div className="col-5">
            <img src={LogoWeba} alt="Logo Weba" className="img-fluid mb-3" />
            <p className="text-dark">
              Jl. Raya Candi No.20, Kebonsar, Kebonsari, Kec. Candi, Kabupaten
              Sidoarjo, Jawa Timur 61271
            </p>
          </div>
          <div className="col-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8622484077964!2d112.71353731528598!3d-7.480459675835586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e732aed02679%3A0x6a97c302a5139847!2sPT.%20Weba%20International!5e0!3m2!1sen!2sid!4v1656365344597!5m2!1sen!2sid"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="m-2 w-100 rounded "
            ></iframe>
          </div>
        </div>
        <div className="text-center p-2">
          Copyright &copy; WEBA International 2022
        </div>
      </section>
    </Fade>
  );
}
