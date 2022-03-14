import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Affichage = () => {

    const [equipage, setEquipage] = useState([])

    const getData = () => {
        axios.get(`http://localhost:5000/list`).then((res) => {
            setEquipage(res.data)
        })
    }
    useEffect(() => {
        getData()
    }, [])

    return (
      <div className="list-container">
        <h2>Membres de l'équipage</h2>
        <ul>
          {equipage.map((user) => (
            <li>{user.username}</li>
          ))}
        </ul>
      </div>
    );
};

export default Affichage;