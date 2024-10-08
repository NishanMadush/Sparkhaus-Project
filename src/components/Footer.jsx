import React from 'react'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                    <span className="copyright">Copyright &copy; Your Website 2024</span>
                    </div>
                    <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li className="list-inline-item">
                        <a href="#something">
                            <i className="fa fa-twitter"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#something">
                            <i className="fa fa-facebook-f"></i>
                        </a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#something">
                            <i className="fa fa-linkedin"></i>
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li className="list-inline-item">
                        <a href="#something">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                        <a href="#something">Terms of Use</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </footer>
        </div>


    )
}