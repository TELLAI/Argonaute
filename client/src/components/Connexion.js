import React, { useState } from 'react';
import axios from "axios"


const Connexion = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [exist, setExist] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()

        if (name != "" && password != ""){
            axios.get(`http://localhost:5000/users/${name}/${password}`).then((res) => {
                if(res){
                    setName(res.data.name)
                    setPassword(res.data.password)
                    window.localStorage.setItem("tokens", JSON.stringify(res.data));
                    window.location.reload();
                }else {
                    setExist(true)
                }
        })
        }else {
            setError(true)
        }
    }

    return (
      <div className="connect-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          {error && (
            <p className="error">Le nom ou le mot de passe est incorrect</p>
          )}
          {exist && (
            <p className="error">Le nom ou le mot de passe n'existe pas</p>
          )}
          <input
            type="text"
            placeholder="            Tapez votre nom"
            className="champs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="        Tapez votre mot de passe"
            className="champs"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="submit" value="Envoyer" className="push" />
        </form>
      </div>
    );
};

export default Connexion;