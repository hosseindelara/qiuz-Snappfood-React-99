import React, { useState } from 'react';
import { AuthContext } from '../context/auth-context';

const Register = props => {

  const { login } = React.useContext(AuthContext);


  const [errordata, setErrordata] = useState('')

  const handelForm = (event) => {
    event.preventDefault()
    const data = {
      username: event.target.elements.username.value

      , password: event.target.elements.password.value
    };

    fetch('http://localhost:8989/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        login(data.user)
      })
      .catch((error) => {
        setErrordata(error.message)
      });

  }





  return (
    <div className="account-form">
      <h2>Sign up</h2>
      <div className="error-message" data-testid="error-message">{errordata}</div>
      <form onSubmit={handelForm} >
        <input type="text" id="username" placeholder="Enter username" />
        <input type="password" id="password" placeholder="Enter password" />
        <button type="submit" data-testid="register-btn">
          Register
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Already have an account? Log In
      </button>
    </div>
  )
};

export default Register;
