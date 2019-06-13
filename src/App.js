import React, { useState } from 'react';

import './App.scss';
import Background from './Background';
import Timer from './Timer';

const App = () => {
  const [title, setState] = useState('Title');
  return (
    <div className="App">
      <Background>
        <header className="App-header">
          <input
            className="App-header-input"
            onChange={({ target }) => setState(target.value)}
            value={title}
          />
        </header>
        <main className="App-main">
          <Timer minutes={25} />
        </main>
      </Background>
    </div>
  );
};

export default App;
