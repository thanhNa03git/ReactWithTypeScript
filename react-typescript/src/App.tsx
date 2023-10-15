import React from 'react';
import './App.css';
import { LoggedIn } from './components/state/LoggedIn';
import { Counter } from './components/state/Counter';
import { User } from './components/state/User';
import { Reducer } from './components/state/Reducer';


function App() {

  return (
    <div className="App" style={{padding: 10}}>
      <h2 style={{color:'red'}}>How to use hook useState</h2>
      <LoggedIn/>
      <h2 style={{color:'red'}}>How to use hook useState more than 1 type</h2>
      <User name='Thanh Na' email='a@gmail.com' phone={915304750}/>
      <h2 style={{color:'red'}}>How to use hook useReducer</h2>
      <Reducer/>
      <h2 style={{color:'red'}}>How to use hook useReducer advanced</h2>
      <Counter/>
    </div>
  );
}

export default App;
