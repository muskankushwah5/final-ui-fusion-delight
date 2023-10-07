import axios from 'axios'
const domain = "https://fusion-delight-website-server.onrender.com";

export const addOrderHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/order/add-order`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateOrderStatusHandler =async (payload,id)=>{
    try{
        const response = await axios.put(`${domain}/api/order/update-status/${id}`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const getPaymentValidate =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/getPaymentToken`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}


export const deleteOrderHandler =async (id)=>{
    try{
        const response = await axios.delete(`${domain}/api/order/delete-order/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const specificOrderHandler =async (id)=>{
    try{
        const response = await axios.get(`${domain}/api/order/specific-user-order/${id}`);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const specificOrderDetailHandler =async (id)=>{
    try{
        const response = await axios.get(`${domain}/api/order/specific-order-details/${id}`);
        
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const allOrdersHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/order/all-orders`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateOrderPaymentSuccessStatusHandler =async (id)=>{
    try{
        const response = await axios.put(`${domain}/api/order/update-success-status/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const updateOrderPaymentFailureStatusHandler =async (id)=>{
    try{
        const response = await axios.put(`${domain}/api/order/update-failure-status/${id}`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
