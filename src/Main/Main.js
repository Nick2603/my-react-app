import React from "react";
import GetPosts from "./GetPosts/GetPosts";
import styles from './Main.module.css';

class Main extends React.Component {
   render() {
      return (
         <main className={styles.main}>
            <GetPosts />
         </main>
      )
   };
};

export default Main;