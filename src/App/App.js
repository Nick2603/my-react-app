import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className='wrapper'>
      <div className='forFooterWrapper'>
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
