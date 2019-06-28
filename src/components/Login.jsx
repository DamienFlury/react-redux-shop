import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Paper from './styled-components/Paper';
import TextField from './styled-components/TextField';
import Button from './styled-components/Button';
import Typography from './styled-components/Typography';

const Wrapper = styled(Paper)`
    max-width: 1024px;
    margin: 20px auto;
    padding: 20px;
`;
const FormField = styled.div`
    width: 100%;
    margin: 10px 0;
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN', payload: { username, password } });
  };

  return (
    <Wrapper>
      <Typography variant="h2">Login</Typography>
      <form onSubmit={handleSubmit}>
        <FormField as={TextField} placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <FormField as={TextField} placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <FormField as={Button} disabled={username === '' || password === ''}>Login</FormField>
      </form>
    </Wrapper>
  );
};

export default Login;
