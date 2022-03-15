import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
    AiFillRobot,
    AiOutlinePlus,
  } from 'react-icons/ai';

import './Dashboard.scss';

const Dashboard = () => {
    const navigate = useNavigate();



    const btnList = [
        {
            id: 1,
            name: "Listar Personajes",
            idTag: 'list-characters',
        },
        {
            id: 2,
            name: "Agregar Personaje",
            idTag: 'add-character',
        }
    ]

    const handleBtnProductsSubmenu = (id) => {
        const pro = document.querySelector('#characters-btn');
        const btn = document.querySelector(`#${id}`);
        const btns = document.querySelectorAll('button');
        btns.forEach((i) => {
          i.removeAttribute('style');
        });
        btn.setAttribute('style', `color: #FD5C07`);
        pro.setAttribute('style', 'color: #FD5C07');
        if (id === 'add-character') {
          navigate('add-character');
        } else if (id === 'list-characters') {
          navigate('/');
        }
      };
    
      const handleBtnProducts = () => {
        const btn = document.querySelector('#characters-btn');
        const btns = document.querySelectorAll('button');
        const prodListdocument = document.querySelector('.characters-option-list');
    
        btns.forEach((i) => {
          i.removeAttribute('style');
        });
    
        if (prodListdocument.hasAttribute('id')) {
          prodListdocument.removeAttribute('id');
        } else {
          prodListdocument.setAttribute('id', 'hidden-list-character');
        }
        btn.setAttribute('style', 'color: #FD5C07');
        navigate('/');
      };
    return (
        <div className="dashboard-business-container-all">
      <div className="dashboard-business-container">
        <div>
          <p className="business-title-menu-dashboard">Rick And Morty API</p>
          <p className="business-subtitle-menu-dashboard">
            Gestión de CRUD
          </p>
        </div>
        <ul>
          <li className="titleNavigation">Navegación</li>
          <li>
            <button id="characters-btn" type="button" onClick={handleBtnProducts}>
              {' '}
              <AiFillRobot /> <span>Personajes</span>{' '}
            </button>
          </li>
          <div className="characters-option-list" id="hidden-list-character">
            {btnList.map((i) => (
              <div key={i.id}>
                <button
                  id={i.idTag}
                  type="button"
                  key={i.id}
                  onClick={() => handleBtnProductsSubmenu(i.idTag)}
                >
                  {' '}
                  <AiOutlinePlus /> <span>{i.name}</span>
                </button>
                <br />
              </div>
            ))}
          </div>
          
        </ul>
      </div>
      <div className="business-dashboard-container__content">
        <Outlet />
      </div>
    </div>
    );
}


export default Dashboard;
