import React, { useEffect, useState } from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from '../../services/api/api.data';
import './EditCharacter.scss';
import { useCharacterContext } from '../../context/CharacterContext';

const EditCharacter = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [character, setCharacter] = useState();
    const { charact, setCharact } = useCharacterContext();

    const handleChangeCharacter = (e) => {
        const {name, value} = e.target;
        setCharacter((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();      

       const pos = charact.map(function(e) { return e.id; }).indexOf(Number(id));
        charact.splice(pos, 1, character)
        alert('Personaje actualizado')
        navigate('/');
    }


    useEffect(()=> {
        getCharacterById(id)
        .then((data)=> setCharacter(data))
    }, [])

    return (
    <div className="edit-character-container-dashboard">

      <h1 className="title-edit-character">
        <Link to={`/`}>
          <span>
            <AiOutlineLeft />
          </span>
        </Link>
        &nbsp;
        Editar Personaje
      </h1>
      <div className="form-container-edit-character">
        <br />
        <div className="container-form">
          <label htmlFor="name" className="label-edit-character-form">
            Nombre de Personaje <br />
            <input
              type="text"
              name="name"
              autoComplete="off"
              className="input-text-edit-character-form"
              placeholder={character?.name}
              value={character?.name}
              onChange={handleChangeCharacter}
            />
          </label>
          <br />
          <label htmlFor="species" className="label-edit-character-form">
            Especie de Personaje <br />
            <input
              type="text"
              name="species"
              autoComplete="off"
              className="input-text-edit-character-form"
              placeholder={character?.species}
              value={character?.species}
              onChange={handleChangeCharacter}
            />
          </label>
        </div>
        <br />
        <div className="container-form">
          <label htmlFor="status" className="label-edit-character-form">
            Estado de Personaje <br />
            <select
              type="text"
              name="status"
              autoComplete="off"
              className="input-text-edit-character-form"
              onChange={handleChangeCharacter}
            >
              <option value={true}>Alive</option>
              <option value={false}>Death</option>              
            </select>
          </label>
          <br />
        </div>
        <br />
        <div className="container-form">
          <label htmlFor="gender" className="label-edit-character-form">
            Género <br />
            <input
              type="text"
              name="gender"
              autoComplete="off"
              className="input-text-edit-character-form"
              placeholder={character?.gender}
              value={character?.gender}
              onChange={handleChangeCharacter}
            />
          </label>
          <br />
        </div>
        <br />
        <div className="container-submit-btn-edit-character-dashboard">
          <Link to={`/`}>
            <button style={{ backgroundColor: '#FF0C00' }} type="button">
                Cancelar
            </button>{' '}
          </Link>
          &nbsp;
          <button type="button" onClick={handleSubmit}>
            Acrualizar
          </button>
        </div>
      </div>
    </div>
    );
}

export default EditCharacter;