import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ servicesLinks }) => {
    return (
        <section className="page-section" id="services">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Services</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row text-center">
                {
                    servicesLinks && servicesLinks.map(({ name, description }) => 
                    <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="my-3">{ name }</h4>
                    <p className="text-muted">{ description }</p>
                    </div>
                    )
                }
            </div>
        </div>
        </section>
    )
}