import React, { useEffect, useState } from 'react';
import Add from '../components/Add';
import Connexion from '../components/Connexion';
import Entete from '../components/Entete';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Inscription = () => {

    const [isAuth, setIsAuth] = useState(false)

    const getToken = () => {
        const token = window.localStorage.getItem("tokens")
        if(token){
            setIsAuth(true)
        }else{
            setIsAuth(false)
        }
    }

    useEffect(() => {
        getToken()
    }, [])
    return (
        <div>
            <Navbar/>
            <Entete/>
            {
                isAuth ? <Add/> : <Connexion/>
            }
            <Footer/>
        </div>
    );
};

export default Inscription;