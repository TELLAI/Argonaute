import React from 'react';
import Entete from '../components/Entete';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const NotFound = () => {
    return (
        <div>
            <Navbar/>
            <Entete/>
            <div className='error-container'>
                <h1>Error 404</h1>
                <p>Vous faite fausse route !!!</p>
            </div>
            <Footer/>
        </div>
    );
};

export default NotFound;