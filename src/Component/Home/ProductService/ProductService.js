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
        <div className="col-md-4 serviceCards">
            <p style={{textAlign:"center", fontSize:"larger",color:"grey"}}>${price}</p>
            <h4 style={{textAlign:"center", color:"#08d4a8"}}>{name}</h4>
            <p style={{color:"grey"}}>{description}</p>
            <button onClick={() => handleClick(_id)}>Order Now</button>
        </div>
    );
};

export default ProductService;