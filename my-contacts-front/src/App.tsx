import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Create } from './pages/Create';

import styles from './scss/App.module.scss';

const App: React.FC = () => {
  let contactId: number = 0;

  return (
    <div className={styles.App}>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<Create id={contactId} />}></Route>
      </Routes>
    </div>
  );
};

export default App;
