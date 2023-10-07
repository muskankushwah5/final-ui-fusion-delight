import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import './Item.css'; 
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { specificOrderDetailHandler, specificOrderHandler } from '../../services/orderApi';
import toast from 'react-hot-toast';



const OrderPage = () => {

    const { orderId } = useParams();
    const [data , setData ] = useState([]);


    useEffect(()=>{
      toast.loading("Getting specific reservations");
      const data = specificOrderDetailHandler(orderId)
      .then((res)=>{
        setData(res.data);
        toast.success("Successfully fetched"); 
      }).
      catch((err)=>{
        toast.error("Failed");
      })
    },[orderId]);
    toast.dismiss();
  return (
    <>
    <Navbar/>
    <div style={{ backgroundColor: "lightgray", width: "100%", height: "100%" }}>
    <div className="order-page" >
      <h1>Your Order of Id : {orderId}</h1>
      {data?.foodDescription?.map((order) => (
        <div key={order._id} className="order-item">
          <div className="order-image" style={{width:"100%",height:"100%"}}>
            <img src={orders[0].image} alt={order.name} style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="order-details">
            <h2>{order.foodTitle}</h2>
            <p><strong>Quantity:</strong> {order.Quantity}</p>
            <p><strong>Price:</strong> ${order.prize.toFixed(2)}</p>
            {order.foodChoices === true && (<p><strong>Description:</strong> {order.foodChoices[0].choice_type} - ${order.foodChoices[0].choice_prize}</p>)}
            <p><strong>Order Date/Time:</strong> {new Date(data.createdAt).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
    <div className = "order-page" style={{backgroundColor:"white",fontWeight:"bold",fontSize:"48px"}}>
    <div key={data?.deliveryInfo?._id} className="order-item">
    <div className="order-image" style={{width:"100%",height:"100%"}}>
     <h1 style={{color:"green"}}>Total Prize : ${data.totalPrize}</h1>
    </div>
    {data?.deliveryInfo  ===true && (<div className="order-details">
      <h2>Delivery Info:</h2>
      <p><strong>Name:</strong> {data?.deliveryInfo?.name}</p>
      <p><strong>Number Date/Time:</strong> {data?.deliveryInfo?.number}</p>
    </div>)}
  </div>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default OrderPage;
