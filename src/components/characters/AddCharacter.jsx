import React, {useState} from 'react';
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import './AddCharacter.scss';
import { useCharacterContext } from '../../context/CharacterContext';

const AddCharacter = () => {
  const { charact, setCharact } = useCharacterContext();
  const navigate = useNavigate();
  const [newCharacter, setNewCharacter] = useState ({
    name: '',
    species: '',
    status: '',
    gender: '',
  })

  const handleChangeCharacter = (e) => {
    const {name, value} = e.target;
    setNewCharacter((prev) => ({
        ...prev,
        [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const values = {};
    Object.entries(newCharacter).forEach(([key, value]) => {
      if (value !== '' ) {
        values[key] = value;
      }
    });

    const dataCharacter = {
        ...values,
        id: Math.random() * (1500 - 1000) + 100,
    };

    setCharact(
      [
        dataCharacter,
        ...charact,
      ]
    )
    alert('Personaje agregado correctamente')
    navigate('/');
  }
    return (
    <div className="add-character-container-dashboard">

      <h1 className="title-add-character">
        <Link to={`/`}>
          <span>
            <AiOutlineLeft />
          </span>
        </Link>
        &nbsp;
        Agregar Personaje
      </h1>
      <div className="form-container-add-character">
        <br />
        <div className="container-form">
          <label htmlFor="name" className="label-add-character-form">
            Nombre de Personaje <br />
            <input
              type="text"
              name="name"
              autoComplete="off"
              className="input-text-add-character-form"
              value={newCharacter.name}
              onChange={handleChangeCharacter}
            />
          </label>
          <br />
          <label htmlFor="species" className="label-add-character-form">
            Especie de Personaje <br />
            <input
              type="text"
              name="species"
              autoComplete="off"
              className="input-text-add-character-form"
              value={newCharacter.species}
              onChange={handleChangeCharacter}
            />
          </label>
        </div>
        <br />
        <div className="container-form">
          <label htmlFor="status" className="label-add-character-form">
            Estado de Personaje <br />
            <select
              type="text"
              name="status"
              autoComplete="off"
              className="input-text-add-character-form"
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
          <label htmlFor="gender" className="label-add-character-form">
            Género <br />
            <input
              type="text"
              name="gender"
              autoComplete="off"
              className="input-text-add-character-form"
              value={newCharacter.gender}
              onChange={handleChangeCharacter}
            />
          </label>
          <br />
        </div>
        <br />
        <div className="container-submit-btn-add-character-dashboard">
          <Link to={`/`}>
            <button style={{ backgroundColor: '#FF0C00' }} type="button">
                Cancelar
            </button>{' '}
          </Link>
          &nbsp;
          <button type="button" onClick={handleSubmit}>
            Guardar
          </button>
        </div>
      </div>
    </div>
    );
}

export default AddCharacter;