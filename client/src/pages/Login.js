import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, message } from 'antd';
import axios from 'axios';
import Spinner from '../components/Spinner';

import './Login.css'; // Import the CSS file for this component

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // From submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post('/users/login', values);
      message.success('Login Success');
      localStorage.setItem('user', JSON.stringify({ ...data.user, password: '' }));
      setLoading(false);
      navigate('/');
    } catch (err) {
      setLoading(false);
      message.error('Invalid username or password');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <>
      <div className="register-page">
        {loading && <Spinner />}
        <Form layout="vertical" onFinish={submitHandler}>
          <h1>Login Form</h1>
          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex">
            <button className="login-button">Login</button>
          </div>
          <div className="d-flex">
                <Link to="/register" className="register-link">
              Don't have an account? Register
            </Link>
            </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
