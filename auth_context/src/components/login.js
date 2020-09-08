import React, { useState } from 'react';
import { AuthContext } from '../context/auth-context';

const Login = props => {

  const [errordata, setErrordata] = useState('')

  const { login } = React.useContext(AuthContext);


  const handelForm = (event) => {
    event.preventDefault()

    const data = {
      username: event.target.elements.username.value

      , password: event.target.elements.password.value
    };

    fetch('http://localhost:8989/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        login(data.user);
      })
      .catch((error) => {
        setErrordata(error.message)
      });

  }

  return (
    <div className="account-form">
      <h2>Login to App</h2>
      <div className="error-message" data-testid="error-message">{errordata}</div>
      <form onSubmit={handelForm} >
        <input type="text" id="username" placeholder="Enter username" />
        <input type="password" id="password" placeholder="Enter password" />
        <button type="submit" data-testid="login-btn">
          Log in
        </button>
      </form>
      <button className="link" onClick={props.changePage}>
        Sign up for an account
      </button>
    </div>
  )
};

export default Login;
