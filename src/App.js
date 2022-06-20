import React from 'react';
import Header from './components/Js/header';
import Footer from './components/Js/footer';
import Dropdown from './components/Js/dropdown';
import './components/Sass/App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Dropdown />
      <Footer />
    </div>
  );
}

export default App;
