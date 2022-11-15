import './App.css';
import React from 'react';
import { MainPage } from './modules/MainPage/MainPage';
import { ThemeContextProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <div className='App'>
          <MainPage />
        </div>
      </Provider>
    </ThemeContextProvider>
  );
}

export default App;
