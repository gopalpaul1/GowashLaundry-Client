import React from 'react';
import { useHistory } from 'react-router';
import './ProductService.css'

const ProductService = (props) => {
    const {name, price, description, _id, imageURL} = props.product
    
    let history = useHistory();


    const handleClick = (id) => {
        history.push(`/order/${id}`)
        
    }

    return (
        <div className="serviceCards">
            <img className="serviceImage" src={imageURL} alt=""/>
            <h4 style={{textAlign:"center", color:"#08d4a8"}}>{name}</h4>
            <p style={{textAlign:"center", fontSize:"larger",color:"grey"}}>${price}</p>
            <p style={{color:"grey"}}>{description}</p>
            <button className="ServicesButton" onClick={() => handleClick(_id)}>Order Now</button>
        </div>
    );
};

export default ProductService;