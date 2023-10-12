import React from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { Person } from './components/Person';
import { ListPerson } from './components/ListPerson';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';


function App() {
    const personName = {
      firstName: 'Khang',
      lastName: 'le'
    }
    const names = [
      {
        first: 'nguyen',
        last: 'hieu'
      },
      {
        first: 'tran',
        last: 'tien'
      },
      {
        first: 'le',
        last: 'khang'
      }
    ]

  return (
    <div className="App">
      <Hello name = 'Thanh Na' age = {20} isLogged = {false} />
      <Person name = {personName} />
      <ListPerson names={names} />
      <Status status='sairoi' />
      <Heading>Place Holder text </Heading>
      <Oscar>
        <Heading>Oscar goes to Jack 5 cu</Heading>
      </Oscar>
    </div>
  );
}

export default App;
