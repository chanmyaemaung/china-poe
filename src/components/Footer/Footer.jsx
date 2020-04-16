import React from 'react';

import './Footer.css';

const Footer = () => {
    return (
        <footer id="main-footer" className="text-center smooth bg-white">
            <div className="container pt-2">
                <div className="row">
                    <div className="col pt-3">
                        <p className="text-center">
                            Copyright &copy; {new Date().getUTCFullYear()}
                            <br />
                            Designed and Developed by : &nbsp;
                            <span style={{ fontWeight: 'bold' }}>
                                <a
                                    className="text-dark"
                                    href="https://www.facebook.com/chanlaymcmm"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Chan Myae Maung
                                </a>
                            </span>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
