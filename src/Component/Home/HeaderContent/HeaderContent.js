import React from 'react';
import image1 from '../../../images/image1.jpg'
import image2 from '../../../images/image2.jpg'
import './HeaderContent.css'

const HeaderContent = () => {
    return (
        <div className="CardImage">
            <div className="row align-items-center cardContainer">
                <div className="col-md-5 orderCard ">
                    <h2>Save Time For More Important Things</h2>
                    <p>WE'LL TAKE CARE ABOUT CLEANNESS</p>
                    <button className="Button">Order Now</button>
                </div>
                <div className="col-md-7 mt-5">
                    <img className="Image imageCard" src={image2} alt="images" />
                </div>
            </div>
        </div>

    );
};

export default HeaderContent;