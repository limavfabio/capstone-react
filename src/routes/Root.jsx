import React, { useState } from 'react';
import { useGetFruitsQuery } from '../features/fruits/fruitsApiSlice';
import style from '../style/Root.module.css';
import FruitBlock from '../components/FruitBlock';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default function Root() {
  const [searchInput, setSearchInput] = useState('');
  const [filteredFruits, setFilteredFruits] = useState([]);

  const {
    data: fruits,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetFruitsQuery();

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = fruits.filter((item) => {
        return Object.values(item)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredFruits(filteredData);
    } else {
      setFilteredFruits(fruits);
    }
  };

  let content;

  if (isLoading) {
    content = <Loading />;
  } else if (isSuccess && searchInput.length > 1) {
    content = filteredFruits.map((fruit) => (
      <FruitBlock key={fruit.id} fruit={fruit} />
    ));
  } else {
    content = fruits.map((fruit) => (
      <FruitBlock key={fruit.id} fruit={fruit} />
    ));
  }

  return (
    <>
      {isSuccess ? <Header /> : ''}
      <input type="text" onChange={(e) => searchItems(e.target.value)} />
      <section className={style.container}>{content}</section>
    </>
  );
}
