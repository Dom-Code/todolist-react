import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to={'/'}>Home</Link> | <Link to={'/account'}>Account</Link>
      <Outlet />
    </div>
  );
};

export default Nav;
