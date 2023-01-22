import React from 'react';
import s from'./App.module.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className={s.app}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
