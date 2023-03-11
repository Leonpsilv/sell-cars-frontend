import styles from './Header.module.css';
function Header() {
  return (
    <div className={styles.headerContainer}>
        <input className={styles.searchInput}></input>
    </div>
  )
}

export default Header