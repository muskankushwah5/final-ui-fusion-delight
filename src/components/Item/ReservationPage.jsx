import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import './Item.css'; 
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { specificOrderDetailHandler, specificOrderHandler } from '../../services/orderApi';
import toast from 'react-hot-toast';
import { specificBookingDetailHandler, specificBookingHandler } from '../../services/bookingApi';

const orders = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://th.bing.com/th?q=Burger+Clip+Art&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247&thvar=defdefault',
    quantity: 2,
    price: 20.0,
    description: 'Description for Product 1',
    orderDateTime: '2023-09-01 10:30 AM',
  }
  // Add more order data as needed
];

const ReservationPage = () => {

  
  const navigate = useNavigate();
  const userData = (JSON.parse(localStorage.getItem("user")));
  if(!userData){
    navigate("/login");
  }

    const { reservationId } = useParams();
    const [data , setData ] = useState([]);


    useEffect(()=>{
      const data = specificBookingDetailHandler(reservationId)
      .then((res)=>{
        setData(res.data);
        console.log(res.data);
        toast.success("Successfully fetched"); 
      }).
      catch((err)=>{
        toast.error("Failed");
      })
    },[]);
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "lightgray", width: "100%", height: "100%" }}>
    <div className="order-page" >
      <h1>Your Reservation of Id : {reservationId}</h1>
     
        <div key={data?._id} className="order-item">
          <div className="image-icon-image" >
            <img src={"https://th.bing.com/th?id=OIP.tCQ2_qi3YH97E7-3rzvD9AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"} alt={data?._id} style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="order-details">
            <h2>{data?.email}</h2>
            <p><strong>Date:</strong> {data?.date}</p>
            <p><strong>Time:</strong> {data?.time}</p>
            <p><strong>Time:</strong> {data?.time}</p>
           </div>
        </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default ReservationPage;
