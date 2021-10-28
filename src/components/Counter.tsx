import React, { FunctionComponent, useState } from 'react';

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
    <main>
      <p>{count}</p>
      <button onClick={() => handleClick(ClickAction.Decrement)}>Remove</button>
      <button onClick={() => handleClick(ClickAction.Increment)}>Add</button>
    </main>
  );
};

export default Counter;
