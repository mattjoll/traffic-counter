import React, { FunctionComponent, useState } from 'react';
import Button from './Button';

enum ClickAction {
  Decrement = 1,
  Increment = 2,
}

const Counter: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  const handleClick = (action: ClickAction) => {
    if (action === ClickAction.Increment) {
      setCount(count + 1);
    } else if (count !== 0) {
      setCount(count - 1);
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div className="font-medium m-8 text-9xl">{count}</div>
      <div className="space-x-4">
        <Button onClick={() => handleClick(ClickAction.Decrement)}>
          Remove
        </Button>
        <Button onClick={() => handleClick(ClickAction.Increment)}>Add</Button>
      </div>
    </section>
  );
};

export default Counter;
