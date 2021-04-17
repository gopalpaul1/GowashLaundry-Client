import React, { useEffect, useState } from 'react';
import ProductService from '../ProductService/ProductService';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:5055/service')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [] )
    return (
        <div className="">
            <div className="provideService">
                <h2>Dry Cleaning and Laundry Made Simple</h2>
                <p style={{fontSize:"large", marginTop:"20px"}}>Laundry provide Services</p>
            </div>
            <div className="row productContainer">
                {
                    products.map(pd => <ProductService product = {pd} key={pd._id}/>)
                }
            </div>

        </div>
    );
};

export default Products;