import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ teamLinks }) => {
    return (
        <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
            {
                teamLinks && teamLinks.map(({ path, name, title }, index) => 
                <div className="col-lg-4">
                <div className="team-member">
                    <img className="mx-auto rounded-circle" src={path} alt="..." />
                    <h4>{name}</h4>
                    <p className="text-muted">{title}</p>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i className="fa fa-facebook-f"></i></a>
                    <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i className="fa fa-linkedin"></i></a>
                </div>
            </div>
                )
            }
            <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
          </div>
        </div>
        </section>
    )
}