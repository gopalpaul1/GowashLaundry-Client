import React from 'react';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons'

const Reviews = (props) => {

    const {name, company, comment} = props.review

    return (

        <div className="ReviewsContent">
            <div className="Reviewscard">
                <h4 style={{color:"#08d4a8"}}>{name}</h4>
                <p style={{color:"lightgrey"}}>{company}</p>
                <p style={{color:"lightgrey"}}>Rating<FontAwesomeIcon style={{fontSize:"small",color:"gold"}} icon={faStar} /><FontAwesomeIcon style={{fontSize:"small",color:"gold"}} icon={faStar} /><FontAwesomeIcon style={{fontSize:"small",color:"gold"}} icon={faStar} /><FontAwesomeIcon style={{fontSize:"small",color:"gold"}} icon={faStar} /><FontAwesomeIcon style={{fontSize:"small",color:"gold"}} icon={faStar} /></p>
                <p style={{color:"grey"}}>{comment}</p>
            </div>
        </div>
    );
};

export default Reviews;