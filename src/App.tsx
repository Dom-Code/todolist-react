import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Routes/Home';
import ValidationContext from './Context/ValidationContext';
import { IList } from './Context/ValidationContext';
import Nav from './Nav';
import Account from './Components/Routes/Account';
import Login from './Components/Routes/Login';
import ErrorPage from './Components/Routes/ErrorPage';
import TodoListMain from './Components/Routes/TodoListMain';
import Register from './Components/Routes/Register';
import Logout from './Components/Routes/Logout';

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
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <Home /> },
        { path: 'todolists', element: <TodoListMain /> },

        {
          path: 'account',
          element: <Account />,
          errorElement: <ErrorPage />,
          children: [
            { path: 'login', element: <Login /> },
            { path: 'register', element: <Register /> },
            { path: 'logout', element: <Logout /> },
          ],
        },
      ],
    },
  ]);

  return (
    <div className='App'>
      <ValidationContext.Provider value={userContext}>
        <RouterProvider router={router} />
      </ValidationContext.Provider>
    </div>
  );
}

export default App;
