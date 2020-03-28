import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncident() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
      ongId
    };

    try {
      await api.post('incidents', data, { 
        headers: {
          Authorization: ongId
        }
      });
      alert('Incidente cadastrado com sucesso!');
      history.push('/profile');
    } catch (error) {
      alert('Não foi possível efetuar o cadastro, tente mais tarde.');
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident} >
          <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Título do caso"/>
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Descrição" />
          <input value={value} onChange={e => setValue(e.target.value)} placeholder="Valor em reais"/>

          <div className="button-group">
            <Link className="back-button" type="button" to="/profile">Cancelar</Link>
            <button className="button" type="submit">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}