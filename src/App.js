import React from 'react';
import './App.scss';
import Background from './Background';
import Timer from './Timer';

function App() {
  return (
    <div className="App">
      <Background>
        <header className="App-header">Title</header>
        <main>
          <Timer minutes={3} seconds={25} />
        </main>
      </Background>
    </div>
  );
}

export default App;
