import './App.css';
import React from 'react';
import { MainPage } from './modules/MainPage/MainPage';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <div className='App'>
        <MainPage />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
