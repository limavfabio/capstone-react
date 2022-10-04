import React from 'react';
import style from '../style/FruitBlock.module.css';
import PropTypes from 'prop-types';

export default function FruitBlock({ fruit }) {
  return (
    <div className={style.fruitBlock}>
      {fruit.id} | {fruit.name}
    </div>
  );
}

FruitBlock.propTypes = {
  fruit: PropTypes.object.isRequired,
};
