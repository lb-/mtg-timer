import React from 'react';
import './App.scss';
import Background from './Background';

function App() {
  return (
    <div className="App">
      <Background>
        <header className="App-header">Title</header>
        <main>
          <p>
            <span>25</span>
            <span>30</span>
          </p>
        </main>
      </Background>
    </div>
  );
}

export default App;
