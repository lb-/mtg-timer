import React, { useState } from 'react';

import './App.scss';
import Background from './Background';
import Timer from './Timer';

const App = ({ defaultFavMeCode = 'dd98zov', defaultDuration = 50 }) => {
  var url = new URL(window.location);
  var params = new URLSearchParams(url.search);
  const minutesFromUrl = parseInt(params.get('minutes'), 10);
  const initialMinutes = isNaN(minutesFromUrl)
    ? defaultDuration
    : minutesFromUrl;

  const [title, setState] = useState(params.get('title') || 'Title');
  const [minutes, setMinutes] = useState(initialMinutes);

  return (
    <div className="App">
      <Background favMeCode={params.get('bg') || defaultFavMeCode}>
        <header className="App-header">
          <input
            className="App-header-input"
            onChange={({ target }) => setState(target.value)}
            value={title}
          />
        </header>
        <main className="App-main">
          <Timer minutes={minutes} onStartingMinutesChange={setMinutes} />
        </main>
      </Background>
    </div>
  );
};

export default App;
