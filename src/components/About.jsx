import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ aboutLinks }) => {
    return (
        <section className="page-section" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
          <div className="row">
            {
                aboutLinks && aboutLinks.map(({ path, leftDate, leftTitle, leftDescription, rightDate, rightTitle, rightDescription }, index) => 
                    <div className="col-lg-12">
                    <ul className="timeline">
                        <li>
                            <div className="timeline-image">
                                <img className="rounded-circle img-fluid" src={path} alt="" />
                            </div>
                            <div className="timeline-panel">
                                <div className="timeline-heading">
                                    <h4><center>{leftDate}</center></h4>
                                    <h4 className="subheading"><center>{leftTitle}</center></h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted"><center>{leftDescription}</center></p>
                                </div>
                            </div>
                            <li className="timeline-inverted">
                            <div className="timeline-panel"style={{ marginLeft: '565px' }}>
                                <div className="timeline-heading">
                                    <h4><center>{rightDate}</center></h4>
                                    <h4 className="subheading"><center>{rightTitle}</center></h4>
                                </div>
                                <div className="timeline-body">
                                    <p className="text-muted"><center>{rightDescription}</center></p>
                                </div>
                            </div>
                            </li> 
                        </li>
                        
                    </ul>
                    </div>
                )
            }
          </div>
          <li className="timeline-inverted">
                <div className="timeline-image">
                    <h4>
                        Be Part
                        <br />
                        Of Our
                        <br />
                        Story!
                    </h4>
                </div>
            </li>
        </div>
        </section>
    )
}