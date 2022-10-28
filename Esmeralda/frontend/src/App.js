import React from 'react';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen.js';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Esmeralda
            </Link>
          </div>
          <div>
            <a href="/cart">Productos</a>
            <a href="/signin">Carrito</a>
            <a href="/cart">Ingresa</a>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product:slug" element={<ProductScreen />} />
          </Routes>
        </main>
        <footer className="row center">Esmeralda S.A.S</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
