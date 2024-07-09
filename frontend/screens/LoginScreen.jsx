import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  const handleLogin = () => {
    // Add login logic here
    history.push('/home');
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
