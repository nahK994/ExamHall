import React, { useState } from 'react';
import { Button, Container, TextField, Box, Typography, Link } from '@mui/material';
import Icon from '../../assets/vite.svg';

interface LoginFormState {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({
    username: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your login logic here
    console.log(formState);
  };

  return (
    <Container maxWidth="sm" >
      <Box sx={{ display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      my: 3
    }}>
        <img src={Icon} alt="ExamHall" width={50} height={50} />
        {/* <Typography variant='h6' color='secondary.main' align='center' sx={{ my: 2}}>
          ExamHall 
        </Typography> */}
        <Typography variant='h6' color='secondary.main' align='center' sx={{ my: 2}}>
         Login
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          margin="normal"
          value={formState.username}
          onChange={handleInputChange}
          fullWidth
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          value={formState.password}
          onChange={handleInputChange}
          fullWidth
        />
        
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ my: 2}}>
          Log In
        </Button>

      </form>
      <Box sx={{ width: '100%', display: 'flex', flexDirection: 'row'}}>
          <Typography sx={{ width: '50%', ':hover': {
            textDecoration: 'underline'
          }}} color='secondary.dark'>
            Forgot Password?
          </Typography>
          <Typography component={Link} sx={{ width: '50%', ':hover': {
            textDecoration: 'underline'
          }}} align='right' color='secondary.dark' href='/signup'>
            Don't have any account? Sign Up
          </Typography>
        </Box>
    </Container>
  );
};

export default LoginPage;
