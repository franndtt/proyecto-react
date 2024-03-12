import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './components/context/CartContext';
import Checkout from './components/Checkout';
import Home from './components/home';
import Footer from './components/Footer';



function App() {
  return (
    <CartContextProvider>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header />  <Home />    <Footer /> </>} />
          <Route path="/category/:id" element={<><Header /><ItemListContainer /> <Footer /> </>} />
          <Route path="/item/:id" element={<> <Header />  <ItemDetailContainer /> <Footer /> </> }  /> 
          <Route path="/cart" element={<> <Header />  <Cart />  <Footer /> </> }  /> 
          <Route path="/checkout" element={<> <Header />  <Checkout /> <Footer /> </> }  />
          <Route path="/home" element={<> <Header />  <Home />  <Footer /> </> }  />
        </Routes>
      </BrowserRouter>
      
    </>
    </CartContextProvider>
  );
}

export default App;
