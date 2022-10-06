import React from 'react';
import { useLoaderData } from 'react-router-dom';
import style from '../style/FruitDetails.module.css';
import Header from '../components/Header';

export async function loader({ params }) {
  return fetch(
    `https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/${params.id}`
  );
}

export default function FruitDetails() {
  const fruitData = useLoaderData();
  const fruit = JSON.parse(fruitData);

  console.log(fruit);
  return (
    <>
      <Header />
      <div className={style.container}>
        <div className={style.main}>
          <h1>{fruit.name}</h1>
          <div>
            <strong>Family:</strong>{' '}
            {fruit.family != 0 ? fruit.family : 'No information available'}
          </div>
          <div>
            <strong>Genus:</strong>{' '}
            {fruit.genus != 0 ? fruit.genus : 'No information available'}
          </div>
          <div>
            <strong>Order:</strong>{' '}
            {fruit.order != 0 ? fruit.order : 'No information available'}
          </div>
        </div>
        {fruit.nutritions.calories ? (
          <div className={style.nutrition}>
            <h2>Nutrition Information</h2>
            <div>
              <strong>Calories:</strong> {fruit.nutritions.calories}
            </div>
            <div>
              <strong>Carbohydrates:</strong> {fruit.nutritions.carbohydrates}
            </div>
            <div>
              <strong>Fat:</strong> {fruit.nutritions.fat}
            </div>
            <div>
              <strong>Protein:</strong> {fruit.nutritions.protein}
            </div>
            <div>
              <strong>Sugar:</strong> {fruit.nutritions.sugar}
            </div>
          </div>
        ) : (
          <h2>No nutritional information available</h2>
        )}
      </div>
    </>
  );
}
