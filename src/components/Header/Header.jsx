
import styles from './Header.module.css';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <header className={styles.header}>
      <h1><Link to ='/' className={styles.h1}>Renthub</Link></h1>
        <div className={styles.search_box}>
          <input type="text" name="search" className={styles.searchBox}  placeholder="search location" />
          <div className={styles.profile} title="login">
            <img src="src/assets/img1.jpg" alt="img" />
          </div>
        </div>
      
    </header>
  );
}




export default Header;