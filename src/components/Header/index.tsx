import { useEffect, useState } from 'react';
import { GET_CARS_BY_SEARCH } from '../../api';
import useFetch from '../../hooks/useFetch';
import styles from './Header.module.css';

function Header({search, setSearch}: any) {
  function onChange(event: any) {
    setSearch(event.target.value)
  }

  return (
    <div className={styles.headerContainer}>
        <input
          key="search-input-header"
          className={styles.searchInput}
          onChange={(event) => onChange(event)}
          value={search}
          placeholder="Faça a sua pesquisa para filtrar carros por nome, modelo ou marca"
        >
        </input>
    </div>
  )
}

export default Header