import React from 'react';
import './App.css';
import CheckButton from './components/CheckButton';
import MarriedList from './components/MarriedList';
import StudentContextProvider from './context/StudentContext';

function App() {
  return (
    <div className="App">
      <StudentContextProvider>
        <MarriedList />
        <CheckButton/>

      </StudentContextProvider>       
    </div>
  );
}

export default App;
