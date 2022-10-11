import React from 'react';
import style from '../style/Header.module.css';
import { useNavigate, useMatches } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  const matches = useMatches();

  const backButton = (
    <button onClick={() => navigate(-1)} className={style.back}>
      Back
    </button>
  );

  return (
    <div className={style.container}>
      {matches[0].pathname !== '/' ? backButton : ''}

      <h2 className={style.title}>Fruity App</h2>
    </div>
  );
}
