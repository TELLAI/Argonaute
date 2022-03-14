import axios from 'axios';
import React, { useState } from 'react';
import Affichage from './Affichage';

const Add = () => {

    const [name, setName] = useState("")
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
         
        if(name != ""){
            
            axios.post(`http://localhost:5000/add`, {"name" : name}).then((res) => {
            setName("")
            setError(false)
            window.location.reload()
        })
        }else {
            setError(true)
        }
        
    }

    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          {error && (
            <p className="error">Veuillez taper un nom d'argonaute</p>
          )}
          <input
            type="text"
            placeholder="            Tapez le nom d'un argonaute"
            className="champs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input type="submit" value="Envoyer" className="push" />
        </form>
        <Affichage/>
      </div>
    );
};

export default Add;