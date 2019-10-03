import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Provider, useSelector, useDispatch } from 'react-redux'

import { createStore } from 'redux'

const rootReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'COUNT_UP': 
      return { ...state, count: state.count + 1 }
    case 'COUNT_DOWN': 
      return { ...state, count: state.count - 1 }
    case 'SET_COUNT': 
      return { ...state, count: action.value }
    default:
      return state
  }
}

const store = createStore(rootReducer)

function Counter () {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  const countUp = { type: 'COUNT_UP' }
  const countDown = { type: 'COUNT_DOWN' }
  const resetCount = { type: 'SET_COUNT', value: 0 }

  return <div>
    <p>Count: {count}</p>
    <button onClick={() => dispatch(countUp)}>Count Up</button>
    <button onClick={() => dispatch(countDown)}>Count Down</button>
    <button onClick={() => dispatch(resetCount)}>Reset Count</button>
  </div>
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux</h1>
        <Counter />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
