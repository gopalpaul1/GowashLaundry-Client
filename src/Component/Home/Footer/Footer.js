import React from 'react';
import './Footer.css'


const Footer = () => {

    return (
        <footer className=" FooterContainer">
            <div className=" row FooterContent ">
                <div className="col-md-3">
                    <h2 className="textColor">GoWash<small style={{fontSize:"medium"}}>Laundry</small></h2>
                    <p className="footerText" >Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Ab illo inventore veritatis et quasi architecto. Ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
                <div className="col-md-3">
                    <h2 className="textColor">Blog</h2>
                    <div className="footerText" >
                        <p>M3 E36 Cabrio <br />JULY 7, 2016</p>
                        <p>Ordering a rinse is easy! <br />JUNE 21, 2016</p>
                        <p>Don’t wait for cleaning until it’s too late! <br /> JUNE 15, 2016</p>

                    </div>
                </div>
                <div className="col-md-3">
                    <h2 className="textColor">Services</h2>
                    <div className="footerText">
                        <p>Dry Clean Your Winter Coat</p>
                        <p>Dry Clean</p>
                        <p>Ironing Services</p>
                        <p>Laundry</p>
                        <p>Wash & Fold</p>
                        <p>Laundry Service London</p>
                    </div>

                </div>
                <div className="col-md-3 ">
                    <h2 className="textColor">Contact Info</h2>
                    <div className="footerText">
                        <p>+123-456-7890</p>
                    </div>
                    <div className="footerText">
                        <p>123, New Lenox, Chicago IL 60606</p>
                    </div>
                    <div>
                    
                    
                    </div>
                </div>
                <div className="text-center mt-5 text-light ">
                    <p>Copy Right @ 2021</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;