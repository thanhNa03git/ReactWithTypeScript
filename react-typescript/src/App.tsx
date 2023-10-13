import React from 'react';
import './App.css';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';

function App() {

  return (
    <div className="App">
      <Button 
        handlerClick={(event,id) =>{
          console.log("button clicked", event, id)
        }}
      />
      <Input value='' handlerChange={(event) =>{
        console.log(event)
      }}/>
      <Container style={{color: 'rebeccapurple', border: '1px solid red'}}/>
    </div>
  );
}

export default App;
