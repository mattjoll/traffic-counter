import React, { FunctionComponent, useState } from 'react';
import Button from './Button';

enum ClickAction {
  Decrement = 'decrement',
  Increment = 'increment',
}

const createDataPoint = (action: ClickAction) => {
  const currentDbString = sessionStorage.getItem('db') || '{}';
  const currentDb = JSON.parse(currentDbString);
  const dbUpdate = {
    ...currentDb,
    [Date.now().toString()]: action,
  };

  sessionStorage.setItem('db', JSON.stringify(dbUpdate));
};

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = (action: ClickAction) => {
    if (action === ClickAction.Increment) {
      setCount(count + 1);
      createDataPoint(action);
    } else if (count !== 0) {
      setCount(count - 1);
      createDataPoint(action);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div className="font-medium m-8 text-9xl">{count}</div>
      <div className="space-x-8">
        <Button onClick={() => handleClick(ClickAction.Decrement)}>
          Remove
        </Button>
        <Button onClick={() => handleClick(ClickAction.Increment)}>Add</Button>
      </div>
    </section>
  );
};

export default Counter;
