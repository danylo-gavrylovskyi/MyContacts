import React from 'react';

import { Header } from './components/Header';

import styles from './scss/App.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.App}>
      <Header></Header>
    </div>
  );
};

export default App;
