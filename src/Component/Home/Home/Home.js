import React from 'react';
import Delivary from '../Delivary/Delivary';

import Footer from '../Footer/Footer';
import From from '../Form/From';

import Header from '../Header/Header/Header';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Header/>
            <Delivary/>
            <Products/>
            <From/>
            <Footer/>
        </div>
    );
};

export default Home;