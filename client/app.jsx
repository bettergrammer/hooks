import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from './useForm.jsx';

function App() {

  const [{count, count2}, setCount] = useState({ count: 0, count2: 0});

  const [values, handleChange] = useForm({email: '', password: ''});

  useEffect(() => {
    console.log('side effect');
  }, []);


  return (
    <div className='main-app'>
      <input name="email" value={values.email} onChange={handleChange} />
      <input type="password" name="password" value={values.password} onChange={handleChange} />
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