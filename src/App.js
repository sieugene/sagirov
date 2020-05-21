import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Header from './Components/Header/Header';
import './App.scss'
import Main from './Components/Main/Main';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
