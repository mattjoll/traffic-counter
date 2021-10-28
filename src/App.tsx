import React, { FunctionComponent } from 'react';
import Counter from './components/Counter';
import './App.css';

const App: FunctionComponent = () => {
  return (
    <div className="App">
      <h1>Traffic Counter</h1>
      <Counter />
    </div>
  );
};

export default App;
