import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function App() {

  const [count, setCount] = useState(1);

  useEffect(() => {
    console.log('side effect');
  }, []);


  return (
    <div className='main-app'>
      <div>
        {count}
      </div>
      <button type='button' onClick={() => setCount((currentCount) => currentCount + 1)} >Increment</button>
      <button type='button' onClick={() => setCount(count - 1)} >Decrement</button>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));