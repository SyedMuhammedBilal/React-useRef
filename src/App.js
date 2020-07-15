import React, {useRef, useEffect} from 'react';
import './App.css';

function App() {

  const element = useRef(null)

  useEffect(() => {
    element.current.focus();
  },[])

  return (
    <div className="App">
      <h1>useRef Demo </h1>
      <input ref={element} type="text" />
    </div>
  );
}

export default App;
