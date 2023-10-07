import axios from 'axios'
const domain = "https://fusion-delight-website-server.onrender.com";

export const addBookingHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/booking/add-booking`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}

export const cancelBookingHandler =async (payload)=>{
    try{
        const response = await axios.post(`${domain}/api/booking/delete-booking`,payload);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}



export const specificBookingHandler =async (id)=>{
    try{
        const response = await axios.get(`${domain}/api/booking/specific-booking/${id}`);
        console.log(response.data);
        return response.data;
    } 
    catch (err){
        console.log(err.message);
    }
}

export const specificBookingDetailHandler =async (id)=>{
    try{
        const response = await axios.get(`${domain}/api/booking/specific-reservation-detail/${id}`);
        console.log(response.data);
        return response.data;
    } 
    catch (err){
        console.log(err.message);
    }
}


export const allBookingHandler =async ()=>{
    try{
        const response = await axios.get(`${domain}/api/booking/get-booking`);
        console.log(response.data);
        return response.data;
    }
    catch (err){
        console.log(err.message);
    }
}
