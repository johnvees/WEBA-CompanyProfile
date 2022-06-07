import React from 'react';

export default function History(props) {
  return (
    <section className="container pt-5 pb-5">
      <div className="row align-items-center">
        <div className="col-sm-5">
          <div className="row align-items-center pl-3 pr-3">
            <div
              className="col-6 border border-primary "
              style={{ height: 100 }}
            >
              <h3 className="font-weight-bold text-yellow text-center">
                {props.data.projects}
              </h3>
              <p className="text-center text-light">Projects</p>
            </div>
            <div
              className="col-6 border border-primary "
              style={{ height: 100 }}
            >
              <h3 className="font-weight-bold text-yellow text-center">
                {props.data.clients}
              </h3>
              <p className="text-center text-light">Clients</p>
            </div>
          </div>
          <div className="border border-primary " style={{ height: 100 }}>
            <h3 className="font-weight-bold text-yellow text-center">
              {props.data.products}
            </h3>
            <p className="text-center text-light">Products That've Been Made</p>
          </div>
        </div>
        <div className="col-sm-2"></div>
        <div className="col-sm-5 text-center">
          <h5 className="font-weight-bold text-yellow text-center mb-3">
            Our History
          </h5>
          <h4 className="text-light text-center mb-3">
            Sit aliqua nisi in consectetur ex exercitation velit mollit cillum.
          </h4>
          <p className="text-light text-center ">
            Ad laborum anim officia sint ad sint elit consectetur anim elit sunt
            do voluptate. Incididunt minim eu et fugiat cupidatat tempor
            reprehenderit officia sit aliquip nulla excepteur laborum cupidatat.
            Dolor ut ut eu cillum qui veniam do. Minim ex est mollit nisi velit
            incididunt id aliqua deserunt in voluptate. Ea elit enim do et
            consequat. Anim duis nulla est magna culpa.
          </p>
        </div>
      </div>
    </section>
  );
}
