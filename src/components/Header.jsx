import React from 'react';
import style from '../style/Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <button onClick={() => navigate(-1)} className={style.back}>
        Back
      </button>
      <h2 className={style.title}>Fruity App</h2>
    </div>
  );
}
