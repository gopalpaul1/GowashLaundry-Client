import React from 'react';
import './From.css'

const From = () => {

    return (
        <div className="FormContainer">
            <div className="FormCard">
                <h2 className="formText">Always Contact us</h2>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label cardText">Name</label>
                    <input type="name" className="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label cardText">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email address" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label cardText">Message</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Message" cols="10" rows="6"></textarea>
                </div>
            </div>
        </div>
    );
};

export default From;