import React from 'react';
import styles from './Sidebar.module.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.left_aside}>
      <div className={styles.left_flexbox}>
        <div  title="rent"><Link to='/rent-room' className={styles.stay_homes}>Rent Room</Link></div>
        <div  title="rent"><Link to='/book-hotel'className={styles.stay_homes}>Book Hotel</Link></div>
        <div  title="visit"><Link to='/stay-home'className={styles.stay_homes}>Stay Home </Link></div>

      </div>
      <div className={styles.language__box}>
        <div className={styles.fu}>
          <input type="text" name="lanugage_choose" id="Lang_choose" placeholder="english" />
        </div>
      </div>
      <div className={styles.left_bottom_div}>
      <div  title="visit"><Link to='/language'className={styles.stay_homes}>Language </Link></div>
      <div  title="visit"><Link to='/settings'className={styles.stay_homes}>Settings </Link></div>
      </div>
      
    </div>
  );
}

export default Sidebar;