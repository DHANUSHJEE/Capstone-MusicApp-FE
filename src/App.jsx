// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../src/Components/Homepage'  // HomePage Component

import Login from '../src/Components/Login';  // Login Component (if needed)
import { Layout } from 'antd';

const { Content } = Layout;

const App = () => {
 
  const [user, setUser]= useState(null);

  // Check if the user is logged in on app load
  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));  // Set the user in the state
    }
  }, []);

  return (
    <Router>
      <Layout>
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          
           <Route path="/login" element={<Login />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};




export default App;
