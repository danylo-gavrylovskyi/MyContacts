import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Create } from './pages/Create';

const App: React.FC = () => {
  const [id, setId] = React.useState(0);

  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home setId={setId} />}></Route>
        <Route path="/create" element={<Create id={id} setId={setId} />}></Route>
      </Routes>
    </>
  );
};

export default App;
