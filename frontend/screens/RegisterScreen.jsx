import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        {/* Add registration form fields here */}
        <button type="submit">Register</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
