import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', textAlign: 'center' }}>
      <p style={{ fontSize: '18px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '8px' }}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '8px' }}>Decrement</button>
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '8px' }}>Reset</button>
    </div>
  );
}

export default Counter;