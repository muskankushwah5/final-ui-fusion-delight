import React, { useEffect, useRef, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { loginHandler, registerHandler } from '../../services/userApi';
import { useNavigate } from 'react-router';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

const SignInSide=()=> {

  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
  if(userData){
    navigate("/");
  }

  const [isLogin,setLogin] = useState(true);
  const [email,setEmail] = useState('');
  const [name,setName] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const [repassword,setRePassword] = useState('');
  

  const registerPageHandler = (event) =>{
    event.preventDefault();
    

    console.log("email",email);
      console.log(name,password,repassword,phone);
    
      if(!email ){
        alert("Email cant be empty");
      }
      else if(!password){
        alert("Password cant be empty");
      }
      else if(!name){
        alert("Name cant be empty");
      }
      else if(!phone){
        alert("Phone cant be empty");
      }
      else if(String(repassword) !== String(password)){
        alert("Both password should match");
      }

      else{
        
      
        const payload = {
          name : name,
          email : email,
          phone : phone,
          password : password,
        };
      const response = registerHandler(payload);
      if(response){
        alert("Successfully Signed In");
        setLogin(1);
      }
      else{
        alert("try again!");
      }
     
    }

  }

  const loginPageHandler = (event) => {
    event.preventDefault();

      if(!email ){
        alert("Email cant be empty");
      }
      else if(!password){
        alert("Password cant be empty");
      }
      else{
        const payload = {
          email : email,
          password : password
        };

        const response = loginHandler(payload).
        then((res)=>{
          console.log(res);
          localStorage.setItem("user",JSON.stringify(res.data.data));
          navigate("/");
        }).catch((err)=>{
          alert("Please try again ");
        });
      }
  };

  const toggleState = ()=>{
    
    setLogin(!isLogin)
  }


  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        {!isLogin && (<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={(event)=>registerPageHandler(event)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                onChange={(e)=>setName(e.target.value)}
                fullWidth
                id="name"
                label="User Name"
                name="name"
                autoComplete="name"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="number"
                onChange={(e)=>setPhone(e.target.value)}
                label="Phone Number"
                name="number"
                autoComplete="number"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={(e)=>setEmail(e.target.value)}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                onChange={(e)=>setPassword(e.target.value)}
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="repassword"
                onChange={(e)=>setRePassword(e.target.value)}
                label="Re-type Password"
                type="password"
                id="repassword"
                autoComplete="current-password"
                sx={{ 
                "&:hover": {
                  borderColor: "gray",
                  color:"gray"
                },
              }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 , backgroundColor:"black",color:"white",
                opacity: 0.8, // You should use a numeric value for opacity (0.5 for 50%)
                "&:hover": {
                  backgroundColor: "gray", // Change the background color on hover
                  color: "white", // Change the text color on hover
                },
              }}
              
              >
                Sign Up
              </Button>
              <Grid container>
                
                <Grid item>
                  <label variant="body2" >
                   <button style={{border:"none",borderBottomWidth:"2px",borderBottomStyle:"solid",borderBottom:"orangered",backgroundColor:"white",color:"orangered",cursor:"pointer"}} onClick={toggleState}> {"Already Have Account? Sign In"}</button>
                  </label>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>)}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://c0.wallpaperflare.com/preview/245/481/204/bakery-signage-at-night.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {isLogin && (<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={(event)=>loginPageHandler(event)} sx={{ mt: 1 }}>
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              onChange={(e)=>setEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={(e)=>setPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor:"black",color:"white",
              opacity: 0.8, // You should use a numeric value for opacity (0.5 for 50%)
              "&:hover": {
                backgroundColor: "gray", // Change the background color on hover
                color: "white", // Change the text color on hover
              },
            }}
            >
              Sign In
            </Button>
            <Grid container>
              
              <Grid item>
                <label  variant="body2" >
                 <button style={{border:"none",borderBottomWidth:"2px",borderBottomStyle:"solid",borderBottom:"orangered",backgroundColor:"white",color:"orangered",cursor:"pointer"}} onClick={toggleState}> {"Don't have account? Sign Up"}</button>
                 <button style={{border:"none",borderBottomWidth:"2px",borderBottomStyle:"solid",borderBottom:"orangered",backgroundColor:"white",color:"orangered",cursor:"pointer"}} > <a href='/forgot-password'>{"Forgot Password ?"}</a></button>
                </label>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>)}
      </Grid>
    </ThemeProvider>
  );
}

export default SignInSide;