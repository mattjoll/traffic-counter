import React, { FunctionComponent } from 'react';
import Counter from './components/Counter';

const App: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center mt-8">
      <header>
        <h1>Traffic Counter</h1>
      </header>
      <main>
        <Counter />
      </main>
    </div>
  );
};

export default App;
