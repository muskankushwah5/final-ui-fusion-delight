import React, { useEffect, useState } from 'react';
import './UserPage.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { specificOrderHandler } from '../../services/orderApi';
import { specificBookingHandler } from '../../services/bookingApi';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';


const domain = 'https://fusion-delight-website-server.onrender.com/uploads';
const UserPage = () => {
  
  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
  if(!userData){
    navigate("/login");
  }

 const [orderData, setOrderData] = useState([]);
 const [pastOrder, setPastOrder] = useState([]);
 const [currentOrder, setCurrentOrder] = useState([]);
  const [reservationData, setReservationData] = useState([]);

  useEffect(()=>{
    toast.loading("Getting orders");
      const response = specificOrderHandler(userData.email)
      .then((res)=>{
      setOrderData(res.data);
      const tempPastOrder =  res.data.filter((order,index)=>{
        if(order.orderStatus === "delivered")
         return true
      });
      toast.dismiss();

      setPastOrder(tempPastOrder);
      const tempCurrentOrder = res.data.filter((order,index)=>{
        if(order.orderStatus !== "delivered")
         return true
      });

      setCurrentOrder(tempCurrentOrder);
      return res.data;
      })
      .catch((err)=>{
        toast.error(err);
      });

      toast.loading("getting specific orders");
      const response2 = specificBookingHandler(userData.email)
      .then((res)=>{
        setReservationData(res.data);
      })
      .catch((err)=>{
        toast.error(err);
      });
      toast.dismiss();
      


  },[]);

  return (
    <div>
      <Navbar />
      <div style={{ backgroundColor: "lightgray", width: "100%", height: "100%" }}>
        <div className="user-page">
          <div className="user-info sub-section">
            <div className="user-image">
              <img src={`${userData.profileImage}`} alt="User" />
            </div>
            <h1>User Information</h1>
            <p><strong>Name:</strong> {userData.name}</p>
            <p><strong>Email:</strong> {userData.email}</p>
            {/* Add more user info fields here */}
          </div>

          <h2>Your Orders and Reservations</h2>

          {/* Past Orders */}
          <section className="order-section">
            <h3>Past Orders</h3>
            <ul>
              {pastOrder?.map((order) => (
                <div className='sub-section'>
                <li key={order._id}>
                <div>{order._id}</div>
                  <div>${order.totalPrize}</div>
                  <div className='user-specific-button'>
                  <button ><a href={`/order/${order._id}`}>View</a></button>
                  </div>
                </li>
                </div>
              ))}
            </ul>
          </section>

          <section className="reservation-section">
            <h3>Reservations</h3>
            <ul>
              {reservationData?.map((reservation) => (
                <div className='sub-section'>
                <li key={reservation._id}>
                  <div>{reservation.date} {reservation.time}</div>
                  <div className='user-specific-button'>
                  <button ><a href={`/reservation/${reservation._id}`}>View</a></button>
                  </div>
                  </li>
                </div>
              ))}
            </ul>
          </section>

          {/* Current Orders */}
          <section className="order-section">
            <h3>Current Orders</h3>
            <ul>
              {currentOrder?.map((order) => (
               <div className='sub-section'>
                <li key={order._id}>
                <div>{order._id}</div>
                  <div>${order.totalPrize}</div>
                  <div className='user-specific-button'>
                  <button ><a href={`/order/${order._id}`}>View</a></button>
                  </div>
                </li>
                </div>
              ))}
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default UserPage;
