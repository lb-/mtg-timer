import React from 'react';
import './App.scss';
import Background from './Background';
import Timer from './Timer';

const App = () => (
  <div className="App">
    <Background>
      <header className="App-header">
        <input className="App-header-input" value="Title" />
      </header>
      <main className="App-main">
        <Timer minutes={14} seconds={25} />
      </main>
    </Background>
  </div>
);

export default App;
