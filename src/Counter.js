
import { useState } from 'react';

function Counter(props) {
  const [count, setCount] = useState(0);

  return (
    <div className='counter'>
      <h1>Welcome {props.name}</h1>
      <h2>{count}</h2>
      <button onClick={ () => setCount(count - 1)}>Decrease Counts</button>
      <button onClick={ () => setCount(count + 1)}>Increase Counts</button>
      <button onClick={ () => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
