import React from 'react';
// Importing the Context Provider & Home Component
import MyContextProvider from './Components/contexts/MyContext';
import Home from './Components/Home'

function App() {
  return (
    <MyContextProvider>
        <Home/>
    </MyContextProvider>
  );
}

export default App;
