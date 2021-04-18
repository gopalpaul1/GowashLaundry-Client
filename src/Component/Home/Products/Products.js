import React, { useEffect, useState } from 'react';
import ProductService from '../ProductService/ProductService';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:5055/services')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [] )
    return (
        <div className="">
            <div className="provideService">
                <h3>Dry Cleaning Laundry Made Simple</h3>
                <p style={{fontSize:"large", marginTop:"20px"}}>Laundry provide Services</p>
            </div>
            <div className="productContainer">
                {
                    products.map(pd => <ProductService product = {pd} key={pd._id}/>)
                }
            </div>

        </div>
    );
};

export default Products;