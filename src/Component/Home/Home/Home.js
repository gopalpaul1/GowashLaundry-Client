import React from 'react';
import Delivary from '../Delivary/Delivary';

import Footer from '../Footer/Footer';
import From from '../Form/From';

import Header from '../Header/Header/Header';
import Products from '../Products/Products';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Header/>
            <Delivary/>
            <Products/>
            <From/>
            <Testimonial/>
            <Footer/>
        </div>
    );
};

export default Home;