import React from 'react';
import Affichage from '../components/Affichage';
import Entete from '../components/Entete';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Listing = () => {
    return (
        <div>
            <Navbar/>
            <Entete/>
            <Affichage />
            <Footer/>
        </div>
    );
};

export default Listing;