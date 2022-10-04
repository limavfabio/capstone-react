import React from 'react';
import { useGetFruitsQuery } from '../features/fruits/fruitsApiSlice';

import style from '../style/Root.module.css';
import FruitBlock from '../components/FruitBlock';

export default function Root() {
  const {
    data: fruits,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFruitsQuery();

  let content;

  if (isLoading) {
    content = <div>IT is loading!</div>;
  } else if (isSuccess) {
    content = fruits.map((fruit) => (
      <FruitBlock key={fruit.id} fruit={fruit} />
    ));
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <section className={style.container}>{content}</section>;
}
