import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { addBookingHandler } from '../../services/bookingApi';
import { Navigate, useNavigate } from 'react-router';
import Navbar from '../Navbar/Navbar';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function Reservation() {


  const userData = (JSON.parse(localStorage.getItem("user")));

  const navigate = useNavigate();

  if(!userData){
    navigate("/login");
  }
    const [formData, setFormData] = React.useState({
        name: '',
        tableNo: '',
        date: '',
        time: '',
        preferance: '',
      });
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const payload = {
          email: userData.email,
          date: formData.date,
          time: formData.time,
          preferance: formData.preferance,
        };

        const response = addBookingHandler(payload)
        .then((res)=>{
          navigate("/user")
        })
        .catch((err)=>{
          alert(err);
        });



    
        // Reset form fields
        // setFormData({
        //   name: '',
        //   tableNo: '',
        //   date: '',
        //   time: '',
        //   preferance: '',
        // });
      };
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

  return (
    <><Navbar/>
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
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
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Reserve Your Table Here
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"

                required
                fullWidth
                id="name"
                label="Email"
                type='email'
                value={userData.email}
                onChange={handleInputChange}
              />
             
              <TextField
                margin="normal"
                required
                fullWidth
                name="date"
                type="date"
                id="date"
                autoComplete="date"
                value={formData.date}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="time"
                type="time"
                id="time"
                autoComplete="time"
                value={formData.time}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="preferance"
                type="text"
                placeholder='Any Preferances'
                id="preferance"
                autoComplete="preferance"
                value={formData.preferance}
                onChange={handleInputChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}
              >
                Book a Table
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
    </>
  );
}