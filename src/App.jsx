import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom"

import HomePage from "./components/HomePage";
import Article from "./components/Article/Article";
import SignInSide from "./components/Login/SignInSide";
import Reservation from "./components/Reservations/Reservation";
import UserPage from "./components/UserPage/UserPage";
import OrderPage from "./components/Item/Item";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Order from "./components/Orders/Order";
import ReservationPage from "./components/Item/ReservationPage";
import ForgotPassword from "./components/Login/ForgotPassword";


const App = () => {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<SignInSide/>}/>
        <Route exact path="/reservation" element={<Reservation/>}/>
        <Route exact path="/user" element={<UserPage/>}/>
        <Route exact path="/paymentSuccess" element={<Order/>}/>
        <Route exact path="/forgot-password" element={<ForgotPassword/>}/>
        <Route exact path="/reservation/:reservationId" element={<ReservationPage/>}/>
        <Route exact path="/order/:orderId" element={<OrderPage/>}/>
        <Route exact path="/" element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
