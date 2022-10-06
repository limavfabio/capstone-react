import React from 'react';
import style from '../style/FruitBlock.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function FruitBlock({ fruit }) {
  return (
    <Link to={`fruitdetails/${fruit.id}`} className={style.fruitBlock}>
      {fruit.name}
    </Link>
  );
}

FruitBlock.propTypes = {
  fruit: PropTypes.object.isRequired,
};
