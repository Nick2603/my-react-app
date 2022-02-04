import React from "react";
import styles from './Header.module.css';

class Header extends React.Component {
   render() {
      return (
         <header className={styles.header}>
            <span>Header</span>
         </header>
      )
   };
};

export default Header;