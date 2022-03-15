import React, { useState } from 'react';
import './Characters.scss';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useCharacterContext } from '../../context/CharacterContext';

const Characters = () => {
    // const [character, setCharacter] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [charactersPerPage, setCharactersPerPage] = useState(5);
    const { charact, setCharact } = useCharacterContext();

    const lastCharacter = currentPage * charactersPerPage;
    const firstCharacter = lastCharacter - charactersPerPage;
    const currentCharacters = charact.slice(firstCharacter, lastCharacter);

    const handlePrevPage = (e) => {
        e.preventDefault();
        if(currentPage === 1) {
            setCurrentPage(4)
        } else {
            setCurrentPage(currentPage -1)  
        }
          
    }
    const handleNextPage  = (e) => {
        e.preventDefault();
        if(currentPage === 4) {
            setCurrentPage(1)
        } else {
            setCurrentPage(currentPage + 1)  
        }
    }

    const handleDeleById = (id) => {
        setCharact(charact.filter(cha => cha.id !==id ))
    }
    return(
        <>
        <h1 className="title-character-list"><span>Lista de Personajes</span></h1>
        <div className="characters-container">
            <div className='btn-container'>
                <Link to={`/add-character`}>
                    <button>Agregar Personaje</button>
                </Link>            
            </div>
            <table className="characters-dashboard-table">
                <thead className="header-table-characters">
                    <tr>
                        <th className='column-to-ocult'>Personaje</th>
                        <th className='column-to-ocult'>Nombre</th>
                        <th>Especie</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {charact
                        ? currentCharacters.map((item) => (
                            <tr  key={item?.id}>
                            {
                                item?.image ? (<td className='column-to-ocult'><img src={item?.image} alt={item?.name} /></td>):<td className='column-to-ocult'>Imagen no disponible</td>
                            }
                                
                                <td>{item?.name}</td>
                                <td className='column-to-ocult'>
                                    {item?.species}
                                </td>
                                <td>
                                    {' '}
                                    <Link to={`/detail/${item?.id}`}>
                                        <button className="btn-detail" type="button">
                                            Detalles
                                        </button>{' '}
                                    </Link>
                                    <Link to={`/edit-character/${item?.id}`}>
                                        <button className="btn-edit" type="button">
                                            Editar
                                        </button>{' '}
                                    </Link>                        
                                    <button
                                        className="btn-delete"
                                        type="button"
                                        onClick={()=> handleDeleById(item?.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))
                        : null}
                </tbody>
            </table>
            <div className="pagination-container">
                <button onClick={handlePrevPage}><AiOutlineLeft /></button>
                <button>{currentPage}</button>
                <button onClick={handleNextPage}><AiOutlineRight /></button>
            </div>
        </div></>
    )
}

export default Characters;