import styles from './App.module.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.forFooterWrapper}>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
