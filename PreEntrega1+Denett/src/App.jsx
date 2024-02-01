import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import MensajeError from './components/MensajeError';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><MensajeError greeting={"Navegación no disponible, vuelva más tarde."} /></>} />
          <Route path="/category/:category" element={<><Header /><ItemListContainer /></>} />
          <Route path="/item/:id" element={<> <Header />  <ItemDetailContainer />  </> }  /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
