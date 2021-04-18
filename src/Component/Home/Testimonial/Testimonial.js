import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5055/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <div className="TestimonialContent">
            <h2 style={{textAlign:"center",color:"#08d4a8"}}>Services Testimonial</h2>
            <div className="TestimonialCard">
                {

                    reviews.map(review => <Reviews review={review} />)

                }
            </div>
            <button className="ExploreButton">Explore Reviews</button>
        </div>
    );
};

export default Testimonial;