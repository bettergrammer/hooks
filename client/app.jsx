import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [{count, count2}, setCount] = useState({ count: 0, count2: 0});

  useEffect(() => {
    console.log('side effect');
  }, []);


  return (
    <div className='main-app'>
      <div>
        Count: {count}
      </div>
      <div>
        Count2: {count2}
      </div>
      <button type='button' onClick={() => {
        setCount((currentState) => ({
          count: currentState.count + 1,
          count2: currentState.count2 + 1
        }))
      }}>Increment</button>
      <button type='button' onClick={() =>
        setCount((state) => ({
          count: state.count - 1,
          count2: state.count2 - 1
        }))} >Decrement</button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));