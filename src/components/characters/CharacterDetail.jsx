import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/api/api.data';
import { AiOutlineLeft } from "react-icons/ai";
import './CharacterDetail.scss';

const CharacterDetail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    
    useEffect(()=> {
         getCharacterById(id)
        .then(data => setCharacter(data));
    }, [])

    return(
        <>
        <h1 className="main-title-detail">
        <Link to={`/`}>
            <span><AiOutlineLeft /></span>
        </Link>    
            &nbsp; 
            Detalle de Personaje:
        </h1>
        <div className="character-detail-container">

            <div className="character-picture-container">
                <img src={character?.image} alt={character?.name} />
            </div>
            <div className="character-description-container">
                <h2 className="character-name">{character?.name}</h2>
                <p><span>status</span> <br /> <br />{character?.status}</p>
                <p><span>Última locación</span> <br /> <br />{character?.location?.name}</p>
                <p><span>Origen</span> <br /> <br />{character?.origin?.name}</p>
            </div>
        </div></>
    )
}

export default CharacterDetail;