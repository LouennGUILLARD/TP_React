import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';
import Headers from './composant/Headers';
import Home from './composant/Home';
import Footer from './composant/Footer';

function App() {
  return (
    <div id="shell" className="bg-body-tertiary">
      <Headers />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
