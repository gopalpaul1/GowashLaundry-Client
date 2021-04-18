import React, { useEffect, useState } from 'react';
import Reviews from '../Reviews/Reviews';
import './Testimonial.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://blooming-sea-02282.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (

        <div className="TestimonialContent">
            <h2 style={{textAlign:"center",color:"#08d4a8"}}>Services Testimonial</h2>
            <div className="TestimonialCard">
                {

                    reviews.map(review => <Reviews review={review} key={review._id} />)

                }
            </div>
            <button className="ExploreButton">Explore Reviews</button>
        </div>
    );
};

export default Testimonial;