import './App.css';
import React from 'react';
import { MainPage } from './modules/MainPage/MainPage';
import { ThemeContextProvider } from './context/ThemeContext';
import { Provider } from 'react-redux';
import { store } from './store';
import { ModalWindow } from './modules/ModalWindow/ModalWindow';

function App() {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <div className='App'>
          <MainPage />
          <ModalWindow />
        </div>
      </Provider>
    </ThemeContextProvider>
  );
}

export default App;
