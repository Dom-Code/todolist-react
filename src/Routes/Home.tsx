import React, { useContext, useEffect } from 'react';
import ValidationContext from '../Context/ValidationContext';
import useAxiosPrivate from '../Hooks/useAxiosPrivate';
import { AxiosResponse } from 'axios';

const Home = () => {
  const data = useContext(ValidationContext);
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate
      .get('/getUsersTodolists')
      .then((response: AxiosResponse) => {
        data.setIsValid(true);
        data.setLists(response.data.lists);
        data.setTodos(response.data.todos);
      })
      .catch((err) => {
        console.log(err);
        data.setIsValid(false);
        data.setLists([]);
        data.setTodos([]);
        // navigate('account/login');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>Welcome to this Todo list app</p>
      {/* {data.isValid ? <TodoListMain /> : <div>Please Login.</div>} */}
      {/* <TodoListMain /> */}
    </div>
  );
};

export default Home;
