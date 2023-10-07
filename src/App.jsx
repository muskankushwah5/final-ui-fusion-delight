import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './components/HomePage';
import Article from './components/Article/Article';
import SignInSide from './components/Login/SignInSide';
import Reservation from './components/Reservations/Reservation';
import UserPage from './components/UserPage/UserPage';
import OrderPage from './components/Item/Item';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Order from './components/Orders/Order';
import ReservationPage from './components/Item/ReservationPage';
import ForgotPassword from './components/Login/ForgotPassword';
import PrivateRouteWrapper from './Wrapper'; // Import the wrapper
import { Login } from '@mui/icons-material';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes (e.g., login, forgot password) */}
          <Route path="/login" element={<SignInSide />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* Protected routes wrapped with PrivateRouteWrapper */}
          <Route
            path="/reservation"
            element={
              <PrivateRouteWrapper>
                <Reservation />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRouteWrapper>
                <UserPage />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path="/paymentSuccess"
            element={
              <PrivateRouteWrapper>
                <Order />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path="/reservation/:reservationId"
            element={
              <PrivateRouteWrapper>
                <ReservationPage />
              </PrivateRouteWrapper>
            }
          />
          <Route
            path="/order/:orderId"
            element={
              <PrivateRouteWrapper>
                <OrderPage />
              </PrivateRouteWrapper>
            }
          />

          <Route
            path="/"
            element={
              <PrivateRouteWrapper>
                <HomePage />
              </PrivateRouteWrapper>
            }
          />


          {/* Public homepage route */}
          <Route path="/login" element={<SignInSide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
