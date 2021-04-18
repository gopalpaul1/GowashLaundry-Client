import React from 'react';
import './Reviews.css'

const Reviews = (props) => {

    const {name, company, comment} = props.review

    return (

        <div className="ReviewsContent">
            <div className="Reviewscard">
                <h4 style={{color:"#08d4a8"}}>{name}</h4>
                <p style={{color:"lightgrey"}}>{company}</p>
                <p style={{color:"grey"}}>{comment}</p>
            </div>
        </div>
    );
};

export default Reviews;