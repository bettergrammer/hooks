import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [{count, count2}, setCount] = useState({ count: 1, count2: 0});

  useEffect(() => {
    console.log('side effect');
  }, []);


  return (
    <div className='main-app'>
      <div>
        Count: {count}
        Count2: {count2}
      </div>
      <button type='button' onClick={() => {
        setCount((currentState) => ({
          count: currentState.count + 1,
          count2: currentState.count2
        }))
      }}>Increment</button>
      <button type='button' onClick={() => setCount(count - 1)} >Decrement</button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));