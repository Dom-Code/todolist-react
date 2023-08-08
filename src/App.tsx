import React, { useEffect, useState } from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Routes/Home';
import ValidationContext from './Context/ValidationContext';
import { IList } from './Context/ValidationContext';
import Nav from './Nav';

function App() {
  const [accessToken, setAccessToken] = useState<String>('');
  const [isValid, setIsValid] = useState<boolean>(false);
  const [lists, setLists] = useState<Array<IList>>([]);
  const [todos, setTodos] = useState<Array<{}>>([]);
  const userContext = {
    accessToken,
    setAccessToken,
    isValid,
    setIsValid,
    lists,
    setLists,
    todos,
    setTodos,
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Nav />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  useEffect(() => {
    console.log(accessToken);
  }, [accessToken]);

  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <ValidationContext.Provider value={userContext}>
        <RouterProvider router={router} />
      </ValidationContext.Provider>
    </div>
  );
}

export default App;
