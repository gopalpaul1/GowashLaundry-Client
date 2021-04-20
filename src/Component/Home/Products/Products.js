import React, { useEffect, useState } from 'react';
import ProductService from '../ProductService/ProductService';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://blooming-sea-02282.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])
    return (
        <div className="">
            <div className="provideService">
                <h3>Dry Cleaning Laundry Made Simple</h3>
                <p style={{ fontSize: "large", marginTop: "20px" }}>Laundry provide Services</p>
            </div>
            {
                products.length === 0 && <div  className="spinner-border loading text-info" role="status">
                    <span class="sr-only"></span>
                </div>
            }
            <div className="productContainer">
                {
                    products.map(pd => <ProductService product={pd} key={pd._id} />)
                }
            </div>

        </div>
    );
};

export default Products;