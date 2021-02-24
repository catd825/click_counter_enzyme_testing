import React from 'react';
import './App.css';

function App() {
  //destructure the array we get from the useState hook
  //count is value of the state, setCount is where we can set the state
  const [count, setCount] = React.useState(0);

  return (

    <div data-test="component-app" className="App">
      <h1 data-test="counter-display">
        the counter is currently&nbsp; 
        <span data-test="count">{count}</span>
      </h1>
      <button 
        data-test="increment-button"
        onClick={() => setCount(count + 1)}
        >increment counter
      </button>
      <button data-test="decrement-button"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1)
            }
          }
        }
        >decrement counter
      </button>
    </div>
  );
}

export default App;
