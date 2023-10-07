import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router'
import { updateOrderPaymentFailureStatusHandler, updateOrderPaymentSuccessStatusHandler } from '../../services/orderApi';

const Order = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    

    useEffect(()=>{
        func(queryParams.get("orderId"),queryParams.get("state"));
    },[]);


    const func = async(id,state)=>{
        
        if(String(state) === String("success")){
        toast.loading("Updating...");
        const response = updateOrderPaymentSuccessStatusHandler(id)
        .then((res)=>{
            toast.dismiss();
            toast.success("Successfully updated the status");
            navigate(`/order/${id}`);
        }).catch((err)=>{
            toast.dismiss();

            toast.error("Failed While adding order Status");
        });
    }
    else{
    
        toast.loading("Updating...");
        const response =  updateOrderPaymentFailureStatusHandler(id)
        .then((res)=>{
            toast.dismiss();
            toast.success("Successfully updated the status");
            navigate(`/order/${id}`);
        }).catch((err)=>{
            toast.dismiss();

            toast.error("Failed While adding order Status");
        });
    }
    }
 
  return (
    <div>Order</div>
  )
}

export default Order