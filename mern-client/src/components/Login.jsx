import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Using useNavigate hook for navigation

  const handleLogin = (event) => {
    event.preventDefault(); // Prevents default form submission behavior

    // Check if the email and password match
    if (email === "mona2002@gmail.com" && password === "9490770029") {
      // If the credentials match, navigate to the admin dashboard
      navigate("/admin/dashboard");
    } else {
      // If credentials don't match, you can show an error message or handle it accordingly
      console.log("Invalid credentials");
    }
  };

  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'  }}>
    <div>
      <h1>Login here</h1><br></br>
      <form onSubmit={handleLogin}>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br></br> <br></br>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default Login;