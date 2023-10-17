import React from 'react';
import './App.css';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';


function App() {

  return (
    <div className="App" style={{ padding: 10 }}>
      
      <h2 style={{ color: 'red' }}>How to use hook useContext</h2>
      {/* <ThemeContextProvider> */}
        <Box />
      {/* </ThemeContextProvider> */}

    </div>
  );
}

export default App;
