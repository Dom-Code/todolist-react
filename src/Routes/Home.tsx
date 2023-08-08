import React, { useContext, useEffect } from 'react';
import ValidationContext from '../Hooks/ValidationContext';

const Home = () => {
  const data = useContext(ValidationContext);

  useEffect(() => {
    data.setAccessToken('123312');
  }, []);
  return (
    <div>
      <p>Todo list App home page</p>
    </div>
  );
};

export default Home;
