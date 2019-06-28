import React from 'react';
import Login from './components/Login';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Products from './components/Products';

function App() {
  const authState = useSelector(state => state.authentication);
  return (
    <div>
      <NavBar />
      {authState.isAuthenticated ? <Products /> : <Login />}  
    </div>
  );
}

export default App;
